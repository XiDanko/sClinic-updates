@extends('website.portal-patient.app')

@section('title', 'Patient')

@section('content')

    <section
        class="min-h-screen bg-gradient-to-b from-blue-50 via-slate-50 to-white mb-10"
        dir="rtl"
    >

        <div class="mx-auto w-full max-w-[90rem] px-1 pb-8 sm:px-1">



            {{-- Patient Sections --}}

            {{-- Patient Sections --}}
            <div class="pt-1">
                @include('website.portal-patient.visitations.invoices',
                     ['invoices' => $invoices,]
               )
            </div>

        </div>

    </section>

@endsection

