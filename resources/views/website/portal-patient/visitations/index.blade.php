<div class="bg-white rounded-xl shadow-sm border overflow-hidden">
    <!-- Followups -->
    @if($patientTimelineSetting)
        <div class="mt-2 p-0  mb-10">
            @include('website.portal-patient.visitations.patient-info', [
                         'patient' => $patient])
        </div>
    @endif

    <!-- Followups -->
    @if($patientTimelineSetting->followups)
        <div class="mt-2 p-0  mb-10">
            @include('website.portal-patient.visitations.followups', [
                         'followups' => $patient->followups])
        </div>
    @endif
    <!-- Appointments -->
    @if($patientTimelineSetting->appointments)
        <div class="mt-1 p-0   mb-10 ">


            @include('website.portal-patient.visitations.appointments', [
                'appointments' => $patient->appointments,
            ])

        </div>
    @endif
</div>
<div class="bg-white rounded-xl shadow-sm border overflow-hidden p-1">


    {{-- Visitation Header --}}
    <div class="grid grid-cols-1 gap-0">
        <div>
            <div class="flex items-center justify-between">

                {{-- Icon --}}
                <div
                    class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         class="h-5 w-5"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                         stroke-width="1.8">
                        <rect x="3" y="4" width="18" height="17" rx="2"/>
                        <path stroke-linecap="round" d="M16 2v4M8 2v4M3 9h18"/>
                        <path stroke-linecap="round" d="M8 13h2m-1-1v2m5-1h2"/>
                    </svg>
                </div>

                {{-- Title --}}
                <div class="flex-1 px-3">
                    <h2 class="text-lg font-bold text-slate-900">
                        الزيارات
                    </h2>
                </div>

                {{-- Count --}}
                <div
                    class="flex min-h-9 min-w-9 items-center justify-center rounded-full
                       bg-blue-50 px-3 text-sm font-bold text-blue-700"
                >
                    {{ count($appointments ?? []) }}
                </div>

            </div>
        </div>
        {{-- Visitation --}}
        <div class="grid grid-cols-2 gap-1">

            {{-- Clinic --}}
            <div class="flex min-w-0 items-center gap-2.5 rounded-md bg-orange-50 px-2 py-1.5">

                <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    <i class="pi pi-home text-xs"></i>
                </div>

                <div class="min-w-0 flex-1">
                    <div class="text-[11px] font-medium text-gray-500">
                        الزيارة
                    </div>

                    <div
                        class="mt-0.5 truncate text-sm font-semibold text-gray-900">
                        #{{ $visitation->id }}
                    </div>
                </div>

            </div>
            {{-- Clinic --}}
            <div class="flex min-w-0 items-center gap-2.5 rounded-md bg-orange-50 px-2 py-1.5">

                <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    <i class="pi pi-calendar text-xs"></i>
                </div>

                <div class="min-w-0 flex-1">
                    <div class="text-[11px] font-medium text-gray-500">
                        تاريخ
                    </div>

                    <div
                        class="mt-0.5 truncate text-sm font-semibold text-gray-900">
                        {{ $visitation->created_at?->format('Y-m-d H:i') ?? '-' }}
                    </div>
                </div>

            </div>


            {{------------------------------------------------------------------------------------------------------------------}}
            {{-- Clinic --}}
            <div class="flex min-w-0 items-center gap-2.5 rounded-md bg-orange-50 px-2 py-1.5">

                <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    <i class="pi pi-home text-xs"></i>
                </div>

                <div class="min-w-0 flex-1">
                    <div class="text-[11px] font-medium text-gray-500">
                        العيادة
                    </div>

                    <div
                        class="mt-0.5 truncate text-sm font-semibold text-gray-900">
                        {{ $visitation->clinic->name }}
                    </div>
                </div>

            </div>
            {{-- Clinic --}}
            <div class="flex min-w-0 items-center gap-2.5 rounded-md bg-orange-50 px-2 py-1.5">

                <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    <i class="pi pi-info text-xs"></i>
                </div>

                <div class="min-w-0 flex-1">
                    <div class="text-[11px] font-medium text-gray-500">
                      الحالة
                    </div>

                    <div
                        class="mt-0.5 truncate text-sm font-semibold text-gray-900">
                        @if($visitation->status)
                            <div class="mt-0.5">
                    <span
                        class="inline-flex items-center rounded-md
                               px-2 py-1 text-[10px] font-medium
                               {{ $visitation->status === 'completed'
                                   ? 'bg-green-100 text-green-700'
                                   : 'bg-gray-100 text-gray-700' }}"
                    >
                        {{ __($visitation->status) }}
                    </span>
                                @endif
                            </div>
                    </div>
                </div>

            </div>
            {{------------------------------------------------------------------------------------------------------------------}}
        </div>


    </div>


    {{---------------------------------------------------------------------------------------------------------------}}
    @if($patientTimelineSetting->medical_history)
        @if($patient->medicalHistory)
            <div
                id="assessment_{{ $patient->id }}"
                class="mt-2 p-0"
            >

                @include('website.portal-patient.visitations.medical-history', [
                    'medicalHistory' => $patient->medicalHistory,
                ])
            </div>
        @endif
    @endif
    {{---------------------------------------------------------------------------------------------------------------}}
    @if($patientTimelineSetting->invoices)
        @if($invoices?->isNotEmpty())
            <div
                id="inv_{{ $patient->id }}"
                class="mt-2 p-0"
            >
                <div class="flex items-center justify-center my-4">
                    <div class="border-b border-dotted border-gray-400 flex-1"></div>

                    <b class="text-xl px-4">
                        {{ __('Invoices') }}
                    </b>

                    <div class="border-b border-dotted border-gray-400 flex-1"></div>
                </div>
                @include('website.portal-patient.visitations.invoices', [
                    'invoices' => $invoices,
                ])
            </div>
        @endif
    @endif
    {{---------------------------------------------------------------------------------------------------------------}}
    @if($patientTimelineSetting->assessment && $visitation->assessment)

        <div
            id="assessment_{{ $visitation->id }}"
            class="mt-2 p-0"
        >
            {{-- Header --}}
            <div>
                <div class="flex items-center justify-between">

                    {{-- Icon --}}
                    <div
                        class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             class="h-5 w-5"
                             fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor"
                             stroke-width="1.8">
                            <rect x="3" y="4" width="18" height="17" rx="2"/>
                            <path stroke-linecap="round" d="M16 2v4M8 2v4M3 9h18"/>
                            <path stroke-linecap="round" d="M8 13h2m-1-1v2m5-1h2"/>
                        </svg>
                    </div>

                    {{-- Title --}}
                    <div class="flex-1 px-3">
                        <h2 class="text-lg font-bold text-slate-900">
                            تشخيص
                        </h2>
                    </div>


                </div>
            </div>
            <div class="grid grid-cols-2 gap-0">

                {{-- Complaints --}}
                <div
                    class="flex min-w-0 items-start gap-2.5
                       bg-blue-50 py-2 px-2 mt-1 mb-1
                       transition-all hover:bg-blue-50/40"
                >


                    <div class="min-w-0 flex-1 mr-2">

                        <div class="text-[11px] font-medium text-gray-500">
                            يشكي من
                        </div>

                        <div class="mt-1 flex flex-wrap gap-1">

                            @forelse($visitation->assessment->complains ?? [] as $complain)

                                <span
                                    class="inline-flex items-center rounded-md
                                       bg-blue-100 px-2 py-1
                                       text-[10px] font-medium text-blue-800"
                                >
                                {{ $complain->name }}
                            </span>

                            @empty

                                <span class="text-sm font-semibold text-gray-900">
                                -
                            </span>

                            @endforelse

                        </div>

                    </div>
                </div>


                {{-- Diagnosis --}}
                <div
                    class="flex min-w-0 items-start gap-2.5
                       bg-red-50 py-2 px-2 mt-1 mb-1
                       transition-all hover:bg-red-50/40"
                >


                    <div class="min-w-0 flex-1 mr-2">

                        <div class="text-[11px] font-medium text-gray-500">
                            تشخبص
                        </div>

                        @if($visitation->assessment->diagnosis)

                            <div class="mt-1">
                            <span
                                class="inline-flex items-center rounded-md
                                       bg-red-100 px-2 py-1
                                       text-[10px] font-medium text-red-800"
                            >
                                {{ $visitation->assessment->diagnosis->name }}
                            </span>
                            </div>

                        @else

                            <div class="mt-1 text-sm font-semibold text-gray-900">
                                -
                            </div>

                        @endif

                    </div>
                </div>


                {{-- Dental Assessment --}}
                @if($visitation->assessmentType === 'dental')

                    <div
                        class="col-span-2
                           flex min-w-0 items-start gap-2.5
                           bg-purple-50 py-2 px-2 mt-1 mb-1
                           transition-all hover:bg-purple-50/40"
                    >


                        <div class="min-w-0 flex-1 mr-2">

                            <div class="text-[11px] font-medium text-gray-500 mb-2">
                                تقييم الأسنان
                            </div>

                            @include('website.portal-patient.visitations.dental-chart', [
                                'visitation' => $visitation,
                                'assessment' => $visitation->assessment,
                            ])

                        </div>

                    </div>

                @endif


                {{-- Report --}}
                @if($visitation->assessment->report)

                    <div
                        class="col-span-2
                           flex min-w-0 items-start gap-2.5
                           bg-amber-50 py-2 px-2 mt-1 mb-1
                           transition-all hover:bg-amber-50/40"
                    >



                        <div class="min-w-0 flex-1 mr-2">

                            <div class="text-[11px] font-medium text-gray-500">
                                تقرير
                            </div>

                            <div class="mt-1 text-sm text-gray-900 leading-relaxed">
                                {!! $visitation->assessment->report !!}
                            </div>

                        </div>

                    </div>

                @endif

            </div>

        </div>

    @endif
    {{---------------------------------------------------------------------------------------------------------------}}
    @if($patientTimelineSetting->prescription)
        {{-- Prescription --}}
        @if($visitation->prescription)
            <div class="flex items-center justify-center my-4">
                <div class="border-b border-dotted border-gray-400 flex-1"></div>

                <b class="text-xl px-4">
                    وصفات طبية
                </b>

                <div class="border-b border-dotted border-gray-400 flex-1"></div>
            </div>

            @include(
                'website.portal-patient.visitations.prescription',
                [ 'prescriptionItems' => $visitation->prescription->prescriptionItems,]
            )

        @endif
    @endif
    {{---------------------------------------------------------------------------------------------------------------}}
    @if($patientTimelineSetting->procedures)
        @if($visitation->invoiceItems)
            <div id="invoice_{{ $visitation->id }}" class="mt-10 p-2">

                <div class="flex items-center justify-center my-4">
                    <div class="border-b border-dotted border-gray-400 flex-1"></div>

                    <b class="text-xl px-4">
                        إجراءات
                    </b>

                    <div class="border-b border-dotted border-gray-400 flex-1"></div>
                </div>
                @include('website.portal-patient.visitations.procedure-fields', [
                    'invoiceItems' => $visitation->invoiceItems,
                ])

            </div>
        @endif
    @endif

    {{---------------------------------------------------------------------------------------------------------------}}
    @if($patientTimelineSetting->external_service_requests)
        @if($visitation->treatmentPlan?->externalServiceRequests?->isNotEmpty())
            <div class="mt-10 p-2">

                <div class="flex items-center justify-center my-4">
                    <div class="border-b border-dotted border-gray-400 flex-1"></div>

                    <b class="text-xl px-4">
                        طلبات الخدمات الخارجية
                    </b>

                    <div class="border-b border-dotted border-gray-400 flex-1"></div>
                </div>
                @include('website.portal-patient.visitations.external-service-requests', [
                              'externalServiceRequests' => $visitation->treatmentPlan->externalServiceRequests,

                ])

            </div>
        @endif
    @endif
    {{---------------------------------------------------------------------------------------------------------------}}
    @if($patientTimelineSetting->orders)
        @if($visitation->orders?->isNotEmpty())

            <div class="mt-10 p-2">

                <div class="flex items-center justify-center my-4">
                    <div class="border-b border-dotted border-gray-400 flex-1"></div>

                    <b class="text-xl px-4">
                        طلبات
                    </b>

                    <div class="border-b border-dotted border-gray-400 flex-1"></div>
                </div>
                @include('website.portal-patient.visitations.orders', [
                              'visitation' => $visitation,

                ])

            </div>
        @endif
    @endif

    {{---------------------------------------------------------------------------------------------------------------}}
    {{---------------------------------------------------------------------------------------------------------------}}
    @if($patientTimelineSetting->attachments)
        @if($visitation->attachments?->isNotEmpty())

            <div class="mt-10 p-2">

                <div class="flex items-center justify-center my-4">
                    <div class="border-b border-dotted border-gray-400 flex-1"></div>

                    <b class="text-xl px-4">
                        المرفقات
                    </b>

                    <div class="border-b border-dotted border-gray-400 flex-1"></div>
                </div>
                @include('website.portal-patient.visitations.attachments', [
                                          'attachments' => $visitation->attachments,

                ])

            </div>
        @endif
    @endif

    {{---------------------------------------------------------------------------------------------------------------}}
    @if($patientTimelineSetting->health_information)
        @if($visitation->healthInformation)

            <div class="mt-10 p-2">

                <div class="flex items-center justify-center my-4">
                    <div class="border-b border-dotted border-gray-400 flex-1"></div>

                    <b class="text-xl px-4">
                        معلومات صحية

                    </b>

                    <div class="border-b border-dotted border-gray-400 flex-1"></div>
                </div>
                @include('website.portal-patient.visitations.health-information', [
                                          'healthInformation' => $visitation->healthInformation,
                ])

            </div>
        @endif
    @endif


</div>
