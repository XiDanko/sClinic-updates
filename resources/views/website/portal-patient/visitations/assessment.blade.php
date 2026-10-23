<div class="mb-6 border-t pt-6">

    <h3 class="text-lg font-semibold mb-3">
        Assessment
    </h3>
    @foreach($assessment->complains ?? [] as $complain)
        <span
            class="inline-flex items-center me-3 px-2.5 py-1 rounded-md text-sm font-medium
               bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
        >
        {{ $complain->name }}
    </span>
    @endforeach
    <div class="mt-4">
        @if($assessment?->diagnosis)
            <span
                class="inline-flex items-center me-3 px-2.5 py-1 rounded-md text-sm font-medium
                   bg-blue-100 text-blue-800"
            >
            {{ $assessment->diagnosis->name }}
        </span>
        @endif
    </div>

    @if($visitation->assessmentType === 'dental' && $assessment)
        <div class="grid grid-cols-2 sm:grid-cols-2 gap-4 p-2">

            {{-- Chart Type --}}
            <div class="col-span-2 text-center pb-5 mt-4">
                <div class="inline-flex rounded-md border overflow-hidden">
                    <button
                        type="button"
                        class="px-4 py-2 text-sm font-medium"
                    >
                        Adult
                    </button>

                    <button
                        type="button"
                        class="px-4 py-2 text-sm font-medium"
                    >
                        Pedo
                    </button>
                </div>
            </div>

            {{-- Dental Chart --}}
            <div class="col-span-2">
                {{-- Dental chart goes here --}}
            </div>

        </div>
    @endif

    {{-- Assessment Report --}}
    @if($assessment?->report)
        <div class="my-5">
            {!! $assessment->report !!}
        </div>
    @endif


</div>
