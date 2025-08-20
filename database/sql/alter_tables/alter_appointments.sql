ALTER TABLE appointments
    ADD COLUMN reference_id bigint,
    ADD COLUMN notes varchar(255);

ALTER TABLE appointments
    RENAME COLUMN doctor_id TO clinic_id;

ALTER TABLE appointments
    RENAME COLUMN at TO "date";

ALTER TABLE appointments
    RENAME COLUMN state TO status;

ALTER TABLE appointments
    DROP COLUMN number,
    DROP COLUMN "to",
    DROP COLUMN row,
    DROP COLUMN call;

CREATE INDEX appointments_clinic_id_index
    ON appointments (clinic_id);

CREATE INDEX appointments_reference_id_index
    ON appointments (reference_id);

CREATE INDEX appointments_date_index
    ON appointments ("date");

CREATE INDEX appointments_status_index
    ON appointments (status);

DROP INDEX IF EXISTS appointments_doctor_id_index;
DROP INDEX IF EXISTS appointments_at_index;
DROP INDEX IF EXISTS appointments_state_index;
