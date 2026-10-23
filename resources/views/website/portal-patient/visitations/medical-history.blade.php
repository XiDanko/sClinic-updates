<div class="grid grid-cols-1 gap-4 bg-white p-0 rounded-xl mt-4">

    {{-- Header --}}
    <div>
        <div class="flex items-center justify-between">

            {{-- Icon --}}
            <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 shadow-sm">
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
                    التاريخ الطبي
                </h2>
            </div>



        </div>
    </div>
<div class="grid grid-cols-2 gap-0 rounded-md">

        {{-- Allergies --}}
        <div
            class="flex min-w-0 items-start gap-2.5
                   bg-blue-50 py-2 px-2 mt-1 mb-1
                   transition-all hover:bg-red-50/40"
        >


            <div class="min-w-0 flex-1 mr-2">
                <div class="text-[11px] font-medium text-gray-500">
                    الحساسية
                </div>

                <div class="mt-1 flex flex-wrap gap-1">

                    @forelse($medicalHistory->allergies ?? [] as $allergy)
                        <span
                            class="inline-flex items-center rounded-md
                                   bg-red-100 px-2 py-1
                                   text-[10px] font-medium text-red-800"
                        >
                            {{ $allergy->name }}
                        </span>
                    @empty
                        <span class="text-sm font-semibold text-gray-900">
                            -
                        </span>
                    @endforelse

                </div>
            </div>
        </div>


        {{-- Past Medicals --}}
        <div
            class="flex min-w-0 items-start gap-2.5
                   bg-blue-50 py-2 px-2 mt-1 mb-1
                   transition-all hover:bg-blue-50/40"
        >


            <div class="min-w-0 flex-1 mr-2">
                <div class="text-[11px] font-medium text-gray-500">
                    التاريخ الطبي السابق
                </div>

                <div class="mt-1 flex flex-wrap gap-1">

                    @forelse($medicalHistory->pastMedicals ?? [] as $pastMedical)
                        <span
                            class="inline-flex items-center rounded-md
                                   bg-blue-100 px-2 py-1
                                   text-[10px] font-medium text-blue-800"
                        >
                            {{ $pastMedical->name }}
                        </span>
                    @empty
                        <span class="text-sm font-semibold text-gray-900">
                            -
                        </span>
                    @endforelse

                </div>
            </div>
        </div>


        {{-- Past Surgical --}}
        <div
            class="col-span-2 flex min-w-0 items-start gap-2.5
                   bg-blue-50 py-2 px-2 mt-1 mb-1
                   transition-all hover:bg-purple-50/40"
        >


            <div class="min-w-0 flex-1 mr-2">
                <div class="text-[11px] font-medium text-gray-500">
                    التاريخ الجراحي
                </div>

                <div class="mt-1 flex flex-wrap gap-1">

                    @forelse($medicalHistory->pastSurgical ?? [] as $pastSurgical)
                        <span
                            class="inline-flex items-center rounded-md
                                   bg-purple-100 px-2 py-1
                                   text-[10px] font-medium text-purple-800"
                        >
                            {{ $pastSurgical->name }}
                        </span>
                    @empty
                        <span class="text-sm font-semibold text-gray-900">
                            -
                        </span>
                    @endforelse

                </div>
            </div>
        </div>


        {{-- Notes --}}
        @if($medicalHistory->notes)

            <div
                class=" col-span-2 flex min-w-0 items-start gap-2.5
                       bg-blue-50 py-2 px-2 mt-1 mb-1
                       transition-all hover:bg-amber-50/40"
            >
                <div
                    class="flex h-9 w-9 shrink-0 items-center justify-center
                           rounded-lg bg-amber-100 text-amber-600"
                >
                    <i class="pi pi-file-edit text-sm"></i>
                </div>

                <div class="min-w-0 flex-1 mr-2">
                    <div class="text-[11px] font-medium text-gray-500">
                        ملاحضات
                    </div>

                    <div class="mt-1 text-sm text-gray-900 leading-relaxed">
                        {!! $medicalHistory->notes !!}
                    </div>
                </div>
            </div>

        @else

            {{-- Keep Notes as the fourth item so the 2-column layout stays consistent --}}
            <div
                class="flex min-w-0 items-start gap-2.5
                       bg-amber-50 py-2 px-2 mt-1 mb-1"
            >
                <div
                    class="flex h-9 w-9 shrink-0 items-center justify-center
                           rounded-lg bg-amber-100 text-amber-600"
                >

                </div>

                <div class="min-w-0 flex-1 mr-2">
                    <div class="text-[11px] font-medium text-gray-500">
                        ملاحضات
                    </div>

                    <div class="mt-1 text-sm font-semibold text-gray-900">
                        -
                    </div>
                </div>
            </div>

        @endif

    </div>

</div>
