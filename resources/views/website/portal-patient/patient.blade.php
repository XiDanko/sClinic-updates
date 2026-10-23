@extends('website.portal-patient.app')

@section('title', 'Patient')

@section('content')

    <section class="bg-gradient-to-l from-blue-50 to-blue-100">
        <div class="max-w-[90rem] mx-auto px-0 py-1">


            <div class="space-y-1">

                @forelse($patient->visitations as $visitation)

                    @include(
                        'website.portal-patient.visitations.index',
                        ['visitation' => $visitation,'patient'=>$patient]
                    )

                @empty

                    <div class="bg-white rounded-xl p-6 text-center">
                        No visitations found.
                    </div>

                @endforelse

            </div>

        </div>
    </section>

@endsection
