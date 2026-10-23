<div class="mt-4 grid grid-cols-1 gap-4">

    @forelse($prescriptionItems ?? [] as $item)

        <div
            class="group relative overflow-hidden rounded-[20px]
                   border border-violet-100/80
                   bg-white p-3.5
                   shadow-[0_4px_20px_rgba(124,58,237,0.06)]
                   transition-all duration-200
                   hover:-translate-y-0.5
                   hover:shadow-[0_10px_30px_rgba(124,58,237,0.10)]"
        >

            {{-- ===================== Drug Header ===================== --}}
            <div class="flex items-center gap-3">

                {{-- Drug Icon --}}
                <div
                    class="flex h-12 w-12 shrink-0 items-center justify-center
                           rounded-[16px]
                           bg-violet-100 text-violet-600"
                >
                    <i class="pi pi-box text-xl"></i>
                </div>


                {{-- Drug Information --}}
                <div class="min-w-0 flex-1">

                    <div class="text-[10px] font-medium text-slate-400">
                        الدواء
                    </div>

                    <div
                        class="mt-0.5 truncate text-[15px] font-extrabold
                               text-slate-900 sm:text-base"
                        title="{{ $item->drug?->name }}"
                    >
                        {{ $item->drug?->name ?? '-' }}
                    </div>

                </div>


                {{-- Arrow --}}
                <div
                    class="flex h-9 w-9 shrink-0 items-center justify-center
                           rounded-full
                           bg-violet-50 text-violet-400
                           transition-all duration-200
                           group-hover:bg-violet-100
                           group-hover:text-violet-600"
                >
                    <i class="pi pi-angle-left text-xs"></i>
                </div>

            </div>


            {{-- ===================== Prescription Details ===================== --}}
            <div class="mt-3 grid grid-cols-2 gap-2">

                {{-- Usage --}}
                @if(  isset($item->usage->name))


                <div
                    class="rounded-[15px]
                           border border-violet-50
                           bg-[#faf8ff]
                           px-3 py-2.5
                           transition-all duration-200
                           hover:bg-violet-50"
                >

                    <div class="flex items-center gap-1.5">

                        <div
                            class="flex h-6 w-6 items-center justify-center
                                   rounded-full bg-violet-100
                                   text-violet-600"
                        >
                            <i class="pi pi-clock text-[10px]"></i>
                        </div>

                        <span class="text-[10px] font-medium text-slate-400">
                            الاستخدام
                        </span>

                    </div>

                    <div
                        class="mt-1.5 break-words text-xs font-bold text-slate-800"
                        title="{{ $item->usage?->name }}"
                    >
                        {{ $item->usage?->name ?? '-' }}
                    </div>

                </div>
                @endif

                {{-- Duration --}}
                @if(  isset($item->duration->name))
                    <div
                        class="rounded-[15px]
                           border border-violet-50
                           bg-[#faf8ff]
                           px-3 py-2.5
                           transition-all duration-200
                           hover:bg-violet-50"
                    >

                        <div class="flex items-center gap-1.5">

                            <div
                                class="flex h-6 w-6 items-center justify-center
                                   rounded-full bg-violet-100
                                   text-violet-600"
                            >
                                <i class="pi pi-calendar text-[10px]"></i>
                            </div>

                            <span class="text-[10px] font-medium text-slate-400">
                            المدة
                        </span>

                        </div>

                        <div
                            class="mt-1.5 break-words text-xs font-bold text-slate-800"
                            title="{{ $item->duration?->name }}"
                        >
                            {{ $item->duration?->name ?? '-' }}
                        </div>

                    </div>
                @endif



                {{-- Notes --}}
                @if(  isset($item->note->name))
                    <div
                        class="col-span-2
                           rounded-[15px]
                           border border-violet-50
                           bg-[#faf8ff]
                           px-3 py-2.5
                           transition-all duration-200
                           hover:bg-violet-50"
                    >

                        <div class="flex items-center gap-1.5">

                            <div
                                class="flex h-6 w-6 items-center justify-center
                                   rounded-full bg-violet-100
                                   text-violet-600"
                            >
                                <i class="pi pi-info-circle text-[10px]"></i>
                            </div>

                            <span class="text-[10px] font-medium text-slate-400">
                            الملاحظات
                        </span>

                        </div>

                        <div
                            class="mt-1.5 break-words text-xs font-bold text-slate-800"
                            title="{{ $item->note?->name }}"
                        >
                            {{ $item->note?->name ?? '-' }}
                        </div>



                    </div>
                @endif


            </div>

        </div>

    @empty

        {{-- ===================== Empty State ===================== --}}
        <div
            class="rounded-[20px]
                   border border-violet-100
                   bg-white p-7 text-center
                   shadow-[0_4px_20px_rgba(124,58,237,0.05)]"
        >

            <div
                class="mx-auto flex h-14 w-14 items-center justify-center
                       rounded-[18px]
                       bg-violet-100
                       text-violet-500"
            >
                <i class="pi pi-file text-xl"></i>
            </div>

            <div class="mt-3 text-sm font-bold text-slate-500">
                {{ __('No prescription items found') }}
            </div>

        </div>

    @endforelse

</div>
