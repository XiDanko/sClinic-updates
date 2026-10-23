@extends('website.portal-patient.app')

@section('title', 'Patient')

@section('content')

    <section
        class="min-h-screen bg-gradient-to-b from-blue-50 via-slate-50 to-white"
        dir="rtl"
    >

        <div class="mx-auto w-full max-w-[90rem] px-1 pb-8 sm:px-1">



            {{-- ========================================================= --}}
            {{-- Previous Visits Header --}}
            {{-- ========================================================= --}}

            <div class="mt-7 flex items-center justify-between px-2">

                <div class="flex items-center gap-3">

                    <h1 class="text-xl font-extrabold tracking-tight text-slate-900">
                        الزيارات السابقة
                    </h1>

                    <span
                        class="flex h-8 min-w-8 items-center justify-center rounded-full bg-emerald-50 px-2 text-sm font-bold text-emerald-600"
                    >
                    {{ $patient->visitations->count() }}
                </span>

                </div>

            </div>


            {{-- ========================================================= --}}
            {{-- Visits --}}
            {{-- ========================================================= --}}

            <div class="mt-4 space-y-3">

                @forelse(
                    $patient->visitations->sortByDesc('visit_date')
                    as $visitation
                )

                    @php
                        if ($visitation->clinic->speciality==='Provider')
                            continue;
                    @endphp
                    @php
                        $status = $visitation->status ?? 'completed';
                    @endphp


                    {{-- ================================================= --}}
                    {{-- Visit Card --}}
                    {{-- ================================================= --}}

                    <a
                        href="{{route('visitations.show', ['id' => $patient->uuid,'visitationId' => $visitation->id])}}"
                        class="group block"
                    >

                        <div
                            class="relative overflow-hidden rounded-[12px]
                               border border-slate-100
                               bg-white
                               p-4
                               shadow-[0_3px_16px_rgba(15,23,42,0.05)]
                               transition-all duration-200
                               hover:-translate-y-0.5
                               hover:shadow-[0_8px_25px_rgba(15,23,42,0.09)]
                               active:scale-[0.99]"
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


                                {{-- ===================================== --}}
                                {{-- Arrow --}}
                                {{-- ===================================== --}}

                                <div
                                    class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all duration-200 group-hover:bg-blue-50 group-hover:text-blue-600"
                                >

                                    <i
                                        class="pi pi-angle-left text-sm"
                                    ></i>

                                </div>

                            </div>

                        </div>

                    </a>

                @empty

                    {{-- ================================================ --}}
                    {{-- Empty --}}
                    {{-- ================================================ --}}

                    <div
                        class="rounded-[24px] border border-slate-100 bg-white px-6 py-10 text-center shadow-sm"
                    >

                        <div
                            class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-500"
                        >
                            <i class="pi pi-calendar text-2xl"></i>
                        </div>

                        <h3
                            class="mt-4 text-base font-bold text-slate-700"
                        >
                            لا توجد زيارات سابقة
                        </h3>

                        <p
                            class="mt-2 text-sm leading-6 text-slate-400"
                        >
                            لم يتم العثور على أي زيارات مسجلة للمريض
                        </p>

                    </div>

                @endforelse

            </div>

        </div>

    </section>

@endsection
