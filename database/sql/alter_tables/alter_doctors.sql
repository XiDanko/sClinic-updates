ALTER TABLE doctors RENAME TO clinics;

ALTER TABLE clinics RENAME COLUMN specialty TO speciality;
ALTER TABLE clinics RENAME COLUMN phone TO phone_number;
ALTER TABLE clinics RENAME COLUMN working_hours TO work_begin;

ALTER TABLE clinics ADD COLUMN work_end time(0) NOT NULL DEFAULT '00:00';


ALTER TABLE clinics ALTER COLUMN "order" TYPE integer USING "order"::integer;

ALTER TABLE clinics ALTER COLUMN ratio TYPE integer USING ratio::integer;
ALTER TABLE clinics ALTER COLUMN ratio SET NOT NULL;
ALTER TABLE clinics ALTER COLUMN active TYPE boolean USING (active = 1);
ALTER TABLE clinics ALTER COLUMN active SET DEFAULT true;
ALTER TABLE clinics RENAME COLUMN active TO is_active;
ALTER TABLE clinics ALTER COLUMN created_at TYPE timestamp(0) USING created_at::timestamp(0);
ALTER TABLE clinics ALTER COLUMN updated_at TYPE timestamp(0) USING updated_at::timestamp(0);

ALTER TABLE clinics DROP COLUMN is_center;
