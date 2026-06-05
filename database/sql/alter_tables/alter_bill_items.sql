-- Rename table
ALTER TABLE bill_items RENAME TO invoice_items;

-- Rename columns (one per statement in PostgreSQL)
ALTER TABLE invoice_items RENAME COLUMN bill_id TO invoice_id;
ALTER TABLE invoice_items RENAME COLUMN item_id TO procedure_id;
ALTER TABLE invoice_items RENAME COLUMN extra_charges TO extra_charge;



-- Add new columns
ALTER TABLE invoice_items ADD COLUMN visitation_id bigint;
ALTER TABLE invoice_items ADD COLUMN appointment_id bigint;




ALTER TABLE invoice_items ALTER COLUMN price TYPE integer USING price::integer;
ALTER TABLE invoice_items ALTER COLUMN quantity TYPE integer USING quantity::integer;

ALTER TABLE invoice_items ALTER COLUMN extra_charge SET DEFAULT 0;
ALTER TABLE invoice_items ALTER COLUMN extra_charge SET NOT NULL;

-- Drop columns


ALTER TABLE invoice_items DROP COLUMN item_type;

-- Create indexes
CREATE INDEX invoice_items_procedure_id_index ON invoice_items (procedure_id);
CREATE INDEX invoice_items_visitation_id_index ON invoice_items (visitation_id);
CREATE INDEX invoice_items_appointment_id_index ON invoice_items (appointment_id);
