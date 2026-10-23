<div class="grid grid-cols-1 sm:grid-cols-1 gap-4 p-2">
    <div class="w-full overflow-x-auto">
        <table class="w-full border-collapse border border-gray-200 text-left">
            <thead class="bg-gray-100">
            <tr>
                <th class="border border-gray-300 px-4 py-2">
                    {{ __('Procedure') }}
                </th>

                <th class="border border-gray-300 px-4 py-2">
                    {{ __('Provider') }}
                </th>

                <th class="border border-gray-300 px-4 py-2">
                    {{ __('Service') }}
                </th>

                <th class="border border-gray-300 px-4 py-2">
                    {{ __('Center Cost') }}
                </th>

                <th class="border border-gray-300 px-4 py-2">
                    {{ __('Clinic Cost') }}
                </th>

                <th class="border border-gray-300 px-4 py-2">
                    {{ __('Total') }}
                </th>

                <th class="border border-gray-300 px-4 py-2">
                    {{ __('Request Date') }}
                </th>

                <th class="border border-gray-300 px-4 py-2">
                    {{ __('Status') }}
                </th>

                <th class="border border-gray-300 px-4 py-2">
                    {{ __('Delivery Date') }}
                </th>
            </tr>
            </thead>

            <tbody>
            @forelse($externalServiceRequests ?? [] as $request)
                <tr>
                    {{-- Procedure --}}
                    <td class="border border-gray-300 px-4 py-2">
                        {{ $request->invoiceItem?->name }}
                    </td>

                    {{-- Provider --}}
                    <td class="border border-gray-300 px-4 py-2">
                        {{ $request->provider?->name }}
                    </td>

                    {{-- Service --}}
                    <td class="border border-gray-300 px-4 py-2">
                        {{ $request->service?->name }}
                    </td>

                    {{-- Center Cost --}}
                    <td class="border border-gray-300 px-4 py-2">
                        {{ $request->centerCost !== null
                            ? number_format((float) $request->centerCost)
                            : '' }}
                    </td>

                    {{-- Clinic Cost --}}
                    <td class="border border-gray-300 px-4 py-2">
                        {{ $request->clinicCost !== null
                            ? number_format((float) $request->clinicCost)
                            : '' }}
                    </td>

                    {{-- Total --}}
                    <td class="border border-gray-300 px-4 py-2">
                        {{ $request->total !== null
                            ? number_format((float) $request->total)
                            : '' }}
                    </td>

                    {{-- Request Date --}}
                    <td class="border border-gray-300 px-4 py-2">
                        {{ $request->requestDate }}
                    </td>

                    {{-- Status --}}
                    <td class="border border-gray-300 px-4 py-2">
                        {{ __($request->status) }}
                    </td>

                    {{-- Delivery Date --}}
                    <td class="border border-gray-300 px-4 py-2">
                        {{ $request->deliveredAt }}
                    </td>
                </tr>
            @empty
                <tr>
                    <td
                        colspan="9"
                        class="border border-gray-300 px-4 py-6 text-center text-gray-500"
                    >
                        {{ __('No external service requests found') }}
                    </td>
                </tr>
            @endforelse
            </tbody>
        </table>
    </div>
</div>
