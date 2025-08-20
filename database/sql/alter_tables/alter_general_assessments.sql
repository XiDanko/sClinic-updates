
ALTER TABLE general_assessments ALTER COLUMN created_at TYPE timestamp(0) USING created_at::timestamp(0);
ALTER TABLE general_assessments ALTER COLUMN updated_at TYPE timestamp(0) USING updated_at::timestamp(0);
