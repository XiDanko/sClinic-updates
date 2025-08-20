-- Convert id to bigint


-- Rename columns

-- Rename columns (each rename must be a separate ALTER TABLE statement)
ALTER TABLE visitations
    RENAME COLUMN doctor_id TO clinic_id;
ALTER TABLE visitations
    RENAME COLUMN state TO status;




-- Drop obsolete columns
ALTER TABLE visitations
    DROP COLUMN lis_visit_id,
    DROP COLUMN lis_partner_id,
    DROP COLUMN lab_report,
    DROP COLUMN is_sent_to_pharmacy,
    DROP COLUMN is_sent_to_lab,
    DROP COLUMN date;
-- Add columns if needed
ALTER TABLE visitations
    ADD COLUMN treatment_plan_id bigint;

-- Convert types
ALTER TABLE visitations
    ALTER COLUMN assessment_id TYPE bigint USING assessment_id::bigint;

-- Normalize timestamps
ALTER TABLE visitations
    ALTER COLUMN created_at TYPE timestamp(0) USING created_at::timestamp(0),
    ALTER COLUMN updated_at TYPE timestamp(0) USING updated_at::timestamp(0);

-- Drop outdated indexes
DROP INDEX IF EXISTS visitations_doctor_id_index;
DROP INDEX IF EXISTS visitations_state_index;
DROP INDEX IF EXISTS visitations_date_index;
DROP INDEX IF EXISTS visitations_is_sent_to_pharmacy_index;
DROP INDEX IF EXISTS visitations_is_sent_to_lab_index;
DROP INDEX IF EXISTS visitations_lis_visit_id_index;
DROP INDEX IF EXISTS visitations_lis_partner_id_index;
DROP INDEX IF EXISTS visitations_lab_report_index;

-- Create updated indexes
CREATE INDEX IF NOT EXISTS visitations_assessment_type_assessment_id_index
    ON visitations (assessment_type, assessment_id);
CREATE INDEX IF NOT EXISTS visitations_patient_id_index
    ON visitations (patient_id);
CREATE INDEX IF NOT EXISTS visitations_appointment_id_index
    ON visitations (appointment_id);
CREATE INDEX IF NOT EXISTS visitations_clinic_id_index
    ON visitations (clinic_id);
CREATE INDEX IF NOT EXISTS visitations_treatment_plan_id_index
    ON visitations (treatment_plan_id);

-- Set owner
ALTER TABLE visitations
    OWNER TO postgres;
