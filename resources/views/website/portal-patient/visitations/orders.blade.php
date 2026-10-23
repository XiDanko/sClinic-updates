<div class="mt-4 grid grid-cols-1 gap-4">

    @forelse($visitation->orders ?? [] as $order)

        {{-- ===================== ORDER ===================== --}}
        <details
            class="group overflow-hidden rounded-[20px]
                   border border-violet-100/80
                   bg-white
                   shadow-[0_4px_20px_rgba(124,58,237,0.06)]"
        >

            {{-- ===================== ORDER HEADER ===================== --}}
            <summary
                class="flex cursor-pointer list-none items-center gap-3
                       p-3.5 transition-all duration-200
                       hover:bg-violet-50/40
                       [&::-webkit-details-marker]:hidden"
            >

                {{-- Clinic Icon --}}
                <div
                    class="flex h-12 w-12 shrink-0 items-center justify-center
                           rounded-[16px]
                           bg-violet-100
                           text-violet-600"
                >
                    <i class="pi pi-building text-xl"></i>
                </div>


                {{-- Clinic Information --}}
                <div class="min-w-0 flex-1">

                    <div class="text-[10px] font-medium text-slate-400">
                        العيادة
                    </div>

                    <h3
                        class="mt-0.5 truncate text-[15px]
                               font-extrabold text-slate-900 sm:text-base"
                    >
                        {{ $order->clinic?->name ?? '-' }}
                    </h3>


                    <div class="mt-1 text-[10px] font-medium text-slate-400">
                        <div class="grid grid-cols-2 gap-4">
                            @foreach($order->attachmentResult ?? $order->attachment_result ?? [] as $attachment)
                                @php
                                    $path = is_array($attachment) ? $attachment['path'] : $attachment->path;
                                    $extension = strtolower(pathinfo($path, PATHINFO_EXTENSION));
                                    $isImage = in_array($extension, ['jpg', 'jpeg', 'png', 'webp', 'gif']);
                                    $fileUrl = asset('storage/' . $path);
                                @endphp

                                <div>
                                    @if($isImage)
                                        {{-- View Image in browser --}}
                                        <a
                                            href="{{ $fileUrl }}"
                                            target="_blank"
                                            onclick="event.stopPropagation();"
                                            class="flex items-center justify-center gap-1.5 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-600 transition-colors duration-200 hover:bg-violet-100 hover:text-violet-700"
                                            title="عرض الصورة"
                                        >
                                            <i class="pi pi-image text-xs"></i>
                                            <span>عرض النتيجة</span>
                                        </a>
                                    @else
                                        {{-- Download PDF / Document --}}
                                        <a
                                            href="{{ $fileUrl }}"
                                            download
                                            target="_blank"
                                            onclick="event.stopPropagation();"
                                            class="flex items-center justify-center gap-1.5 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-600 transition-colors duration-200 hover:bg-violet-100 hover:text-violet-700"
                                            title="تحميل الملف"
                                        >
                                            <i class="pi pi-download text-xs"></i>
                                            <span>نزل النتيجة</span>
                                        </a>
                                    @endif
                                </div>
                            @endforeach
                        </div>

                    </div>

                </div>


                {{-- Open / Close Icon --}}
                <div class="mt-1 text-[10px] font-medium text-slate-400">
                    {{ count($order->orderItems ?? []) }} إجراءات
                </div>
                <div
                    class="flex h-9 w-9 shrink-0 items-center justify-center
                           rounded-full
                           bg-violet-50
                           text-violet-500
                           transition-transform duration-200
                           group-open:rotate-180
                           group-open:bg-violet-100
                           group-open:text-violet-600"
                >
                    <i class="pi pi-angle-down text-xs"></i>
                </div>

            </summary>


            {{-- ===================== ORDER CONTENT ===================== --}}
            <div
                class="border-t border-violet-100
                       bg-[#fcfbff] p-3.5"
            >

                {{-- ===================== ORDER NOTES ===================== --}}
                @if($order->notes)

                    <div
                        class="mb-3 rounded-[15px]
                               border border-violet-50
                               bg-white
                               px-3 py-2.5"
                    >

                        <div class="flex items-center gap-1.5">

                            <div
                                class="flex h-6 w-6 items-center justify-center
                                       rounded-full
                                       bg-violet-100
                                       text-violet-600"
                            >
                                <i class="pi pi-info-circle text-[10px]"></i>
                            </div>

                            <span class="text-[10px] font-medium text-slate-400">
                                الملاحظات
                            </span>

                        </div>

                        <div
                            class="mt-1.5 whitespace-pre-line break-words
                                   text-xs font-semibold leading-6 text-slate-700"
                        >
                            {{ $order->notes }}
                        </div>

                    </div>

                @endif


                {{-- ===================== ORDER ITEMS ===================== --}}
                <div class="grid grid-cols-1 gap-3">

                    @forelse($order->orderItems ?? [] as $orderItem)

                        <div
                            class="rounded-[17px]
                                   border border-violet-100
                                   bg-white
                                   p-3
                                   shadow-[0_3px_15px_rgba(124,58,237,0.04)]"
                        >

                            {{-- Procedure Header --}}
                            <div class="flex items-center gap-2.5">

                                <div
                                    class="flex h-10 w-10 shrink-0
                                           items-center justify-center
                                           rounded-[13px]
                                           bg-violet-100
                                           text-violet-600"
                                >
                                    <i class="pi pi-file-edit text-base"></i>
                                </div>


                                <div class="min-w-0 flex-1">

                                    <div class="text-[10px] font-medium text-slate-400">
                                        الإجراء
                                    </div>

                                    <div
                                        class="mt-0.5 break-words text-sm
                                               font-extrabold text-slate-900"
                                    >
                                        {{ $orderItem->procedure?->name ?? '-' }}
                                    </div>

                                </div>

                            </div>


                            {{-- Order Item Details --}}
                            <div class="mt-3 grid grid-cols-2 gap-2">

                                {{-- Status --}}
                                <div
                                    class="rounded-[14px]
                                           bg-[#faf8ff]
                                           px-3 py-2.5"
                                >

                                    <div class="flex items-center gap-1.5">

                                        <i
                                            class="pi pi-check-circle
                                                   text-[11px] text-violet-500"
                                        ></i>

                                        <span class="text-[10px] text-slate-400">
                                            الحالة
                                        </span>

                                    </div>

                                    <div class="mt-1">

                                        @if($orderItem->status)

                                            <span
                                                class="inline-flex items-center
                                                       rounded-lg
                                                       bg-violet-100
                                                       px-2.5 py-1
                                                       text-[10px]
                                                       font-bold
                                                       text-violet-700"
                                            >
                                                {{ __($orderItem->status) }}
                                            </span>

                                        @else

                                            <span class="text-xs font-bold text-slate-700">
                                                -
                                            </span>

                                        @endif

                                    </div>

                                </div>


                                {{-- Files --}}
                                @if(count($orderItem['attachmentResult'])>0)
                                <div
                                    class="rounded-[14px]
                                           bg-[#faf8ff]
                                           px-3 py-2.5"
                                >

                                    <div class="flex items-center gap-1.5">

                                        <i
                                            class="pi pi-paperclip
                                                   text-[11px] text-violet-500"
                                        ></i>

                                        <span class="text-[10px] text-slate-400">
                                            الملفات
                                        </span>

                                    </div>

                                    <div class="mt-2 space-y-2">
                                        @php
                                            // 1. Get attachments safely (supports object relation or array property)
                                            $attachments = is_array($orderItem)
                                                ? ($orderItem['attachment_result'] ?? $orderItem['attachmentResult'] ?? [])
                                                : ($orderItem->attachmentResult ?? $orderItem->attachment_result ?? []);

                                            // 2. Normalize single object/array into an iterable array
                                            if (!is_array($attachments) && !($attachments instanceof \Illuminate\Support\Collection)) {
                                                $attachments = $attachments ? [$attachments] : [];
                                            }
                                        @endphp

                                        @forelse($attachments as $attachment)
                                            @php
                                                // Extract file path
                                                $path = is_array($attachment) ? ($attachment['path'] ?? '') : ($attachment->path ?? '');

                                                // Check extension
                                                $extension = strtolower(pathinfo($path, PATHINFO_EXTENSION));
                                                $isImage = in_array($extension, ['jpg', 'jpeg', 'png', 'webp', 'gif']);
                                                $fileUrl = asset('storage/' . $path);
                                            @endphp

                                            @if($path)
                                                @if($isImage)
                                                    {{-- Render Image Directly --}}
                                                    <div class="max-w-20 overflow-hidden rounded-xl border border-violet-100 bg-white p-1 float-start">
                                                        <a href="{{ $fileUrl }}" target="_blank" class="block max-w-20 float-start ">
                                                            <img
                                                                src="{{ $fileUrl }}"
                                                                alt="النتيجة"
                                                                class="max-h-28 max-w-20 w-full rounded-lg object-cover transition-transform duration-200 hover:scale-[1.02]"
                                                            />
                                                        </a>
                                                    </div>
                                                @else
                                                    {{-- Download PDF / Document --}}
                                                    <a
                                                        href="{{ $fileUrl }}"
                                                        download
                                                        target="_blank"
                                                        onclick="event.stopPropagation();"
                                                        class="mb-3 inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-700 transition-colors duration-200 hover:bg-violet-100"
                                                        title="تحميل النتيجة"
                                                    >
                                                        <i class="pi pi-download text-xs"></i>
                                                        <span>نزل النتيجة كملف pdf</span>
                                                    </a>
                                                @endif
                                            @endif
                                        @empty
                                            <span class="text-xs font-bold text-slate-400">-</span>
                                        @endforelse
                                    </div>

                                </div>
                                @endif

                                {{-- Result --}}
                                @php
                                    $orderItemResult = is_array($orderItem)
                                        ? ($orderItem['order_item_result'] ?? $orderItem['orderItemResult'] ?? null)
                                        : ($orderItem->orderItemResult ?? $orderItem->order_item_result ?? null);

                                    // Normalize string value if nested in array/object
                                    $resultValue = is_array($orderItemResult)
                                        ? ($orderItemResult['value'] ?? '')
                                        : ($orderItemResult->value ?? '');
                                @endphp
                                @if($resultValue)
                                    <div
                                        class="rounded-[14px]
                                           bg-[#faf8ff]
                                           px-3 py-2.5"
                                    >

                                        <div class="flex items-center gap-1.5">

                                            <i
                                                class="pi pi-chart-line
                                                   text-[11px] text-violet-500"
                                            ></i>

                                            <span class="text-[10px] text-slate-400">
                                            النتيجة
                                        </span>

                                        </div>

                                        <div class="mt-1 break-words text-xs font-bold text-slate-700">


                                            {!! $resultValue !!}
                                        </div>

                                    </div>
                                @endif



                                {{-- Notes --}}
                                @if($orderItem->notes)
                                    <div
                                        class="rounded-[14px]
                                           bg-[#faf8ff]
                                           px-3 py-2.5"
                                    >

                                        <div class="flex items-center gap-1.5">

                                            <i
                                                class="pi pi-info-circle
                                                   text-[11px] text-violet-500"
                                            ></i>

                                            <span class="text-[10px] text-slate-400">
                                            الملاحظات
                                        </span>

                                        </div>

                                        <div
                                            class="mt-1 whitespace-pre-line
                                               break-words text-xs
                                               font-bold leading-5 text-slate-700"
                                        >
                                            {{ $orderItem->notes ?? '-' }}
                                        </div>

                                    </div>
                                @endif


                            </div>

                        </div>

                    @empty

                        <div
                            class="rounded-[16px]
                                   bg-white p-5 text-center
                                   text-xs font-semibold text-slate-400"
                        >
                            لا توجد إجراءات
                        </div>

                    @endforelse

                </div>

            </div>

        </details>

    @empty

        {{-- ===================== NO ORDERS ===================== --}}
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
                <i class="pi pi-folder text-xl"></i>
            </div>

            <div class="mt-3 text-sm font-bold text-slate-500">
                {{ __('No orders found') }}
            </div>

        </div>

    @endforelse

</div>
