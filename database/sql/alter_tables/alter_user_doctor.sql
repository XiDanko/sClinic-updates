ALTER TABLE user_doctor RENAME TO clinic_user;

ALTER TABLE clinic_user ADD COLUMN id bigserial PRIMARY KEY;

ALTER TABLE clinic_user RENAME COLUMN doctor_id TO clinic_id;

ALTER TABLE clinic_user ALTER COLUMN user_id TYPE bigint USING user_id::bigint;
ALTER TABLE clinic_user ALTER COLUMN clinic_id TYPE bigint USING clinic_id::bigint;

ALTER TABLE clinic_user ADD COLUMN created_at timestamp(0);
ALTER TABLE clinic_user ADD COLUMN updated_at timestamp(0);

ALTER TABLE clinic_user OWNER TO postgres;

DROP INDEX IF EXISTS user_doctor_doctor_id_index;
DROP INDEX IF EXISTS user_doctor_user_id_index;

CREATE INDEX clinic_user_clinic_id_index ON clinic_user (clinic_id);
CREATE INDEX clinic_user_user_id_index ON clinic_user (user_id);
