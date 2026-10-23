<div class="px-0" dir="rtl">

    <div
        class="overflow-hidden rounded-[20px]
               border border-violet-100/80
               bg-white
               shadow-[0_4px_20px_rgba(124,58,237,0.06)]"
    >
        {{-- System Header --}}
        <div
            class="border-b border-violet-50 px-4 py-3"
            dir="ltr"
        >
            <div class="flex items-center justify-between">
                {{-- English System Name --}}
                <div
                    class="text-left text-[18px] font-black tracking-tight text-violet-700"
                >
                    s<span class="text-slate-900">Clinic</span>
                </div>
                {{-- Arabic System Name --}}
                <div
                    class="text-right text-[15px] font-bold text-slate-700"
                    dir="rtl"
                >
                 {{$appName}}
                </div>


            </div>
        </div>
        <div class="flex items-center gap-3 p-3.5">

            {{-- Patient Icon --}}
            <div
                class="flex h-12 w-12 shrink-0 items-center justify-center
                       rounded-[16px]
                       bg-violet-100
                       text-violet-600"
            >
                <i class="pi pi-user text-xl"></i>
            </div>


            {{-- Patient Information --}}
            <div class="min-w-0 flex-1">

                <div class="text-[10px] font-medium text-slate-400">
                    مرحباً
                </div>

                <div
                    class="mt-0.5 truncate
                           text-[16px] font-extrabold
                           text-slate-900 sm:text-lg"
                    title="{{ $patient->name }}"
                >
                    {{ $patient->name }}
                </div>

            </div>


            {{-- Patient Badge --}}
            <div
                class="flex h-9 w-9 shrink-0 items-center justify-center
                       rounded-full
                       bg-violet-50
                       text-violet-500"
            >
                <i class="pi pi-heart text-sm"></i>
            </div>

        </div>

    </div>

</div>
{{-- Bottom Navigation --}}
<div
    class="fixed bottom-[10px] inset-x-0   z-50
           border-t border-slate-200/80
           bg-white/95
           px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3
           shadow-[0_-4px_20px_rgba(15,23,42,0.08)]
           backdrop-blur-md"
    dir="rtl"
>
    <div class="mx-auto flex max-w-lg gap-3">
        {{-- Back --}}
        <button
            type="button"
            onclick="history.back()"
            class="flex h-12 flex-1 items-center justify-center gap-2
                   rounded-[14px]
                   bg-slate-100
                   text-sm font-bold text-slate-600
                   transition
                   hover:bg-slate-200
                   active:scale-[0.98]"
        >
            <i class="pi pi-arrow-right text-base"></i>
            <span>رجوع</span>
        </button>
        {{-- Home --}}
        @if($patient->uuid)
            <a
                href="{{ url('/portal/patients/'.$patient->uuid) }}"
                class="flex h-12 flex-1 items-center justify-center gap-2
                   rounded-[14px]
                   bg-violet-50
                   text-sm font-bold text-violet-600
                   transition
                   hover:bg-violet-100
                   active:scale-[0.98]"
            >
                <i class="pi pi-home text-base"></i>
                <span>الرئيسية</span>
            </a>
        @endif



    </div>
</div>
