@php
    /*
    |--------------------------------------------------------------------------
    | Read dental chart data
    |--------------------------------------------------------------------------
    | Supports Eloquent attributes named adult_dental_chart / pedo_dental_chart,
    | camelCase attributes, JSON strings, and already-decoded arrays.
    */
    $chartType = 'adult';

    $adultDentalChart = data_get($assessment, 'adult_dental_chart');
    if ($adultDentalChart === null) {
        $adultDentalChart = data_get($assessment, 'adultDentalChart');
    }

    $pedoDentalChart = data_get($assessment, 'pedo_dental_chart');
    if ($pedoDentalChart === null) {
        $pedoDentalChart = data_get($assessment, 'pedoDentalChart');
    }

    if (is_string($adultDentalChart)) {
        $decoded = json_decode($adultDentalChart, true);
        $adultDentalChart = json_last_error() === JSON_ERROR_NONE ? $decoded : [];
    }

    if (is_string($pedoDentalChart)) {
        $decoded = json_decode($pedoDentalChart, true);
        $pedoDentalChart = json_last_error() === JSON_ERROR_NONE ? $decoded : [];
    }

    $adultDentalChart = is_array($adultDentalChart) ? $adultDentalChart : [];
    $pedoDentalChart = is_array($pedoDentalChart) ? $pedoDentalChart : [];

    if (!empty($adultDentalChart)) {
        $dentalChart = $adultDentalChart;
    } elseif (!empty($pedoDentalChart)) {
        $chartType = 'pedo';
        $dentalChart = $pedoDentalChart;
    } else {
        $dentalChart = [];
    }

    // Normalize tooth keys to integers and sort them.
    $sortedChart = [];
    foreach ($dentalChart as $key => $value) {
        if (is_numeric($key) && is_array($value)) {
            $sortedChart[(int) $key] = $value;
        }
    }
    ksort($sortedChart, SORT_NUMERIC);

    // The supplied chart uses internal tooth slots 1..32.
    $shouldShowTooth = function ($number) use ($chartType) {
        if ($chartType === 'pedo') {
            return ($number >= 4 && $number <= 13)
                || ($number >= 20 && $number <= 29);
        }

        return $number >= 1 && $number <= 32;
    };

    $getToothPositionName = function ($number) use ($visitation, $chartType) {
        $system = data_get($visitation, 'clinic.dentalNumberingSystem', 'universal');

        if ($system === 'palmer') {
            if ($number <= 8) {
                $position = 9 - $number;
                $angle = 'UR';
            } elseif ($number <= 16) {
                $position = $number - 8;
                $angle = 'UL';
            } elseif ($number <= 24) {
                $position = 25 - $number;
                $angle = 'LL';
            } else {
                $position = $number - 24;
                $angle = 'LR';
            }

            if ($chartType === 'pedo') {
                return $angle . strtoupper(base_convert($position + 9, 10, 36));
            }

            return $angle . $position;
        }

        if ($system === 'international') {
            if ($number <= 8) {
                $position = (9 - $number) + 10;
            } elseif ($number <= 16) {
                $position = ($number - 8) + 20;
            } elseif ($number <= 24) {
                $position = (25 - $number) + 30;
            } else {
                $position = ($number - 24) + 40;
            }

            return $chartType === 'pedo' ? $position + 40 : $position;
        }

        // Universal numbering.
        if ($chartType === 'adult') {
            return $number;
        }

        if ($number < 17) {
            return strtoupper(base_convert($number - 3 + 9, 10, 36));
        }

        return strtoupper(base_convert($number - 9 + 9, 10, 36));
    };

    // Read a condition state safely, e.g. filling.root.state.
    $hasState = function ($tooth, $path) {
        return (bool) data_get($tooth, $path . '.state', false);
    };

    // Return a safe fallback color when a condition has no color.
    $colorFor = function ($tooth, $path) {
        $color = data_get($tooth, $path . '.color', '#ef4444');
        return is_string($color) && trim($color) !== '' ? $color : '#ef4444';
    };
@endphp

<style>
    .dental-chart-wrapper { width: 100%; color: #334155; font-family: Arial, Helvetica, sans-serif; }
    .dental-chart-legend { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px 16px; margin-bottom: 18px; font-size: 12px; }
    .dental-chart-quadrant { margin-bottom: 24px; padding: 14px; border: 1px solid #e9e4f5; border-radius: 14px; background: #faf8ff; }
    .dental-chart-quadrant-title { margin-bottom: 12px; color: #6d28d9; font-size: 13px; font-weight: 700; text-align: center; }
    .dental-chart-grid { display: grid; grid-template-columns: repeat(8, minmax(0, 1fr)); gap: 10px 5px; }
    .dental-chart-tooth-item { min-width: 0; text-align: center; }
    .dental-chart-tooth-number { margin-bottom: 5px; font-size: 11px; font-weight: 700; overflow-wrap: anywhere; }
    .dental-chart-tooth { position: relative; width: 100%; max-width: 46px; height: 52px; margin: 0 auto; border: 1px solid #cbd5e1; border-radius: 9px; background: #fff; box-sizing: border-box; overflow: hidden; }
    .dental-chart-missing { position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: #e2e8f0; opacity: .85; }
    .dental-chart-crown { position: absolute; top: 4px; right: 4px; bottom: 4px; left: 4px; border: 2px solid #64748b; border-radius: 6px; }
    .dental-chart-vaneer { position: absolute; top: 1px; right: 1px; bottom: 1px; left: 1px; border: 2px solid #3b82f6; border-radius: 7px; }
    .dental-chart-implant { position: absolute; top: 11px; left: 50%; width: 13px; height: 28px; border: 2px solid #334155; border-radius: 8px; transform: translateX(-50%); box-sizing: border-box; }
    .dental-chart-extracted:before, .dental-chart-extracted:after { position: absolute; top: 50%; left: 7%; width: 86%; height: 2px; background: #ef4444; content: ''; }
    .dental-chart-extracted:before { transform: rotate(45deg); }
    .dental-chart-extracted:after { transform: rotate(-45deg); }
    .dental-chart-impacted { position: absolute; top: 7px; right: 7px; bottom: 7px; left: 7px; border: 2px solid #ef4444; border-radius: 50%; }
    .dental-chart-rotated, .dental-chart-drifting { position: absolute; z-index: 3; top: 50%; left: 50%; font-size: 19px; font-weight: 700; line-height: 1; transform: translate(-50%, -50%); }
    .dental-chart-filling { position: absolute; z-index: 4; width: 8px; height: 8px; border-radius: 2px; box-sizing: border-box; }
    .dental-chart-filling-center { top: 50%; left: 50%; transform: translate(-50%, -50%); }
    .dental-chart-filling-top { top: 4px; left: 50%; transform: translateX(-50%); }
    .dental-chart-filling-bottom { bottom: 4px; left: 50%; transform: translateX(-50%); }
    .dental-chart-filling-left { top: 50%; left: 4px; transform: translateY(-50%); }
    .dental-chart-filling-right { top: 50%; right: 4px; transform: translateY(-50%); }
    .dental-chart-filling-root { bottom: 2px; left: 50%; width: 12px; height: 4px; transform: translateX(-50%); }
    .dental-chart-bridge { position: absolute; z-index: 5; top: 2px; right: 2px; padding: 1px 3px; border-radius: 4px; background: #7c3aed; color: #fff; font-size: 8px; line-height: 1.2; }
    .dental-chart-procedures { margin-top: 5px; font-size: 10px; line-height: 1.4; overflow-wrap: anywhere; }
    .dental-chart-procedure-count { display: inline-block; padding: 2px 6px; border-radius: 12px; background: #ede9fe; color: #6d28d9; font-size: 10px; font-weight: 700; }
    .dental-chart-empty { padding: 18px; border: 1px dashed #c4b5fd; border-radius: 12px; color: #64748b; text-align: center; }
    @media (min-width: 700px) { .dental-chart-grid { grid-template-columns: repeat(8, minmax(0, 1fr)); gap: 12px 7px; } .dental-chart-tooth { height: 58px; } }
    @media (max-width: 360px) { .dental-chart-quadrant { padding: 8px 5px; } .dental-chart-grid { gap: 8px 3px; } .dental-chart-tooth { height: 42px; } .dental-chart-legend { gap: 6px 10px; } }
</style>

<div class="dental-chart-wrapper mt-5">
    @if (empty($sortedChart))
        <div class="dental-chart-empty">No dental chart data available.</div>
    @else
        <div class="dental-chart-legend">
            <span><strong>UR</strong> Upper Right</span>
            <span><strong>UL</strong> Upper Left</span>
            <span><strong>LL</strong> Lower Left</span>
            <span><strong>LR</strong> Lower Right</span>
        </div>

        @foreach (['UR' => [1, 8], 'UL' => [9, 16], 'LL' => [17, 24], 'LR' => [25, 32]] as $quadrant => $range)
            @php
                $quadrantTeeth = [];
                foreach ($sortedChart as $toothNumber => $toothData) {
                    if (!$shouldShowTooth((int) $toothNumber)) {
                        continue;
                    }
                    if ($toothNumber >= $range[0] && $toothNumber <= $range[1]) {
                        $quadrantTeeth[$toothNumber] = $toothData;
                    }
                }

                // Show each quadrant from the midline outwards.
                if ($quadrant === 'UR' || $quadrant === 'LL') {
                    krsort($quadrantTeeth, SORT_NUMERIC);
                } else {
                    ksort($quadrantTeeth, SORT_NUMERIC);
                }
            @endphp

            @if (!empty($quadrantTeeth))
                <div class="dental-chart-quadrant">
                    <div class="dental-chart-quadrant-title">{{ $quadrant }}</div>
                    <div class="dental-chart-grid">
                        @foreach ($quadrantTeeth as $toothNumber => $tooth)
                            @php
                                $toothName = $getToothPositionName((int) $toothNumber);
                                $missing = $hasState($tooth, 'missing');
                                $procedures = data_get($tooth, 'procedures', []);
                                if (!is_array($procedures) && !$procedures instanceof \Countable) {
                                    $procedures = [];
                                }
                                $fillingPositions = ['center', 'top', 'bottom', 'left', 'right', 'root'];
                                $bridge = $hasState($tooth, 'bridge');
                                $bridgeLocation = data_get($tooth, 'bridge.location');
                                $driftingDirection = data_get($tooth, 'drifting.direction');
                                $rotatedDirection = data_get($tooth, 'rotated.direction');
                            @endphp

                            <div class="dental-chart-tooth-item" title="Tooth {{ $toothName }}">
                                <div class="dental-chart-tooth-number" style="color: {{ $missing ? '#dc2626' : '#475569' }};">
                                    {{ $toothName }}
                                </div>

                                <div class="dental-chart-tooth">
                                    @if ($missing)<div class="dental-chart-missing" title="Missing"></div>@endif
                                    @if ($hasState($tooth, 'crown'))<div class="dental-chart-crown" title="Crown"></div>@endif
                                    @if ($hasState($tooth, 'vaneer'))<div class="dental-chart-vaneer" title="Veneer"></div>@endif
                                    @if ($hasState($tooth, 'implant'))<div class="dental-chart-implant" title="Implant"></div>@endif
                                    @if ($hasState($tooth, 'extracted'))<div class="dental-chart-extracted" title="Extracted"></div>@endif

                                    @if ($hasState($tooth, 'impacted'))
                                        <div class="dental-chart-impacted" style="border-color: {{ $colorFor($tooth, 'impacted') }};" title="Impacted"></div>
                                    @endif

                                    @if ($hasState($tooth, 'rotated'))
                                        <span class="dental-chart-rotated" style="color: {{ $colorFor($tooth, 'rotated') }};" title="Rotated {{ $rotatedDirection }}">{{ $rotatedDirection ?: '↻' }}</span>
                                    @endif

                                    @if ($hasState($tooth, 'drifting'))
                                        <span class="dental-chart-drifting" style="color: {{ $colorFor($tooth, 'drifting') }};" title="Drifting {{ $driftingDirection }}">
                                            @if ($driftingDirection === 'left') ←
                                            @elseif ($driftingDirection === 'up') ↑
                                            @elseif ($driftingDirection === 'down') ↓
                                            @else →
                                            @endif
                                        </span>
                                    @endif

                                    @if ($bridge)
                                        <span class="dental-chart-bridge" title="Bridge{{ $bridgeLocation ? ': ' . $bridgeLocation : '' }}">B</span>
                                    @endif

                                    @foreach ($fillingPositions as $position)
                                        @if ($hasState($tooth, 'filling.' . $position))
                                            <span class="dental-chart-filling dental-chart-filling-{{ $position }}" style="background-color: {{ $colorFor($tooth, 'filling.' . $position) }};" title="Filling: {{ ucfirst($position) }}"></span>
                                        @endif
                                    @endforeach
                                </div>

                                @if (!empty($procedures))
                                    <div class="dental-chart-procedures">
                                        <span class="dental-chart-procedure-count">{{ count($procedures) }}</span>
                                        @foreach ($procedures as $procedure)
                                            <div>
                                                {{ data_get($procedure, 'name', data_get($procedure, 'title', 'Procedure')) }}
                                                @if (data_get($procedure, 'date')) ({{ data_get($procedure, 'date') }}) @endif
                                            </div>
                                        @endforeach
                                    </div>
                                @endif
                            </div>
                        @endforeach
                    </div>
                </div>
            @endif
        @endforeach
    @endif
</div>
