<form id="patientForm" action="{{ route('portal_patients.store') }}" method="POST" class="space-y-6">
    @csrf
    @if ($errors->any())
        <div class="mb-4 p-3 bg-red-100 text-red-700 rounded">
            <ul class="list-disc ps-5">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <div id="formErrors" class="text-red-500 text-sm mb-3"></div>
    <div id="formSuccess" class="text-green-600 text-sm mb-3 mt-0 bg-[#9cf2d1]"></div>

    <!-- Clinic Select -->
    @php
        // Prepare clinics data for JS
        $clinicsData = $clinics->map(function ($clinic) {
            return [
                'id' => $clinic->id,
                'working_days' => $clinic->working_days,
                'number_day' => optional($clinic->onlineBookingSetting)->number_day ?? 0
            ];
        });
    @endphp

        <!-- Clinic Select -->
    <div>
        <label for="clinic_id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            اختر العيادة
        </label>
        <select id="clinic_id" name="clinic_id" required
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
            <option value="">-- اختر العيادة --</option>
            @foreach($clinics as $clinic)
                <option value="{{ $clinic->id }}">{{ $clinic->name }}</option>
            @endforeach
        </select>
    </div>

    <!-- Reservation Dates -->
    <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">تاريخ الحجز</label>
        <div id="reservationDates" class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
            <p class="text-gray-500 col-span-full">اختر العيادة لعرض المواعيد</p>
        </div>
    </div>

    <!-- Pass Clinics Data to JS -->
    <script>
        const clinicsData = @json($clinicsData);
    </script>


    <!-- الاسم -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                الاسم
            </label>
            <input type="text" id="first_name" name="first_name" value="{{ old('first_name') }}" required
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
            @error('first_name')
            <span class="text-red-500 text-sm">{{ $message }}</span>
            @enderror
        </div>
        <div>
            <label for="father_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                اسم الاب
            </label>
            <input type="text" id="father_name" name="father_name" value="{{ old('father_name') }}" required
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
            @error('father_name')
            <span class="text-red-500 text-sm">{{ $message }}</span>
            @enderror
        </div>
        <div>
            <label for="grandfather_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                اسم الجد
            </label>
            <input type="text" id="grandfather_name" name="grandfather_name" value="{{ old('grandfather_name') }}" required
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
            @error('grandfather_name')
            <span class="text-red-500 text-sm">{{ $message }}</span>
            @enderror
        </div>
    </div>

    <!-- Age -->
    <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">العمر</label>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <!-- Day -->
            <select name="day" id="day" required
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                <option value="">اليوم</option>
                @for ($d = 1; $d <= 31; $d++)
                    <option value="{{ $d }}" {{ old('day') == $d ? 'selected' : '' }}>{{ $d }}</option>
                @endfor
            </select>

            <!-- Month -->
            <select name="month" id="month" required
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                <option value="">الشهر</option>
                @for ($m = 1; $m <= 12; $m++)
                    <option value="{{ $m }}" {{ old('month') == $m ? 'selected' : '' }}>{{ $m }}</option>
                @endfor
            </select>

            <!-- Year -->
            <select name="year" id="year" required
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                <option value="">السنة</option>
                @for ($y = date('Y'); $y >= 1900; $y--)
                    <option value="{{ $y }}" {{ old('year') == $y ? 'selected' : '' }}>{{ $y }}</option>
                @endfor
            </select>
        </div>
    </div>

    <!-- الجنس + هل لديك زيارات سابقة؟ -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
            <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                الجنس
            </label>
            <select id="gender" name="gender" required
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                <option value="">اختر الجنس</option>
                <option value="male" {{ old('gender') == 'male' ? 'selected' : '' }}>ذكر</option>
                <option value="female" {{ old('gender') == 'female' ? 'selected' : '' }}>أنثى</option>
            </select>
        </div>
        <div>
            <label for="previous_visitation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                هل لديك زيارات سابقة؟
            </label>
            <select id="previous_visitation" name="previous_visitation"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                <option value="">اختر...</option>
                <option value="1">نعم</option>
                <option value="0">لا</option>
            </select>
        </div>
    </div>

    <!-- رقم الهاتف -->
    <div>
        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رقم الهاتف</label>
        <input type="text" id="phone" name="phone" value="{{ old('phone') }}" required
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
    </div>



    <!-- Submit -->
    <div>
        <button type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
            focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            حفظ
        </button>
    </div>
</form>
