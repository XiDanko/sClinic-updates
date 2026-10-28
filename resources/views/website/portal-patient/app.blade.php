<!DOCTYPE html>
<html
    lang="{{ app()->getLocale() }}"
    dir="{{ app()->getLocale() === 'en' ? 'rtl' : 'ltr' }}"
>
<head>
    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>
        @yield('title', 'My Website')
    </title>

    @vite('resources/styles/app.css')

    <link
        rel="icon"
        href="{{ asset('storage/assets/images/logo.png') }}"
        type="image/x-icon"
    >

    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />

    @stack('styles')
</head>

<body
    class="
        min-h-screen
        bg-gray-100
        text-gray-900
        antialiased
        {{ app()->getLocale() === 'ar' ? 'font-arabic' : '' }}
    "
>



<main class="pb-8">
    @if(isset($patient))
        <div class="pt-1">
            @include('website.portal-patient.visitations.patient-info', [
                'patient' => $patient,
                'appName' => $appName??null,
            ])
        </div>
    @endif
    <div class="mb-0"></div>
    @yield('content')

</main>

@stack('scripts')

</body>
</html>
