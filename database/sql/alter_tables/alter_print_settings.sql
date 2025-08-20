
ALTER TABLE print_settings RENAME COLUMN doctor_id TO clinic_id;

ALTER TABLE print_settings ALTER COLUMN auto_print_receipts TYPE boolean USING (auto_print_receipts = 1);
ALTER TABLE print_settings ALTER COLUMN auto_print_receipts SET DEFAULT false;

ALTER TABLE print_settings ALTER COLUMN invoice_report SET DEFAULT 'jasperReports/invoice.jrxml';
ALTER TABLE print_settings ALTER COLUMN medical_history_report SET DEFAULT 'jasperReports/medicalHistory.jrxml';
ALTER TABLE print_settings ALTER COLUMN diagnosis_report SET DEFAULT 'jasperReports/diagnosis.jrxml';
ALTER TABLE print_settings ALTER COLUMN lab_report SET DEFAULT 'jasperReports/lab.jrxml';
ALTER TABLE print_settings ALTER COLUMN radiology_report SET DEFAULT 'jasperReports/radiology.jrxml';
ALTER TABLE print_settings ALTER COLUMN operation_report SET DEFAULT 'jasperReports/operation.jrxml';
ALTER TABLE print_settings ALTER COLUMN vitals_report SET DEFAULT 'jasperReports/vitals.jrxml';
ALTER TABLE print_settings ALTER COLUMN prescription_report SET DEFAULT 'jasperReports/prescription.jrxml';
ALTER TABLE print_settings ALTER COLUMN visitation_report SET DEFAULT 'jasperReports/visitation.jrxml';

ALTER TABLE print_settings ALTER COLUMN created_at TYPE timestamp(0) USING created_at::timestamp(0);
ALTER TABLE print_settings ALTER COLUMN updated_at TYPE timestamp(0) USING updated_at::timestamp(0);

DROP INDEX IF EXISTS print_settings_doctor_id_index;

CREATE INDEX print_settings_clinic_id_index ON print_settings (clinic_id);
