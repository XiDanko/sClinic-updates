
@extends('website.portal-patient.app')

@section('title', 'Patient')

@section('content')

    <section
        class="min-h-screen bg-gradient-to-b from-blue-50 via-slate-50 to-white"
        dir="rtl"
    >

        <div class="mx-auto w-full max-w-[90rem] px-1 pb-8 sm:px-1">

            {{-- Patient Information --}}
            <div class="pt-1">
                @include('website.portal-patient.visitations.visitaion-clinic', [
                    'visitation' => $visitation
                ])
            </div>

            {{-- Patient Sections --}}

            {{-- Patient Sections --}}
            @if($visitation->prescription)
                <div class="pt-1">
                    @include('website.portal-patient.visitations.prescription',
                         [ 'prescriptionItems' => $visitation->prescription->prescriptionItems,]
                   )
                </div>

            @endif
            @if(!$visitation->prescription)
                <div class="text-center mt-7">
                    لا يوجد وصفات
                </div>
            @endif

        </div>

    </section>

@endsection

