@if($treatmentPlan)
    <div>

        <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse border border-gray-300">
                <thead>
                <tr>
                    <th class="border border-gray-300 px-4 py-2 text-start">
                        {{ __('Session Number') }}
                    </th>
                    <th class="border border-gray-300 px-4 py-2 text-start">
                        {{ __('Session Interval') }}
                    </th>
                    <th class="border border-gray-300 px-4 py-2 text-start">
                        {{ __('Notes') }}
                    </th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td class="border border-gray-300 px-4 py-2">
                        {{ $treatmentPlan->sessionNumber }}
                    </td>
                    <td class="border border-gray-300 px-4 py-2">
                        {{ $treatmentPlan->sessionInterval }}
                    </td>
                    <td class="border border-gray-300 px-4 py-2">
                        {{ $treatmentPlan->notes }}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        @if($treatmentPlan->plan)
            <div class="mt-4 border border-gray-300 px-4 py-3">
                {!! $treatmentPlan->plan !!}
            </div>
        @endif

    </div>
@endif
