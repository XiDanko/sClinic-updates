@extends('layouts.app')

@section('title', 'Home Page')

@section('content')

    {{-- ===== Hero Section ===== --}}
    <section class="bg-gradient-to-l from-blue-50 to-blue-100">
        <div class="max-w-[90rem] mx-auto px-4 pt-1 flex flex-col md:flex-row items-center gap-8">

            {{-- نص --}}
            <div class="flex-1">
                @if($portalPage->title)
                    <h1 class="text-3xl md:text-4xl font-bold text-gray-900">{{$portalPage->title}}</h1>
                @endif

                @if($portalPage->subtitle)
                    <p class="mt-4 text-gray-600">
                        {{$portalPage->subtitle}}
                    </p>
                @endif
                @if(session('success'))
                    <div class="mb-4 p-4 text-sm text-green-800 rounded-lg bg-green-50 border border-green-300"
                         role="alert">
                        {{ session('success') }}
                    </div>
                @endif
                <div class="mt-6 flex space-x-reverse space-x-4">

                    @if($portalPage->online_booking)

                        {{----------------------------------------------------------------------------------------}}

                        <a class="bg-blue-700 text-white px-4 py-2 text-center rounded-lg min-w-[200px]"
                           href="{{ route('portal_patients.reservation') }}"> حجز موعد</a>

                        <!-- Modal -->
                        <div id="myModal"
                             class="hidden fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                            @include('website.form')
                        </div>
                        {{----------------------------------------------------------------------------------------}}
                    @endif
                </div>

                <div class="mt-6 space-y-1 text-sm">
                    @if($portalPage->phone_number)
                        <p>الاستفسارات: <a href="tel:2164442200" class="text-blue-600">{{$portalPage->phone_number}}</a>
                        </p>
                    @endif
                </div>
            </div>

            @if($portalPage->image_path)
                <div class="flex-1">
                    <img src="/storage/{{$portalPage->image_path}}" alt=""
                         class="w-auto max-h-[400px] mx-auto float-end object-contain">
                </div>
            @endif
        </div>
    </section>
    {{-- ===== Section Title ===== --}}
    <section class="py-12 bg-white text-center">
        <div class="max-w-4xl mx-auto">
            @if($portalPage->advertisement_text)
                {!! $portalPage->advertisement_text !!}
            @endif
        </div>
    </section>

    {{-- ===== Cards Grid ===== --}}
    <section class="bg-gray-50 py-12">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            @foreach($portalServices  as $row)
                {{-- Card 1 --}}
                <div class="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                    <div class="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-full mb-4">
                        <img src="/storage/{{$row->image_path}}" alt="">
                    </div>
                    <h3 class="text-lg font-bold text-gray-900">{{$row->title}}</h3>
                    <p class="mt-2 text-gray-600 text-sm">
                        {{$row->description}}
                    </p>
                </div>
            @endforeach
        </div>

        <div class="max-w-4xl mx-auto mt-10">
            @if($portalPage->footer_text)
                {!! $portalPage->footer_text !!}
            @endif
        </div>
        <script>
            const modal = document.getElementById('myModal');
            const openBtn = document.getElementById('openModal');
            const closeBtn = document.getElementById('closeModal');

            openBtn.addEventListener('click', () => modal.classList.remove('hidden'));
            closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
        </script>
@endsection


