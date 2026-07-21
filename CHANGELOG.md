## v1.2.12 - 2026-07-17
### Fixes
* Fixed QR code printing for orders sent to the LIS.
* Fixed an attachment loop that caused every order to send duplicate requests.
* Reduced unnecessary requests by canceling redundant requests.

### Features

* Added activity log management.

## v1.2.11 - 2026-6-29
### Fixes:
* Hide the error alert when a 502 error is returned.
* Fixed the issue with sending messages to the inbox.

### Features
* Added responsive mobile support for the Appointment and Invoice pages.
* Added "Cancel Pending" for order items.

## v1.2.10 - 2026-6-16
### Fixes:
* Fixed Arabic text search in patient names.
 

## v1.2.9 - 2026-6-13
### Fixes:
* Fixed print issue in invoice.
* Fixed phone number validation (must start with 078, 077, 075, or 079).
* Fixed WhatsApp confirmation messages not being sent from the appointment page.
 
### Features
* Added ability to clone existing roles.

## v1.2.8 - 2026-6-5
### Fixes:
* Reset selected procedures when changing provider in the order assessment page.
* Fix clinic creation and editing where the active toggle was always set to true by default.
* Hide barcode print button when LIS is not active.
* Fix phone number validation.
* Hide inactive suggestions in the assessment page.
* Replace delete order with cancel order functionality.
* Prevent changing appointment status to "In Progress" if the appointment date is in the future (must be today or earlier)

### Features
* Add ability to copy prescription templates.
* Add ability to create orders from the orders page and ability to add payments to orders and ability to send orders to LIS and ability to upload order results.
* Remove Arabic diacritics and normalize letters (e.g., "أ" → "ا").
* Use autocomplete for clinic selection in the create invoice page instead of a simple select dropdown.
* Automatically print invoice when auto-print option is enabled.
* Auto-fill payment amount based on the invoice remaining balance.
* Display patient name in transactions and rates pages.
* Add diagnoses in the suggestion page.

## v1.2.7 - 2026-4-11
### Fixes:
* Improved search to apply a `WHERE LIKE` filter on names across all items
* Fixed Health Information dynamic field type "textarea"
* Limited the number of items in the Patient List autocomplete
* Fixed handling of active and inactive states in Health Information fields
* Fixed cancel permission check on Register show
* Fixed report date range handling
* Fixed error when editing Health Information for old appointments
* Fixed error in assessment diagnoses
* Fixed issue where canceled appointments for the same patient on the same day did not show an alert
* Reloaded visitations on the Assessment page when clicking "Completed"
* Fixed issue where editing and saving Health Information fields on page 2 or later would return to the first page instead of the same page
* Fixed display of report `display_name` in the side menu
* Fixed bug where deleting a procedure from an assessment did not update the patient’s visitation card
* In the Assessment page, when a procedure is deleted, the visitations list is automatically reloaded.
* Prevented duplicate patient names when editing an appointment; the name must be unique.
* Edit Appointments Queue ui.
* Fix saving the report when using "Save as Template" in the General Assessment.
* Fix issue where page content does not reload when switching between reports.
* Fix delete report permission.
* Fix error when adding a patient with only month and day in the birth date.

### Features
* Health Information title display  the label 
* Added ability to copy Health Information fields to a new clinic
* Display clinic name and procedure name in the report filter
* Display the due balance in the visitation list if the patient’s due balance is greater than 0
* Show `attendanceOrder` in appointment pages.
* Merge patient information when duplicate records exist.
* messages & inbox: Add messages and add a message directly from the Inbox.
* Prescription Items: Mark as dispensed in Pharmacy and display this information on the Assessment page for the doctor.
* Add search for appointments by patient phone number.
* Add health information field filter: show all or show filled only.

* In the Assessment page, if a search term is not found in the local data, a **"Search Everywhere"** button will appear to allow searching across all records.
* Improved auto-close functionality: when an invoice is opened, any previously open invoice will remain open, and new procedures will be added to it instead of creating a new invoice.
* Removed validation on `dueBalance` to allow negative values.
* Display `dueBalance` in the dialog for appointments that are **Attended** or **In Progress** in payment.
* Added a filter on the Appointment pages to select by status: **Scheduled**, **Attended**, **In Progress**, **Completed**, **Canceled**.
* In the Queue-Visitations view, the visitations are displayed in the order they are attended.
* Add permission for `invoice.generalDiscountInExtraCharges`
* Show summary in rates.
* Add filters to rates.

## v1.2.6 - 2026-1-22
### Fixes:
* Fixed an issue with listing visitations on the assessment page caused by incorrect  query parameters.
* Fixed an issue in reports when sending filter parameters.
* Reordered the search input for improved layout and usability in appointment page.
* Fixed PrimeVue deprecation warning by replacing OverlayPanel with Popover in notifications.


### Features
*  Added `user Collection`   for report usage to standardize authenticated user handling.
 



## v1.2.5 - 2026-1-17
### Features
* Add notification system
* Add health information with dynamic fields

## v1.2.4 - 2025-12-20
### Fixes:
* Fixed an issue with adding payments in the assessment page Procedure tab.
* Corrected is Linked To User so it properly returns false when the user has no access this register.
* Corrected appointment-request query to return only appointments linked to the user's clinic.
* Closed the dialog after creating appointments when 'Send Confirmation to WhatsApp' is selected.
* Closed the appointment-request dialog after creating.
* Delete order together with its items in Assessments → Orders tab.
* Correct treatment plan design in case-sheet.

### Features
* Support for dynamically listing both local and remote APIs in reports.
* Set default template in diagnostics.
* Allow users to create follow-ups manually instead of being generated automatically by the system
* Add “Follow-up Start After” setting to clinic settings
* Add follow-up type, called by, and created by fields to Followups
* Add Followups and Appointments to case-sheet
 
## v1.2.3 - 2025-11-10
### Fixes:
* Show "Add Payment" button in the Procedures tab on the Assessment page when there is a due balance.

### Features:
* Dynamic report management: add filters and join with reports.
* Edit patient information in medical history.

## v1.2.2 - 2025-10-19
### Fixes:
* Fixed the search issue for products on the Add Procedure page.
* Made the product search on the page case-insensitive (works with both uppercase and lowercase characters).
* In the Assessment page, under the Procedure tab, display Total Payments and Due Balance correctly — if there are multiple open invoices, show the total Due Balance of all; if there is only one open invoice, show its Due Balance.

### Features:
* Added Diagnosis to General Assessment.
* Upload Attachment from Appointment.
* View all attachments in the assessment page under the Attachments tab, depending on the "Show All Attachments" toggle.
* View appointment notes in the assessment page.

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
