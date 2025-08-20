ALTER TABLE rates RENAME COLUMN doctor_id TO clinic_id;
ALTER TABLE rates RENAME COLUMN bill_id TO invoice_id;
ALTER TABLE rates RENAME COLUMN bill_total TO invoice_total;
ALTER TABLE rates RENAME COLUMN doctor_bill_ratio TO clinic_invoice_ratio;

-- Rename doctor_fee and doctor_cost before altering them
ALTER TABLE rates RENAME COLUMN doctor_fee TO clinic_fee;
ALTER TABLE rates RENAME COLUMN doctor_cost TO clinic_cost;

ALTER TABLE rates ALTER COLUMN clinic_id TYPE bigint USING clinic_id::bigint;
ALTER TABLE rates ALTER COLUMN invoice_id TYPE bigint USING invoice_id::bigint;
ALTER TABLE rates ALTER COLUMN transaction_id TYPE bigint USING transaction_id::bigint;
ALTER TABLE rates ALTER COLUMN invoice_total TYPE integer USING invoice_total::integer;
ALTER TABLE rates ALTER COLUMN due_balance TYPE integer USING due_balance::integer;

ALTER TABLE rates ALTER COLUMN clinic_fee TYPE integer USING clinic_fee::integer;
ALTER TABLE rates ALTER COLUMN center_fee TYPE integer USING center_fee::integer;
ALTER TABLE rates ALTER COLUMN clinic_cost TYPE integer USING clinic_cost::integer;
ALTER TABLE rates ALTER COLUMN center_cost TYPE integer USING center_cost::integer;
ALTER TABLE rates ALTER COLUMN clinic_invoice_ratio TYPE double precision USING clinic_invoice_ratio::double precision;

ALTER TABLE rates ALTER COLUMN clinic_invoice_ratio SET DEFAULT 0;

ALTER TABLE rates ALTER COLUMN clinic_invoice_ratio SET NOT NULL;



ALTER TABLE rates ALTER COLUMN transaction_amount TYPE bigint USING transaction_amount::bigint;
ALTER TABLE rates ALTER COLUMN amount TYPE bigint USING amount::bigint;

ALTER TABLE rates ALTER COLUMN created_at TYPE timestamp(0) USING created_at::timestamp(0);
ALTER TABLE rates ALTER COLUMN updated_at TYPE timestamp(0) USING updated_at::timestamp(0);

DROP INDEX IF EXISTS rates_bill_id_index;
DROP INDEX IF EXISTS rates_doctor_id_index;
DROP INDEX IF EXISTS rates_transaction_id_index;

CREATE INDEX rates_clinic_id_index ON rates (clinic_id);
CREATE INDEX rates_invoice_id_index ON rates (invoice_id);
CREATE INDEX rates_transaction_id_index ON rates (transaction_id);
