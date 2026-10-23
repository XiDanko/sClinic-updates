{{-- Invoice Items --}}
@if($visitation->invoiceItems)

    <div
        id="invoice_{{ $visitation->id }}"
        class="mt-10 p-0"
    >

        <div class="grid grid-cols-1 gap-4 p-0">

            @forelse($visitation->invoiceItems as $item)

                <div
                    class="rounded-lg border border-gray-200
                           bg-white p-0 shadow-sm my-0"
                >

                    <div class="grid grid-cols-3 gap-0">

                        {{-- Procedure --}}
                        <div
                            class="min-w-0 bg-blue-50 px-3 py-2 mt-1 mb-1
                                   transition-all hover:bg-blue-50/40"
                        >
                            <div class="text-[11px] font-medium text-gray-500">
                                {{ __('Procedure') }}
                            </div>

                            <div
                                class="mt-0.5 break-words text-sm font-semibold
                                       {{ $item->status === 'canceled'
                                           ? 'text-red-500 line-through'
                                           : 'text-gray-900' }}"
                                title="{{ $item->name }}"
                            >
                                {{ $item->name ?? '-' }}
                            </div>
                        </div>


                        {{-- Price --}}
                        <div
                            class="min-w-0 bg-emerald-50 px-3 py-2 mt-1 mb-1
                                   transition-all hover:bg-emerald-50/40"
                        >
                            <div class="text-[11px] font-medium text-gray-500">
                                {{ __('Price') }}
                            </div>

                            <div
                                class="mt-0.5 break-words text-sm font-semibold
                                       text-gray-900"
                            >
                                {{ number_format((float) ($item->price ?? 0)) }}
                            </div>
                        </div>


                        {{-- Notes --}}
                        <div
                            class="min-w-0 bg-amber-50 px-3 py-2 mt-1 mb-1
                                   transition-all hover:bg-amber-50/40"
                        >
                            <div class="text-[11px] font-medium text-gray-500">
                                {{ __('Notes') }}
                            </div>

                            <div
                                class="mt-0.5 break-words whitespace-pre-line
                                       text-sm font-semibold text-gray-900"
                                title="{{ $item->notes }}"
                            >
                                {{ $item->notes ?? '-' }}
                            </div>
                        </div>

                    </div>

                </div>

            @empty

                <div
                    class="rounded-lg border border-gray-200
                           bg-white p-6 text-center text-gray-500"
                >
                    {{ __('No procedures found.') }}
                </div>

            @endforelse

        </div>

    </div>

@endif
