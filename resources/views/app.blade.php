<!doctype html>
<html lang="{{ app()->getLocale() }}" dir="{{app()->getLocale() === 'ar' ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1280, user-scalable=no">
    <meta name='designer' content='Techport, info@techport-iq.com'>
    <link rel="icon" type="image/png" href="/storage/assets/favicon/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="/storage/assets/favicon/favicon.svg" />
    <link rel="shortcut icon" href="/storage/assets/favicon/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/storage/assets/favicon/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content="sClinic" />
    <link rel="manifest" href="/storage/assets/favicon/site.webmanifest" />
    <title>sClinic</title>
    @vite('resources/ts/main.ts')
</head>
<body>
@if(cache()->has('activation.remainingDays') && cache('activation.remainingDays') <= 7)
    <div class="fixed bg-red-500 text-white font-bold z-[100000] inset-x-0 top-0 px-2">Application will be expired in {{ cache('activation.remainingDays') }} days.</div>
@endif
<div id="app"></div>
</body>
</html>
