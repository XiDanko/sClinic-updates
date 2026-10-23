<section class="bg-white rounded-xl shadow-sm border p-6">

    {{-- Visitation Header --}}
    <div class="flex items-center justify-between mb-6">

        <div>
            <h2 class="text-xl font-bold">
                Visitation #{{ $visitation->id }}
            </h2>

            <p class="text-sm text-gray-500">
                {{ $visitation->created_at?->format('Y-m-d H:i') }}
            </p>
        </div>

        <span class="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
            {{ $visitation->status }}
        </span>

    </div>


    {{-- Clinic --}}
    @if($visitation->clinic)

        <div class="mb-6">
            <h3 class="font-semibold mb-2">
                Clinic
            </h3>

            <div class="rounded-lg bg-gray-50 p-4">
                {{ $visitation->clinic->name }}
            </div>
        </div>

    @endif


    {{-- Assessment --}}
    @if($visitation->assessment)

        @include(
            'website.portal-patient.visitations.assessment',
            ['assessment' => $visitation->assessment]
        )

    @endif


    {{-- Orders --}}
    @if($visitation->orders?->isNotEmpty())

        @include(
            'website.portal-patient.visitations.orders',
            ['orders' => $visitation->orders]
        )

    @endif


    {{-- Prescription --}}
    @if($visitation->prescription)

        @include(
            'website.portal-patient.visitations.prescription',
            ['prescription' => $visitation->prescription]
        )

    @endif


    {{-- Health Information --}}
    @if($visitation->health_information)

        @include(
            'website.portal-patient.visitations.health-information',
            ['healthInformation' => $visitation->health_information]
        )

    @endif

</section>
