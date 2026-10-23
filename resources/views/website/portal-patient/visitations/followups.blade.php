<div class="grid grid-cols-1 gap-4 p-1">
    <div>
        <div class="flex items-center justify-between">

            {{-- Icon --}}
            <div class="flex h-11 w-11 shrink-0 items-center justify-center    shadow-sm">
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
                    المتابعات
                </h2>
            </div>

            {{-- Value --}}
            <div
                class="flex min-h-9 min-w-9 items-center justify-center rounded-full count-value px-3 text-sm font-bold text-blue-700">
               2
            </div>

        </div>
    </div>


</div>
<div class="grid grid-cols-1 gap-4 p-0">

    @forelse($followups ?? [] as $followup)

        <div class="rounded-lg border border-gray-200 bg-white p-1 shadow-sm my-4">


            <div class="grid grid-cols-2 gap-0">

                {{-- Clinic --}}
                <div
                    class="flex min-w-0 items-center gap-2.5  py-1.5
               bg-blue-50 p-0 transition-all mt-1 mb-1
               hover:border-blue-100 hover:bg-blue-50/40 "
                >
                    {{-- Icon --}}
                    <div
                        class="flex h-6 w-6 shrink-0 items-center justify-center
                   rounded-lg bg-blue-100 text-gray-500"
                    >
                        <i class="pi pi-home text-sm"></i>
                    </div>

                    <div class="min-w-0 flex-1 mr-2">
                        <div class="text-[11px] font-medium text-gray-500">
                            العيادة
                        </div>

                        <div
                            class="mt-0.5 truncate text-sm font-semibold text-gray-900"
                            title="{{ $followup->clinic?->name }}"
                        >
                            {{ $followup->clinic?->name ?? '-' }}
                        </div>
                    </div>
                </div>


                {{-- Creator --}}
                <div
                    class="flex min-w-0 items-center gap-2.5  py-1.5
               bg-blue-50 p-0 transition-all mt-1 mb-1
               hover:border-emerald-100 hover:bg-emerald-50/40"
                >
                    {{-- Icon --}}
                    <div
                        class="flex h-9 w-9 shrink-0 items-center justify-center
                   rounded-lg bg-emerald-100 text-emerald-600"
                    >
                        <i class="pi pi-user text-sm"></i>
                    </div>

                    <div class="min-w-0 flex-1">
                        <div class="text-[11px] font-medium text-gray-500">
                            المستخدم
                        </div>

                        <div
                            class="mt-0.5 truncate text-sm font-semibold text-gray-900"
                            title="{{ $followup->creator?->name ?? __('System') }}"
                        >
                            {{ $followup->creator?->name ?? __('System') }}
                        </div>
                    </div>
                </div>

                {{-- Creator --}}
                <div
                    class="flex min-w-0 items-center gap-2.5  py-1.5   border-gray-100
               bg-blue-50 p-0 transition-all mt-1 mb-1
               hover:border-emerald-100 hover:bg-emerald-50/40"
                >
                    {{-- Icon --}}
                    <div
                        class="flex h-9 w-9 shrink-0 items-center justify-center
                   rounded-lg bg-emerald-100 text-emerald-600"
                    >
                        <i class="pi pi-phone text-sm"></i>
                    </div>

                    <div class="min-w-0 flex-1">
                        <div class="text-[11px] font-medium text-gray-500">
                            المتصل
                        </div>

                        <div
                            class="mt-0.5 truncate text-sm font-semibold text-gray-900"
                            title="{{ $followup->creator?->name ?? __('System') }}"
                        >
                            {{ $followup->caller?->name ?? '-' }}
                        </div>
                    </div>
                </div>


                {{-- Creator --}}
                <div
                    class="flex min-w-0 items-center gap-2.5  py-1.5   border-gray-100
               bg-blue-50 p-0 transition-all mt-1 mb-1
               hover:border-emerald-100 hover:bg-emerald-50/40"
                >
                    {{-- Icon --}}
                    <div
                        class="flex h-9 w-9 shrink-0 items-center justify-center
                   rounded-lg bg-emerald-100 text-emerald-600"
                    >
                        <i class="pi pi-phone text-sm"></i>
                    </div>

                    <div class="min-w-0 flex-1">
                        <div class="text-[11px] font-medium text-gray-500">
                            حالة المكالمة
                        </div>

                        <div class="mt-1">
                            @if($followup->callStatus)
                                <span
                                    class="inline-flex items-center rounded-md
                                       bg-blue-100 text-blue-800
                                       px-2 py-1 text-xs font-medium"
                                >
                                {{ __(ucfirst($followup->callStatus)) }}
                            </span>
                            @else
                                <span class="text-sm text-gray-900">-</span>
                            @endif
                        </div>
                    </div>
                </div>



                <div
                    class="flex min-w-0 items-center gap-2.5  py-1.5   border-gray-100
               bg-blue-50 p-0 transition-all mt-1 mb-1
               hover:border-emerald-100 hover:bg-emerald-50/40"
                >
                    {{-- Icon --}}
                    <div
                        class="flex h-9 w-9 shrink-0 items-center justify-center
                   rounded-lg bg-emerald-100 text-emerald-600"
                    >
                        <i class="pi pi-star text-sm"></i>
                    </div>

                    <div class="min-w-0 flex-1">
                        <div class="text-[11px] font-medium text-gray-500">
                            تصنيف
                        </div>

                        <div
                            class="mt-0.5 truncate text-sm font-semibold text-gray-900"
                            title="{{ $followup->rating }}"
                        >
                            {{ $followup->rating }}
                        </div>
                    </div>
                </div>


                <div
                    class="flex min-w-0 items-center gap-2.5  py-1.5   border-gray-100
               bg-blue-50 p-0 transition-all mt-1 mb-1
               hover:border-emerald-100 hover:bg-emerald-50/40"
                >
                    {{-- Icon --}}
                    <div
                        class="flex h-9 w-9 shrink-0 items-center justify-center
                   rounded-lg bg-emerald-100 text-emerald-600"
                    >
                        <i class="pi pi-calendar text-sm"></i>
                    </div>

                    <div class="min-w-0 flex-1">
                        <div class="text-[11px] font-medium text-gray-500">
                            تاريخ
                        </div>

                        <div
                            class="mt-0.5 truncate text-sm font-semibold text-gray-900"
                            title="{{ $followup->date }}"
                        >
                            {{ \Carbon\Carbon::parse($followup->date)->format('d M Y') }}
                        </div>
                    </div>
                </div>


                <div
                    class="col-span-2 flex min-w-0 items-center gap-2.5  py-1.5   border-gray-100
               bg-blue-50 p-0 transition-all mt-1 mb-1
               hover:border-emerald-100 hover:bg-emerald-50/40"
                >
                    {{-- Icon --}}
                    <div
                        class="flex h-9 w-9 shrink-0 items-center justify-center
                   rounded-lg bg-emerald-100 text-emerald-600"
                    >
                        <i class="pi pi-comment text-sm"></i>
                    </div>

                    <div class="min-w-0 flex-1">
                        <div class="text-[11px] font-medium text-gray-500">
                            تعليقات
                        </div>

                        <div
                            class="mt-0.5 truncate text-sm font-semibold text-gray-900"
                            title="{{ $followup->comments }}"
                        >
                            {{ $followup->comments }}
                        </div>
                    </div>
                </div>


            </div>
        </div>

</div>

@empty

    <div class="rounded-lg border border-gray-200 p-6 text-center text-gray-500">
        {{ __('No followups found') }}
    </div>

    @endforelse

    </div>

    <style>
        .count-value {
            background: #edf2fa;
            height: 26px;
            width: 26px;
        }
    </style>
