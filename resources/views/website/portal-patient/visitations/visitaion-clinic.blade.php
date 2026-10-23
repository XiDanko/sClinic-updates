<div
    class="relative overflow-hidden rounded-[12px]
                               border border-slate-100
                               bg-white
                               p-4
                               shadow-[0_3px_16px_rgba(15,23,42,0.05)]
                               transition-all duration-200
                               hover:-translate-y-0.5
                               hover:shadow-[0_8px_25px_rgba(15,23,42,0.09)]
                               active:scale-[0.99]
                               mt-3
                               "
>

    <div class="flex items-center gap-3">


        {{-- ===================================== --}}
        {{-- Visit Icon --}}
        {{-- ===================================== --}}

        <div
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-emerald-50 text-emerald-600"
        >

            <i class="pi pi-calendar-plus text-2xl"></i>

        </div>


        {{-- ===================================== --}}
        {{-- Visit Content --}}
        {{-- ===================================== --}}

        <div class="min-w-0 flex-1">

            {{-- Doctor / Clinic --}}
            <div class="flex items-center gap-2">

                <h2
                    class="truncate text-base font-extrabold text-slate-900 sm:text-lg"
                >
                    {{ $visitation->clinic->name ?? 'العيادة الطبية' }}
                </h2>

            </div>


            {{-- Date --}}
            <div
                class="mt-1 flex items-center gap-2 text-sm text-slate-400"
            >

                <i class="pi pi-calendar text-xs"></i>

                <span>
                                        {{ \Carbon\Carbon::parse($visitation->created_at)->format('Y-m-d') }}
                                    </span>

            </div>
        </div>



    </div>

</div>
