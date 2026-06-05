ALTER TABLE bills RENAME TO invoices;

-- RENAME COLUMN (must be one per statement in PostgreSQL)
ALTER TABLE invoices RENAME COLUMN doctor_id TO clinic_id;



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




-- Default value for status column
ALTER TABLE invoices ALTER COLUMN state SET DEFAULT 'open';

-- Add index
CREATE INDEX invoices_clinic_id_index ON invoices (clinic_id);
