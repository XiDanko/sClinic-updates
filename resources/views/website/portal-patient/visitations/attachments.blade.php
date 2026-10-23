<div class="grid grid-cols-1 gap-4 p-2" dir="rtl">

    {{-- Image Attachments --}}
    @php
        $imageAttachments = collect($attachments ?? [])
            ->filter(function ($attachment) {
                return !empty($attachment->path)
                    && ($attachment->type ?? '') !== 'file';
            });
    @endphp

    @if($imageAttachments->isNotEmpty())

        <div
            class="overflow-hidden rounded-[18px]
                   border border-violet-100 bg-white
                   shadow-[0_4px_16px_rgba(124,58,237,0.06)]"
        >

            {{-- Section Header --}}
            <div
                class="flex items-center gap-3
                       border-b border-violet-50
                       bg-violet-50/50 px-4 py-3"
            >
                <div
                    class="flex h-10 w-10 items-center justify-center
                           rounded-[12px] bg-violet-100 text-violet-600"
                >
                    <i class="pi pi-images text-lg"></i>
                </div>

                <div>
                    <div class="text-sm font-extrabold text-slate-800">
                        الصور المرفقة
                    </div>

                    <div class="mt-0.5 text-xs text-slate-400">
                        عدد الصور: {{ $imageAttachments->count() }}
                    </div>
                </div>
            </div>

            {{-- Images --}}
            <div class="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 lg:grid-cols-4">

                @foreach($imageAttachments as $attachment)

                    <a
                        href="{{ asset('storage/' . $attachment->path) }}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="block overflow-hidden rounded-[14px]
                               border border-slate-100 bg-slate-50"
                    >
                        <img
                            src="{{ asset('storage/' . $attachment->path) }}"
                            alt="{{ __('Attachment') }}"
                            loading="lazy"
                            class="block h-36 w-full object-cover"
                        >
                    </a>

                @endforeach

            </div>

        </div>

    @endif


    {{-- File Attachments --}}
    @php
        $fileAttachments = collect($attachments ?? [])
            ->where('type', 'file')
            ->filter(function ($attachment) {
                return !empty($attachment->path);
            });
    @endphp

    @if($fileAttachments->isNotEmpty())

        <div
            class="overflow-hidden rounded-[18px]
                   border border-violet-100 bg-white
                   shadow-[0_4px_16px_rgba(124,58,237,0.06)]"
        >

            {{-- Section Header --}}
            <div
                class="flex items-center gap-3
                       border-b border-violet-50
                       bg-violet-50/50 px-4 py-3"
            >
                <div
                    class="flex h-10 w-10 items-center justify-center
                           rounded-[12px] bg-violet-100 text-violet-600"
                >
                    <i class="pi pi-folder-open text-lg"></i>
                </div>

                <div>
                    <div class="text-sm font-extrabold text-slate-800">
                        الملفات المرفقة
                    </div>

                    <div class="mt-0.5 text-xs text-slate-400">
                        عدد الملفات: {{ $fileAttachments->count() }}
                    </div>
                </div>
            </div>

            {{-- Files --}}
            <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2">

                @foreach($fileAttachments as $attachment)

                    <a
                        href="{{ asset('storage/' . $attachment->path) }}"
                        download
                        class="flex min-w-0 items-center gap-3
                               rounded-[14px] border border-slate-100
                               bg-white p-3 transition
                               hover:border-violet-200 hover:bg-violet-50/50"
                    >

                        {{-- File Icon --}}
                        <div
                            class="flex h-12 w-12 shrink-0 items-center
                                   justify-center rounded-[12px] bg-red-50"
                        >
                            <i class="pi pi-file-pdf text-2xl text-red-500"></i>
                        </div>

                        {{-- File Name --}}
                        <div class="min-w-0 flex-1">

                            <div
                                class="break-words text-sm font-bold text-slate-700"
                                dir="auto"
                            >
                                {{ basename($attachment->path) }}
                            </div>

                            <div class="mt-1 text-xs text-slate-400">
                                ملف مرفق
                            </div>

                        </div>

                        {{-- Download Icon --}}
                        <i class="pi pi-download shrink-0 text-sm text-violet-500"></i>

                    </a>

                @endforeach

            </div>

        </div>

    @endif


    {{-- Empty State --}}
    @if(collect($attachments ?? [])->isEmpty())

        <div
            class="rounded-[18px] border border-violet-100
                   bg-white px-4 py-10 text-center
                   shadow-[0_4px_16px_rgba(124,58,237,0.05)]"
        >
            <div
                class="mx-auto mb-3 flex h-14 w-14 items-center
                       justify-center rounded-full
                       bg-violet-50 text-violet-400"
            >
                <i class="pi pi-paperclip text-2xl"></i>
            </div>

            <div class="text-sm font-bold text-slate-700">
                لا توجد مرفقات
            </div>

            <div class="mt-1 text-xs text-slate-400">
                لا توجد صور أو ملفات مرفقة
            </div>
        </div>

    @endif

</div>
