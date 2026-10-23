<div class="mt-4 grid grid-cols-1 gap-3 sm:gap-4 mb-[100px]">

    {{-- ===================== الشكاوى ===================== --}}
    <div class="group block">
        <div
            class="relative overflow-hidden rounded-xl border border-slate-100
                   bg-white p-3 shadow-[0_3px_16px_rgba(15,23,42,0.05)]
                   transition-all duration-200
                   hover:-translate-y-0.5
                   hover:shadow-[0_8px_25px_rgba(15,23,42,0.09)]"
        >
            <div class="flex items-start gap-2.5">

                <div
                    class="flex h-11 w-11 shrink-0 items-center justify-center
                           rounded-xl bg-blue-50 text-blue-600"
                >
                    <i class="pi pi-user text-xl"></i>
                </div>

                <div class="min-w-0 flex-1">

                    <div class="flex items-center justify-between gap-2">
                        <h2 class="text-sm font-extrabold text-slate-900 sm:text-base">
                            يشكي من
                        </h2>


                    </div>

                    <div class="mt-2 flex flex-wrap gap-1.5">

                        @forelse($visitation->assessment->complains ?? [] as $complain)

                            <span
                                class="inline-flex items-center rounded-lg
                                       bg-blue-50 px-2.5 py-1
                                       text-[10px] font-semibold text-blue-700"
                            >
                                {{ $complain->name }}
                            </span>

                        @empty

                            <span class="text-xs font-semibold text-slate-400">
                                لا توجد شكاوى
                            </span>

                        @endforelse

                    </div>
                </div>
            </div>
        </div>
    </div>


    {{-- ===================== التشخيص ===================== --}}
    <div class="group block">
        <div
            class="relative overflow-hidden rounded-xl border border-slate-100
                   bg-white p-3 shadow-[0_3px_16px_rgba(15,23,42,0.05)]
                   transition-all duration-200
                   hover:-translate-y-0.5
                   hover:shadow-[0_8px_25px_rgba(15,23,42,0.09)]"
        >
            <div class="flex items-start gap-2.5">

                <div
                    class="flex h-11 w-11 shrink-0 items-center justify-center
                           rounded-xl bg-red-50 text-red-600"
                >
                    <i class="pi pi-heart text-xl"></i>
                </div>

                <div class="min-w-0 flex-1">

                    <div class="flex items-center justify-between gap-2">

                        <h2 class="text-sm font-extrabold text-slate-900 sm:text-base">
                            التشخيص
                        </h2>



                    </div>

                    @if($visitation->assessment->diagnosis)

                        <div class="mt-2">
                            <span
                                class="inline-flex items-center rounded-lg
                                       bg-red-50 px-2.5 py-1
                                       text-[10px] font-semibold text-red-700"
                            >
                                {{ $visitation->assessment->diagnosis->name }}
                            </span>
                        </div>

                    @else

                        <div class="mt-2 text-xs font-semibold text-slate-400">
                            لا يوجد تشخيص
                        </div>

                    @endif

                </div>
            </div>
        </div>
    </div>


    {{-- ===================== تقييم الأسنان ===================== --}}
    @if($visitation->clinic->speciality === 'dental1')

        <div class="group block">

            <div
                class="relative overflow-hidden rounded-xl border border-slate-100
                       bg-white p-3 shadow-[0_3px_16px_rgba(15,23,42,0.05)]
                       transition-all duration-200
                       hover:-translate-y-0.5
                       hover:shadow-[0_8px_25px_rgba(15,23,42,0.09)]"
            >

                <div class="flex items-start gap-2.5">

                    <div
                        class="flex h-11 w-11 shrink-0 items-center justify-center
                               rounded-xl bg-purple-50 text-purple-600"
                    >
                        <i class="pi pi-star text-xl"></i>
                    </div>

                    <div class="min-w-0 flex-1">

                        <div class="flex items-center justify-between gap-2">

                            <h2 class="text-sm font-extrabold text-slate-900 sm:text-base">
                                تقييم الأسنان
                            </h2>



                        </div>

                        <div class="mt-3">

                            @include(
                                'website.portal-patient.visitations.dental-chart',
                                [
                                    'visitation' => $visitation,
                                    'assessment' => $visitation->assessment,
                                ]
                            )

                        </div>

                    </div>
                </div>
            </div>

        </div>

    @endif


    {{-- ===================== التقرير ===================== --}}
    @if($visitation->assessment->report)

        <div class="group block">

            <div
                class="relative overflow-hidden rounded-xl border border-slate-100
                       bg-white p-3 shadow-[0_3px_16px_rgba(15,23,42,0.05)]
                       transition-all duration-200
                       hover:-translate-y-0.5
                       hover:shadow-[0_8px_25px_rgba(15,23,42,0.09)]"
            >

                <div class="flex items-start gap-2.5">

                    <div
                        class="flex h-11 w-11 shrink-0 items-center justify-center
                               rounded-xl bg-amber-50 text-amber-600"
                    >
                        <i class="pi pi-file text-xl"></i>
                    </div>

                    <div class="min-w-0 flex-1">

                        <div class="flex items-center justify-between gap-2">

                            <h2 class="text-sm font-extrabold text-slate-900 sm:text-base">
                                التقرير
                            </h2>



                        </div>

                        <div class="mt-2 text-xs leading-6 text-slate-600">
                            {!! $visitation->assessment->report !!}
                        </div>

                    </div>
                </div>
            </div>

        </div>

    @endif

</div>
