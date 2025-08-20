
ALTER TABLE medical_histories DROP COLUMN blood_type;
ALTER TABLE medical_histories ALTER COLUMN notes TYPE text;
ALTER TABLE medical_histories ALTER COLUMN created_at TYPE timestamp(0) USING created_at::timestamp(0);
ALTER TABLE medical_histories ALTER COLUMN updated_at TYPE timestamp(0) USING updated_at::timestamp(0);
