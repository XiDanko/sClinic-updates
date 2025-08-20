
ALTER TABLE prescriptions ADD COLUMN patient_id bigint;

-- Update NULL patient_id to a valid existing patient id or a default value
-- Replace 1 with a valid patient_id from your patients table or suitable default
UPDATE prescriptions
SET patient_id = 1
WHERE patient_id IS NULL;

ALTER TABLE prescriptions ALTER COLUMN patient_id SET NOT NULL;

ALTER TABLE prescriptions
    ALTER COLUMN created_at TYPE timestamp(0) USING created_at::timestamp(0),
    ALTER COLUMN updated_at TYPE timestamp(0) USING updated_at::timestamp(0);

CREATE INDEX IF NOT EXISTS prescriptions_patient_id_index ON prescriptions (patient_id);

DROP INDEX IF EXISTS procedures_name_index;
CREATE INDEX procedures_name_index ON procedures (name);
