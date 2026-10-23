{{-- Invoices List --}}
<div class="grid grid-cols-1 gap-4 p-2" dir="rtl">

    @forelse($invoices ?? [] as $invoice)

        <div
            class="overflow-hidden rounded-[18px]
                   border border-violet-100
                   bg-white
                   shadow-[0_4px_16px_rgba(124,58,237,0.06)]"
        >

            {{-- Invoice Header --}}
            <div
                class="flex items-center justify-between gap-3
                       border-b border-violet-50
                       bg-violet-50/50 px-4 py-3"
            >
                <div class="flex min-w-0 items-center gap-2">

                    <div
                        class="flex h-10 w-10 shrink-0 items-center justify-center
                               rounded-[12px]
                               bg-violet-100 text-violet-600"
                    >
                        <i class="pi pi-file text-lg"></i>
                    </div>

                    <div class="min-w-0">
                        <div class="text-xs font-medium text-slate-400">
                            فاتورة
                        </div>

                        <div class="text-sm font-extrabold text-slate-800">
                            #{{ $invoice->id }}
                        </div>
                    </div>

                </div>

                {{-- Status --}}
                <div class="shrink-0">
                    @if($invoice->state === 'open')

                        <span
                            class="inline-flex items-center gap-1 rounded-full
                                   bg-green-50 px-3 py-1.5
                                   text-xs font-bold text-green-700"
                        >
                            <i class="pi pi-circle-fill text-[7px]"></i>
                            مفتوحة
                        </span>

                    @elseif($invoice->state === 'close')

                        <span
                            class="inline-flex items-center gap-1 rounded-full
                                   bg-red-50 px-3 py-1.5
                                   text-xs font-bold text-red-700"
                        >
                            <i class="pi pi-circle-fill text-[7px]"></i>
                            مغلقة
                        </span>

                    @else

                        <span
                            class="inline-flex items-center rounded-full
                                   bg-slate-100 px-3 py-1.5
                                   text-xs font-bold text-slate-600"
                        >
                            {{ __($invoice->state) }}
                        </span>

                    @endif
                </div>

            </div>


            {{-- Invoice Information --}}
            <div class="divide-y divide-slate-100">

                {{-- Patient --}}
                <div class="flex items-start gap-3 px-4 py-3">

                    <i class="pi pi-user mt-1 text-sm text-violet-500"></i>

                    <div class="min-w-0 flex-1">
                        <div class="text-xs font-medium text-slate-400">
                            اسم المريض
                        </div>

                        <div class="mt-1 break-words text-sm font-bold text-slate-800">
                            {{ $invoice->patient?->name ?? '-' }}
                        </div>
                    </div>

                </div>


                {{-- Clinic --}}
                <div class="flex items-start gap-3 px-4 py-3">

                    <i class="pi pi-building mt-1 text-sm text-violet-500"></i>

                    <div class="min-w-0 flex-1">
                        <div class="text-xs font-medium text-slate-400">
                            العيادة
                        </div>

                        <div class="mt-1 break-words text-sm font-semibold text-slate-800">
                            {{ $invoice->clinic?->name ?? '-' }}
                        </div>
                    </div>

                </div>


                {{-- Total --}}
                <div class="flex items-center justify-between gap-3 px-4 py-3">

                    <div class="text-sm font-medium text-slate-500">
                        المجموع
                    </div>

                    <div class="text-sm font-bold text-slate-800">
                        {{ number_format((float) ($invoice->total ?? 0)) }}
                    </div>

                </div>


                {{-- Total Payments --}}
                <div class="flex items-center justify-between gap-3 px-4 py-3">

                    <div class="text-sm font-medium text-slate-500">
                        إجمالي المدفوعات
                    </div>

                    <div class="text-sm font-bold text-green-600">
                        {{ number_format((float) ($invoice->total_payments ?? 0)) }}
                    </div>

                </div>


                {{-- Due Balance --}}
                <div
                    class="flex items-center justify-between gap-3
                           bg-violet-50/50 px-4 py-3"
                >

                    <div class="text-sm font-bold text-violet-700">
                        الرصيد المستحق
                    </div>

                    <div class="text-base font-black text-violet-700">
                        {{ number_format((float) ($invoice->due_balance ?? 0)) }}
                    </div>

                </div>


                {{-- Date --}}
                <div class="flex items-center gap-3 px-4 py-3">

                    <i class="pi pi-calendar text-sm text-slate-400"></i>

                    <div class="min-w-0 flex-1">
                        <div class="text-xs font-medium text-slate-400">
                            تاريخ الفاتورة
                        </div>

                        <div class="mt-1 break-words text-sm text-slate-700">
                            {{ $invoice->created_at?->format('Y-m-d H:i') ?? '-' }}
                        </div>
                    </div>

                </div>

            </div>

        </div>

    @empty

        {{-- Empty State --}}
        <div
            class="rounded-[18px] border border-violet-100
                   bg-white px-4 py-10 text-center
                   shadow-[0_4px_16px_rgba(124,58,237,0.05)]"
        >
            <div
                class="mx-auto mb-3 flex h-14 w-14 items-center justify-center
                       rounded-full bg-violet-50 text-violet-400"
            >
                <i class="pi pi-file text-2xl"></i>
            </div>

            <div class="text-sm font-bold text-slate-700">
                لا توجد فواتير
            </div>

            <div class="mt-1 text-xs text-slate-400">
                لم يتم العثور على فواتير لعرضها
            </div>
        </div>

    @endforelse

</div>
