<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-3">

    @forelse($healthInformation?->fields ?? [] as $field)

        @php
            $fieldData = $field->field;

            // Convert field to array
            if (is_string($fieldData)) {
                $fieldData = json_decode($fieldData, true);
            } elseif (is_object($fieldData)) {
                $fieldData = json_decode(json_encode($fieldData), true);
            }

            $options = $fieldData['dynamic_field_options'] ?? [];

            // Convert options to array if necessary
            if (is_string($options)) {
                $options = json_decode($options, true) ?? [];
            }

            $selectedValue = null;

            foreach ($options as $option) {
                if (
                    isset($option['id']) &&
                    (string) $option['id'] === (string) $field->option_id
                ) {
                    $selectedValue = $option['value'] ?? null;
                    break;
                }
            }
        @endphp

        <div>
            <span>
                {{ $fieldData['display_name'] ?? '-' }}
            </span>

            :

            <span>
                {{ $selectedValue ?? $field->value ?? '-' }}
            </span>
        </div>

    @empty

        <div class="col-span-full text-center text-gray-500">
            {{ __('No health information found') }}
        </div>

    @endforelse

</div>
