<div class="mt-4 grid grid-cols-1 gap-4">

    {{-- ===================== APPOINTMENTS SECTION ===================== --}}
    <div
        class="overflow-hidden rounded-[20px]
               border border-violet-100/80
               bg-white
               shadow-[0_4px_20px_rgba(124,58,237,0.06)]"
    >

        {{-- ===================== Header ===================== --}}
        <div class="flex items-center gap-3 p-3.5">

            {{-- Icon --}}
            <div
                class="flex h-12 w-12 shrink-0 items-center justify-center
                       rounded-[16px]
                       bg-violet-100
                       text-violet-600"
            >
                <i class="pi pi-calendar text-xl"></i>
            </div>

            {{-- Title --}}
            <div class="min-w-0 flex-1">

                <div class="text-[10px] font-medium text-slate-400">
                    المواعيد
                </div>

                <h2 class="mt-0.5 text-[15px] font-extrabold text-slate-900 sm:text-base">
                    المواعيد
                </h2>

            </div>

            {{-- Count --}}
            <div
                class="flex h-9 min-w-9 items-center justify-center
                       rounded-full
                       bg-violet-100
                       px-3
                       text-xs font-extrabold
                       text-violet-700"
            >
                {{ count($appointments ?? []) }}
            </div>

        </div>


        {{-- ===================== Appointments ===================== --}}
        <div class="space-y-3 border-t border-violet-100 bg-[#fcfbff] p-3.5">

            @forelse($appointments ?? [] as $appointment)

                {{-- ===================== Appointment Card ===================== --}}
                <div
                    class="group overflow-hidden rounded-[20px]
                           border border-violet-100
                           bg-white p-3
                           shadow-[0_3px_15px_rgba(124,58,237,0.04)]
                           transition-all duration-200
                           hover:-translate-y-0.5
                           hover:shadow-[0_8px_25px_rgba(124,58,237,0.08)]"
                >

                    {{-- ===================== Appointment Header ===================== --}}
                    <div class="flex items-center gap-3">

                        {{-- Clinic Icon --}}
                        <div
                            class="flex h-11 w-11 shrink-0 items-center justify-center
                                   rounded-[15px]
                                   bg-violet-100
                                   text-violet-600"
                        >
                            <i class="pi pi-home text-lg"></i>
                        </div>


                        {{-- Clinic --}}
                        <div class="min-w-0 flex-1">

                            <div class="text-[10px] font-medium text-slate-400">
                                العيادة
                            </div>

                            <div
                                class="mt-0.5 truncate text-sm font-extrabold
                                       text-slate-900 sm:text-base"
                                title="{{ $appointment->clinic?->name }}"
                            >
                                {{ $appointment->clinic?->name ?? '-' }}
                            </div>

                        </div>


                        {{-- Status --}}
                        @if($appointment->status)

                            <span
                                class="inline-flex shrink-0 items-center
                                       rounded-full
                                       bg-violet-100
                                       px-2.5 py-1
                                       text-[10px]
                                       font-bold
                                       text-violet-700"
                            >
                                {{ __($appointment->status) }}
                            </span>

                        @endif

                    </div>


                    {{-- ===================== Appointment Details ===================== --}}
                    <div class="mt-3 grid grid-cols-2 gap-2">


                        {{-- Date --}}
                        <div
                            class="rounded-[15px]
                                   border border-violet-50
                                   bg-[#faf8ff]
                                   px-3 py-2.5
                                   transition-all duration-200
                                   hover:bg-violet-50"
                        >

                            <div class="flex items-center gap-1.5">

                                <div
                                    class="flex h-6 w-6 items-center justify-center
                                           rounded-full
                                           bg-violet-100
                                           text-violet-600"
                                >
                                    <i class="pi pi-calendar text-[10px]"></i>
                                </div>

                                <span class="text-[10px] font-medium text-slate-400">
                                    التاريخ
                                </span>

                            </div>

                            <div
                                class="mt-1.5 truncate text-xs
                                       font-bold text-slate-800"
                            >
                                {{ $appointment->date
                                    ? \Carbon\Carbon::parse($appointment->date)->format('Y-m-d')
                                    : '-' }}
                            </div>

                        </div>


                        {{-- Time --}}
                        <div
                            class="rounded-[15px]
                                   border border-violet-50
                                   bg-[#faf8ff]
                                   px-3 py-2.5
                                   transition-all duration-200
                                   hover:bg-violet-50"
                        >

                            <div class="flex items-center gap-1.5">

                                <div
                                    class="flex h-6 w-6 items-center justify-center
                                           rounded-full
                                           bg-violet-100
                                           text-violet-600"
                                >
                                    <i class="pi pi-clock text-[10px]"></i>
                                </div>

                                <span class="text-[10px] font-medium text-slate-400">
                                    الوقت
                                </span>

                            </div>

                            <div
                                class="mt-1.5 truncate text-xs
                                       font-bold text-slate-800"
                            >
                                {{ $appointment->date
                                 ? \Carbon\Carbon::parse($appointment->date)->format('h:i A')
                                 : '-' }}

                            </div>

                        </div>


                        {{-- Status --}}
                        <div
                            class="rounded-[15px]
                                   border border-violet-50
                                   bg-[#faf8ff]
                                   px-3 py-2.5
                                   transition-all duration-200
                                   hover:bg-violet-50"
                        >

                            <div class="flex items-center gap-1.5">

                                <div
                                    class="flex h-6 w-6 items-center justify-center
                                           rounded-full
                                           bg-violet-100
                                           text-violet-600"
                                >
                                    <i class="pi pi-info-circle text-[10px]"></i>
                                </div>

                                <span class="text-[10px] font-medium text-slate-400">
                                    الحالة
                                </span>

                            </div>

                            <div class="mt-1.5">

                                @if($appointment->status)

                                    <span
                                        class="inline-flex items-center
                                               rounded-lg
                                               bg-violet-100
                                               px-2 py-1
                                               text-[10px]
                                               font-bold
                                               text-violet-700"
                                    >
                                        {{ __($appointment->status) }}
                                    </span>

                                @else

                                    <span class="text-xs font-bold text-slate-700">
                                        -
                                    </span>

                                @endif

                            </div>

                        </div>


                        {{-- Clinic --}}
                        <div
                            class="rounded-[15px]
                                   border border-violet-50
                                   bg-[#faf8ff]
                                   px-3 py-2.5
                                   transition-all duration-200
                                   hover:bg-violet-50"
                        >

                            <div class="flex items-center gap-1.5">

                                <div
                                    class="flex h-6 w-6 items-center justify-center
                                           rounded-full
                                           bg-violet-100
                                           text-violet-600"
                                >
                                    <i class="pi pi-building text-[10px]"></i>
                                </div>

                                <span class="text-[10px] font-medium text-slate-400">
                                    العيادة
                                </span>

                            </div>

                            <div
                                class="mt-1.5 truncate text-xs
                                       font-bold text-slate-800"
                            >
                                {{ $appointment->clinic?->name ?? '-' }}
                            </div>

                        </div>


                        {{-- ===================== Procedures ===================== --}}
                        <div
                            class="col-span-2
                                   rounded-[15px]
                                   border border-violet-50
                                   bg-[#faf8ff]
                                   px-3 py-2.5"
                        >

                            <div class="flex items-center gap-1.5">

                                <div
                                    class="flex h-6 w-6 items-center justify-center
                                           rounded-full
                                           bg-violet-100
                                           text-violet-600"
                                >
                                    <i class="pi pi-list text-[10px]"></i>
                                </div>

                                <span class="text-[10px] font-medium text-slate-400">
                                    الإجراءات
                                </span>

                            </div>


                            <div class="mt-2">

                                @if($appointment->procedures?->isNotEmpty())

                                    <div class="flex flex-wrap gap-1.5">

                                        @foreach($appointment->procedures as $procedure)

                                            <span
                                                class="inline-flex items-center
                                                       rounded-lg
                                                       bg-violet-100
                                                       px-2.5 py-1
                                                       text-[10px]
                                                       font-bold
                                                       text-violet-700"
                                            >
                                                {{ $procedure->procedure?->name ?? '-' }}
                                            </span>

                                        @endforeach

                                    </div>

                                @else

                                    <span class="text-xs font-bold text-slate-500">
                                        -
                                    </span>

                                @endif

                            </div>

                        </div>

                    </div>

                </div>

            @empty

                {{-- ===================== Empty State ===================== --}}
                <div
                    class="rounded-[20px]
                           border border-violet-100
                           bg-white p-7 text-center
                           shadow-[0_4px_20px_rgba(124,58,237,0.05)]"
                >

                    <div
                        class="mx-auto flex h-14 w-14 items-center justify-center
                               rounded-[18px]
                               bg-violet-100
                               text-violet-500"
                    >
                        <i class="pi pi-calendar-times text-xl"></i>
                    </div>

                    <div class="mt-3 text-sm font-bold text-slate-500">
                        {{ __('No appointments found') }}
                    </div>

                </div>

            @endforelse

        </div>

    </div>

</div>
