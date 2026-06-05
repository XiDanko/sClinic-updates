ALTER TABLE rates RENAME COLUMN doctor_id TO clinic_id;
ALTER TABLE rates RENAME COLUMN bill_id TO invoice_id;



-- Rename doctor_fee and doctor_cost before altering them
ALTER TABLE rates RENAME COLUMN doctor_fee TO clinic_fee;
ALTER TABLE rates RENAME COLUMN doctor_cost TO clinic_cost;

ALTER TABLE rates ALTER COLUMN clinic_id TYPE bigint USING clinic_id::bigint;
ALTER TABLE rates ALTER COLUMN invoice_id TYPE bigint USING invoice_id::bigint;



ALTER TABLE rates ALTER COLUMN clinic_fee TYPE integer USING clinic_fee::integer;
ALTER TABLE rates ALTER COLUMN center_fee TYPE integer USING center_fee::integer;
ALTER TABLE rates ALTER COLUMN clinic_cost TYPE integer USING clinic_cost::integer;
ALTER TABLE rates ALTER COLUMN center_cost TYPE integer USING center_cost::integer;





ALTER TABLE rates ALTER COLUMN amount TYPE bigint USING amount::bigint;

ALTER TABLE rates ALTER COLUMN created_at TYPE timestamp(0) USING created_at::timestamp(0);
ALTER TABLE rates ALTER COLUMN updated_at TYPE timestamp(0) USING updated_at::timestamp(0);

DROP INDEX IF EXISTS rates_bill_id_index;
DROP INDEX IF EXISTS rates_doctor_id_index;


CREATE INDEX rates_clinic_id_index ON rates (clinic_id);
CREATE INDEX rates_invoice_id_index ON rates (invoice_id);

