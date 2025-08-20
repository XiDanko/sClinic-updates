
ALTER TABLE procedures RENAME COLUMN doctor_id TO clinic_id;

ALTER TABLE procedures ALTER COLUMN price TYPE integer USING price::integer;

ALTER TABLE procedures RENAME COLUMN doctor_ratio TO clinic_ratio;
ALTER TABLE procedures RENAME COLUMN doctor_cost TO clinic_cost;

ALTER TABLE procedures ALTER COLUMN clinic_cost TYPE integer USING clinic_cost::integer;
ALTER TABLE procedures ALTER COLUMN center_cost TYPE integer USING center_cost::integer;

ALTER TABLE procedures RENAME COLUMN active TO is_active;

ALTER TABLE procedures ALTER COLUMN is_active TYPE boolean USING (is_active = 1);
ALTER TABLE procedures ALTER COLUMN is_active SET DEFAULT true;

ALTER TABLE procedures ALTER COLUMN click_count SET DEFAULT 0;

ALTER TABLE procedures ALTER COLUMN created_at TYPE timestamp(0) USING created_at::timestamp(0);
ALTER TABLE procedures ALTER COLUMN updated_at TYPE timestamp(0) USING updated_at::timestamp(0);

DROP INDEX IF EXISTS procedures_doctor_id_index;

CREATE INDEX procedures_clinic_id_index ON procedures (clinic_id);
CREATE INDEX IF NOT EXISTS procedures_name_index ON procedures (name);
