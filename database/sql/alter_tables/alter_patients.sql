

ALTER TABLE patients RENAME COLUMN birth_date TO birthdate;
ALTER TABLE patients RENAME COLUMN phone TO phone_number;
ALTER TABLE patients RENAME COLUMN other TO other_info;

ALTER TABLE patients ADD COLUMN address_id bigint;

ALTER TABLE patients ALTER COLUMN created_at TYPE timestamp(0) USING created_at::timestamp(0);
ALTER TABLE patients ALTER COLUMN updated_at TYPE timestamp(0) USING updated_at::timestamp(0);

CREATE INDEX patients_address_id_index ON patients (address_id);
