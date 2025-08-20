<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>@yield('title', 'My Website')</title>
    @vite('resources/styles/app.css')
    <link rel="icon" href="/storage/assets/images/logo.png" type="image/x-icon">
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
</head>
<body class="bg-gray-100 text-gray-900">
{{-- ===== Navbar ===== --}}
<nav class="bg-white shadow-sm border-b">
    <div class="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

        {{-- Right: Logo --}}
        <div class="flex items-center space-x-reverse space-x-4">
            @if($portalPage->logo_path)
                <a href="{{ url('/portal') }}" class="flex items-center">
                    <img src="{{ asset('storage/' . $portalPage->logo_path) }}" alt="Cleveland Clinic" class="h-10">
                </a>

            @endif
            <ul class="hidden md:flex space-x-reverse space-x-6 text-gray-700 font-medium">
                <li><a href="{{ url('/portal') }}" class="hover:text-blue-600">{{$portalPage->clinic_name}}</a></li>
            </ul>
        </div>

        {{-- Left: Social + Phone --}}
        <div class="flex items-center space-x-reverse space-x-4 text-gray-700">


            {{-- WhatsApp --}}
            @if($portalPage->phone_number)
                <a href="https://wa.me/964{{$portalPage->phone_number}}" target="_blank" class="hover:text-green-500">
                    <i class="fa-brands fa-whatsapp text-xl"></i>
                </a>
            @endif

            {{-- Facebook --}}
            @if($portalPage->facebook_link)
                <a href="{{$portalPage->facebook_link}}" target="_blank" class="hover:text-blue-600">
                    <i class="fa-brands fa-facebook text-xl"></i>
                </a>
            @endif
            {{-- Instagram --}}
            @if($portalPage->insta_link)
            <a href="{{$portalPage->insta_link}}" target="_blank" class="hover:text-pink-500">
                <i class="fa-brands fa-instagram text-xl"></i>
            </a>
            @endif
        </div>
    </div>
</nav>


@yield('content')
</body>
</html>
