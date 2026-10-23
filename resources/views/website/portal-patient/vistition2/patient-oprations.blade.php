
@extends('website.portal-patient.app')

@section('title', 'Patient')

@section('content')

    <section
        class="min-h-screen bg-gradient-to-b from-blue-50 via-slate-50 to-white"
        dir="rtl"
    >

        <div class="mx-auto w-full max-w-[90rem] px-1 pb-8 sm:px-1">


            {{-- Patient Sections --}}
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
            {{-- Patient Sections --}}
            <div class="mt-4 grid grid-cols-2 gap-3 sm:gap-4">

                {{-- ===================== تشخيص ===================== --}}
                @if($patientTimelineSetting->assessment)
                <a
                    href="{{route('visitations.show_diagnose', ['id' => $patient->uuid,'visitationId' => $visitation->id])}}"
                    class="group block">
                    <div
                        class="relative overflow-hidden rounded-xl border border-slate-100
                               bg-white p-3 shadow-[0_3px_16px_rgba(15,23,42,0.05)]
                               transition-all duration-200
                               hover:-translate-y-0.5
                               hover:shadow-[0_8px_25px_rgba(15,23,42,0.09)]
                               active:scale-[0.98]"
                    >
                        <div class="flex items-center gap-2.5">

                            <div
                                class="flex h-11 w-11 shrink-0 items-center justify-center
                                       rounded-xl bg-blue-50 text-blue-600"
                            >
                                <i class="pi pi-file-edit text-xl"></i>
                            </div>

                            <div class="min-w-0 flex-1">
                                <h2 class="truncate text-sm font-extrabold text-slate-900 sm:text-base">
                                    التشخيص
                                </h2>
                            </div>

                            <div
                                class="flex h-8 w-8 shrink-0 items-center justify-center
                                       rounded-full bg-slate-50 text-slate-400
                                       transition-all group-hover:bg-blue-50
                                       group-hover:text-blue-600"
                            >
                                <i class="pi pi-angle-left text-xs"></i>
                            </div>

                        </div>
                    </div>
                </a>

                @endif



                {{-- ===================== الوصفة ===================== --}}
                @if($patientTimelineSetting->prescription)
                <a
                    href="{{route('visitations.show_prescription', ['id' => $patient->uuid,'visitationId' => $visitation->id])}}"
                    class="group block">
                    <div
                        class="relative overflow-hidden rounded-xl border border-slate-100
                               bg-white p-3 shadow-[0_3px_16px_rgba(15,23,42,0.05)]
                               transition-all duration-200
                               hover:-translate-y-0.5
                               hover:shadow-[0_8px_25px_rgba(15,23,42,0.09)]
                               active:scale-[0.98]"
                    >
                        <div class="flex items-center gap-2.5">

                            <div
                                class="flex h-11 w-11 shrink-0 items-center justify-center
                                       rounded-xl bg-purple-50 text-purple-600"
                            >
                                <i class="pi pi-file text-xl"></i>
                            </div>

                            <div class="min-w-0 flex-1">
                                <h2 class="truncate text-sm font-extrabold text-slate-900 sm:text-base">
                                    الوصفة
                                </h2>
                            </div>

                            <div
                                class="flex h-8 w-8 shrink-0 items-center justify-center
                                       rounded-full bg-slate-50 text-slate-400
                                       transition-all group-hover:bg-purple-50
                                       group-hover:text-purple-600"
                            >
                                <i class="pi pi-angle-left text-xs"></i>
                            </div>

                        </div>
                    </div>
                </a>
                @endif
                {{-- ===================== إجراءات ===================== --}}
                @if($patientTimelineSetting->orders)
                <a
                    href="{{route('visitations.show_orders', ['id' => $patient->uuid,'visitationId' => $visitation->id])}}"
                    class="group block">
                    <div
                        class="relative overflow-hidden rounded-xl border border-slate-100
                               bg-white p-3 shadow-[0_3px_16px_rgba(15,23,42,0.05)]
                               transition-all duration-200
                               hover:-translate-y-0.5
                               hover:shadow-[0_8px_25px_rgba(15,23,42,0.09)]
                               active:scale-[0.98]"
                    >
                        <div class="flex items-center gap-2.5">

                            <div
                                class="flex h-11 w-11 shrink-0 items-center justify-center
                                       rounded-xl bg-emerald-50 text-emerald-600"
                            >
                                <i class="pi-folder-open text-xl"></i>
                            </div>

                            <div class="min-w-0 flex-1">
                                <h2 class="truncate text-sm font-extrabold text-slate-900 sm:text-base">
                                    الفحوصات
                                </h2>
                            </div>

                            <div
                                class="flex h-8 w-8 shrink-0 items-center justify-center
                                       rounded-full bg-slate-50 text-slate-400
                                       transition-all group-hover:bg-emerald-50
                                       group-hover:text-emerald-600"
                            >
                                <i class="pi pi-angle-left text-xs"></i>
                            </div>

                        </div>
                    </div>
                </a>
                @endif
                {{-- ===================== المواعيد ===================== --}}
                @if($patientTimelineSetting->appointments)
                <a
                    href="{{route('visitations.show_appointments', ['id' => $patient->uuid,'visitationId' => $visitation->id])}}"
                    class="group block">
                    <div
                        class="relative overflow-hidden rounded-xl border border-slate-100
                               bg-white p-3 shadow-[0_3px_16px_rgba(15,23,42,0.05)]
                               transition-all duration-200
                               hover:-translate-y-0.5
                               hover:shadow-[0_8px_25px_rgba(15,23,42,0.09)]
                               active:scale-[0.98]"
                    >
                        <div class="flex items-center gap-2.5">

                            <div
                                class="flex h-11 w-11 shrink-0 items-center justify-center
                                       rounded-xl bg-cyan-50 text-cyan-600"
                            >
                                <i class="pi pi-calendar text-xl"></i>
                            </div>

                            <div class="min-w-0 flex-1">
                                <h2 class="truncate text-sm font-extrabold text-slate-900 sm:text-base">
                                    المواعيد
                                </h2>
                            </div>

                            <div
                                class="flex h-8 w-8 shrink-0 items-center justify-center
                                       rounded-full bg-slate-50 text-slate-400
                                       transition-all group-hover:bg-cyan-50
                                       group-hover:text-cyan-600"
                            >
                                <i class="pi pi-angle-left text-xs"></i>
                            </div>

                        </div>
                    </div>
                </a>
                @endif
                {{-- ===================== invoices ===================== --}}
                @if($patientTimelineSetting->invoices)
                <a
                    href="{{route('visitations.show_invoices', ['id' => $patient->uuid,'visitationId' => $visitation->id])}}"
                    class="group block">
                    <div
                        class="relative overflow-hidden rounded-xl border border-slate-100
                               bg-white p-3 shadow-[0_3px_16px_rgba(15,23,42,0.05)]
                               transition-all duration-200
                               hover:-translate-y-0.5
                               hover:shadow-[0_8px_25px_rgba(15,23,42,0.09)]
                               active:scale-[0.98]"
                    >
                        <div class="flex items-center gap-2.5">

                            <div
                                class="flex h-11 w-11 shrink-0 items-center justify-center
                                       rounded-xl bg-cyan-50 text-cyan-600"
                            >
                                <i class="pi pi-money-bill text-xl"></i>
                            </div>

                            <div class="min-w-0 flex-1">
                                <h2 class="truncate text-sm font-extrabold text-slate-900 sm:text-base">
                                    الفواتير
                                </h2>
                            </div>

                            <div
                                class="flex h-8 w-8 shrink-0 items-center justify-center
                                       rounded-full bg-slate-50 text-slate-400
                                       transition-all group-hover:bg-cyan-50
                                       group-hover:text-cyan-600"
                            >
                                <i class="pi pi-angle-left text-xs"></i>
                            </div>

                        </div>
                    </div>
                </a>
                @endif

                {{-- ===================== attachments ===================== --}}
                @if($patientTimelineSetting->attachments)
                    <a
                        href="{{route('visitations.show_attachments', ['id' => $patient->uuid,'visitationId' => $visitation->id])}}"
                        class="group block">
                        <div
                            class="relative overflow-hidden rounded-xl border border-slate-100
                               bg-white p-3 shadow-[0_3px_16px_rgba(15,23,42,0.05)]
                               transition-all duration-200
                               hover:-translate-y-0.5
                               hover:shadow-[0_8px_25px_rgba(15,23,42,0.09)]
                               active:scale-[0.98]"
                        >
                            <div class="flex items-center gap-2.5">

                                <div
                                    class="flex h-11 w-11 shrink-0 items-center justify-center
                                       rounded-xl bg-blue-50 text-blue-600  "
                                >
                                    <i class="pi pi-image text-xl"></i>
                                </div>

                                <div class="min-w-0 flex-1">
                                    <h2 class="truncate text-sm font-extrabold text-slate-900 sm:text-base">
                                        المرفقات
                                    </h2>
                                </div>

                                <div
                                    class="flex h-8 w-8 shrink-0 items-center justify-center
                                       rounded-full bg-slate-50 text-slate-400
                                       transition-all group-hover:bg-cyan-50
                                       group-hover:text-cyan-600"
                                >
                                    <i class="pi pi-angle-left text-xs"></i>
                                </div>

                            </div>
                        </div>
                    </a>
                @endif
            </div>

        </div>

    </section>

@endsection

