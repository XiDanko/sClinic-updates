
ALTER TABLE templates RENAME COLUMN doctor_id TO clinic_id;

ALTER TABLE templates ALTER COLUMN data TYPE json USING data::json;

ALTER TABLE templates ALTER COLUMN created_at TYPE timestamp(0) USING created_at::timestamp(0);
ALTER TABLE templates ALTER COLUMN updated_at TYPE timestamp(0) USING updated_at::timestamp(0);

DROP INDEX IF EXISTS templates_doctor_id_index;

CREATE INDEX templates_clinic_id_index ON templates (clinic_id);
