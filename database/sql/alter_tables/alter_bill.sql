ALTER TABLE bills RENAME TO invoices;

-- RENAME COLUMN (must be one per statement in PostgreSQL)
ALTER TABLE invoices RENAME COLUMN doctor_id TO clinic_id;
ALTER TABLE invoices RENAME COLUMN doctor_fee TO clinic_fee;
ALTER TABLE invoices RENAME COLUMN doctor_cost TO clinic_cost;
ALTER TABLE invoices RENAME COLUMN doctor_ratio TO clinic_ratio;
ALTER TABLE invoices RENAME COLUMN doctor_bill_ratio TO clinic_invoice_ratio;

-- ADD new columns
ALTER TABLE invoices
    ADD COLUMN subtotal bigint DEFAULT 0 NOT NULL,
    ADD COLUMN total bigint DEFAULT 0 NOT NULL,
    ADD COLUMN total_extra_charges bigint DEFAULT 0 NOT NULL,
    ADD COLUMN total_discount bigint DEFAULT 0 NOT NULL,
    ADD COLUMN total_payments bigint DEFAULT 0 NOT NULL,
    ADD COLUMN due_balance bigint DEFAULT 0 NOT NULL;

-- Set defaults and not nulls
ALTER TABLE invoices ALTER COLUMN extra_charges SET DEFAULT 0;
ALTER TABLE invoices ALTER COLUMN extra_charges SET NOT NULL;

-- Convert and modify column types
ALTER TABLE invoices ALTER COLUMN center_fee TYPE integer USING center_fee::integer;
ALTER TABLE invoices ALTER COLUMN center_fee SET DEFAULT 0;
ALTER TABLE invoices ALTER COLUMN center_fee SET NOT NULL;

ALTER TABLE invoices ALTER COLUMN center_cost TYPE integer USING center_cost::integer;
ALTER TABLE invoices ALTER COLUMN center_cost SET DEFAULT 0;
ALTER TABLE invoices ALTER COLUMN center_cost SET NOT NULL;

ALTER TABLE invoices ALTER COLUMN clinic_fee TYPE integer USING clinic_fee::integer;
ALTER TABLE invoices ALTER COLUMN clinic_fee SET DEFAULT 0;
ALTER TABLE invoices ALTER COLUMN clinic_fee SET NOT NULL;

ALTER TABLE invoices ALTER COLUMN clinic_cost TYPE integer USING clinic_cost::integer;
ALTER TABLE invoices ALTER COLUMN clinic_cost SET DEFAULT 0;
ALTER TABLE invoices ALTER COLUMN clinic_cost SET NOT NULL;

ALTER TABLE invoices ALTER COLUMN clinic_ratio TYPE double precision USING clinic_ratio::double precision;
ALTER TABLE invoices ALTER COLUMN clinic_ratio SET DEFAULT 0;
ALTER TABLE invoices ALTER COLUMN clinic_ratio SET NOT NULL;

ALTER TABLE invoices ALTER COLUMN clinic_invoice_ratio TYPE double precision USING clinic_invoice_ratio::double precision;
ALTER TABLE invoices ALTER COLUMN clinic_invoice_ratio SET DEFAULT 0;
ALTER TABLE invoices ALTER COLUMN clinic_invoice_ratio SET NOT NULL;

-- Default value for status column
ALTER TABLE invoices ALTER COLUMN state SET DEFAULT 'open';

-- Add index
CREATE INDEX invoices_clinic_id_index ON invoices (clinic_id);
