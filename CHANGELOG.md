## v1.2.1 - 2025-10-11
### Fixes:
* Menu item is now shown if it has at least one child with permission.
* Fixed an issue where adding a procedure in the dental assessment would set the **order_id** to null when adding a new procedure from the Dental Chart.
* Fixed **Last Appointment Date** to be determined based on the appointment **date** instead of **created_at**.

### Features:
* Followup management.
* Case sheet management.
* Added **Discount** and **Extra Charge** options to the procedure when creating or updating an appointment.
* Displayed **Due Balance** in the procedure assessment of previous visitations.


## v1.2.0 - 2025-09-26
### Fixes:
* Registers transaction transfer correctly and closes the transfer dialog when the transfer is completed.
* View the selected old visitation correctly when a previous date is chosen.
* Fixed issue in invoice when adding procedures from Assessment:
    - Adding a procedure from an Appointment, then navigating to Assessment and adding a new procedure, no longer duplicates old and new procedures in the invoice.
* Fixed auto-close invoice behavior from any page: procedures are now added to the correct (last) invoice before closing, instead of the first invoice.
* Fixed Create New Procedure quantity: now allows decimal values (e.g., 0.3, 0.4, 0.8) instead of requiring a minimum of 1.
* Fixed Procedure field `item.price` on Assessment page: it is now disabled after saving.
* Editing the patient name in Appointment or Invoice now updates the existing patient instead of creating a new one.
* Ratio field in Add Clinic now accepts `0` as a valid value.
* Appointment list now displays all records without pagination.
* Set default configuration values for database, database password, and project name.
* Prescription items on Assessment page now correctly merge the old array with the new one.



### Features:
* Orders management from Assessment page and Orders page.
* Ability to create a Visitation or Create Appointment linked to an order.
* View orders in Provider-Assessment.
* Add results directly in Provider-Assessment.
* Added Follow-up Management module

## v1.1.3 - 2025-09-03
### Fixes:
* Fixed sending confirmation message to WhatsApp using token in **Appointment** and **Appointment Requests** pages.
* Fixed AutoComplete procedure selection in **Appointment** and **Invoice** pages.
* Fixed AutoComplete product selection in **Stock** pages.
* Fixed patient permission visibility issue in **Assessment** page.
*  Add transaction to `RunUpdateDB` command to ensure all old database updates are executed atomically.
   - All SQL scripts and updates now run inside a `DB::transaction()`.
   - Prevents partial updates if any step fails.

## v1.1.2 - 2025-09-01
### Fixes:
* change quantity in Stock from integer to float
* remove max file size limit for attachments
* set date from date filter when adding walk-in patient
* set date from date filter when adding walk-in patient
* when searching by **Name**, the **Clinic** filter is now automatically cleared.
* Updated permissions on the **Assessment** page.
* Clear button behavior corrected on **Arabic pages**.
  **DatePicker** in filters: pressing **Enter** now triggers filtering.
* Resolved issue with **VisitationStatus filter** on the **Visitation Report** page.
* Permission check in **Assessment** page, under the **External Services** tab, for the **external-service-requests edit** link.
* Added filter to procedure select in appointment form.
* Added filter to product select in Stock form.

### Features:
* Auto-send confirmation and auto-print invoice after appointment is processed
* Add comments to treatment plan
* Add comments to treatment plan
* View last appointment in treatment plan
* Added **Procedure Income Report** to track total income and quantities grouped by procedure.
* Tools: Added feature to copy procedures with their products from `clinicSource` to `clinicDestination`.
* Added Departments in procedure.

## v1.1.1 - 2025-08-24
### Fixes:
* Appointment request status issue
* Several design issues
* Bug fixes

## v1.1.0 - 2025-08-20
### Fixes:
* External service expense issue fixed
* Fixed register total calculation after transaction cancellation
* Fixed appointment status update after cancellation
* Invoice items delete issue now replaced by cancel
* Dental chart readonly fix
* Suggestion fields issue fixes
* Open the invoice after deleting an invoice item, even if the invoice is closed.

### Features:
* New whatsApp integration service
* Online booking service
* Visitation report
* New birthday filter in patients page
