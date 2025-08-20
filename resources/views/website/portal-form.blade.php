@extends('layouts.app')

@section('title', 'Home Page')

@section('content')

    <div class="bg-gray-100 min-h-screen py-10">
        <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-1 gap-10 items-start">

            <!-- Form -->
            <div class="bg-white shadow rounded-lg p-6">
                @if(session('success'))
                    <div class="mb-4 rounded-lg bg-green-100 border border-green-300 text-green-800 px-4 py-3 text-sm">
                      تم الحجز بنجاح
                    </div>
                @endif


                @include('website.form')
            </div>
        </div>
    </div>




    <div class="max-w-4xl mx-auto mt-10">
        @if($portalPage->footer_text)
            {!! $portalPage->footer_text !!}
        @endif
    </div>

@endsection


<script>
    document.addEventListener("DOMContentLoaded", function () {
        const clinicSelect = document.getElementById("clinic_id");
        const reservationDatesDiv = document.getElementById("reservationDates");

        clinicSelect.addEventListener("change", function () {
            reservationDatesDiv.innerHTML = ""; // Clear old dates
            const clinicId = parseInt(this.value);

            if (!clinicId) {
                reservationDatesDiv.innerHTML = `<p class="text-gray-500 col-span-full">اختر العيادة لعرض المواعيد</p>`;
                return;
            }

            const clinic = clinicsData.find(c => c.id === clinicId);
            if (!clinic || clinic.number_day <= 0) {
                reservationDatesDiv.innerHTML = `<p class="text-red-500 col-span-full">لا توجد مواعيد متاحة</p>`;
                return;
            }

            const workingDays = clinic.working_days; // ["Sat", "Sun", "Mon", ...]
            const numberOfDays = clinic.number_day;

            let addedCount = 0;
            let dayOffset = 0;

            while (addedCount < numberOfDays && dayOffset < 60) { // safety limit
                const date = new Date();
                date.setDate(date.getDate() + dayOffset);

                const dayName = date.toLocaleDateString("en-US", { weekday: "short" }); // e.g. "Sat"

                if (workingDays.includes(dayName)) {
                    const value = date.toISOString().split("T")[0]; // YYYY-MM-DD
                    const dayNameAr = date.toLocaleDateString("ar-EG", { weekday: "long" });
                    const dayMonth = date.toLocaleDateString("en-US", { month: "2-digit", day: "2-digit" });

                    reservationDatesDiv.innerHTML += `
                    <label class="cursor-pointer">
                        <input type="radio" name="appointment_date" value="${value}" class="hidden peer" required>
                        <div class="px-3 py-2 border border-gray-300 rounded-lg flex items-center justify-center gap-2
                            peer-checked:bg-blue-600 peer-checked:text-white
                            hover:bg-blue-100 dark:hover:bg-gray-700 transition">
                            <span class="text-sm font-bold">${dayNameAr}</span>
                            <span class="text-xs text-left">${dayMonth}</span>
                        </div>
                    </label>
                `;
                    addedCount++;
                }

                dayOffset++;
            }

            if (addedCount === 0) {
                reservationDatesDiv.innerHTML = `<p class="text-red-500 col-span-full">لا توجد مواعيد متاحة</p>`;
            }
        });
    });
</script>
