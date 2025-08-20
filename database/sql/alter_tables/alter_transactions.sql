ALTER TABLE transactions
ALTER
COLUMN id TYPE bigint USING id::bigint,
    ALTER
COLUMN creator_id TYPE bigint USING creator_id::bigint,
    ALTER
COLUMN register_id TYPE bigint USING register_id::bigint;
ALTER TABLE transactions
    RENAME COLUMN doctor_id TO clinic_id;
ALTER TABLE transactions
    RENAME COLUMN bill_id TO invoice_id;
ALTER TABLE transactions
    RENAME COLUMN bill_item_id TO invoice_item_id;
ALTER TABLE transactions
ALTER
COLUMN reference_register_id TYPE bigint USING reference_register_id::bigint;
ALTER TABLE transactions
    ADD COLUMN payment_method_id bigint,
    ADD COLUMN expense_title_id  bigint,
ALTER
COLUMN amount TYPE integer USING amount::integer,
    ALTER
COLUMN status SET DEFAULT 'received',
    ALTER
COLUMN is_rate TYPE boolean USING (is_rate = 1),
    ALTER
COLUMN is_rate SET DEFAULT false,
    ALTER
COLUMN created_at TYPE timestamp(0) USING created_at::timestamp(0),
    ALTER
COLUMN updated_at TYPE timestamp(0) USING updated_at::timestamp(0);

ALTER TABLE transactions
    ALTER COLUMN type SET NOT NULL;

ALTER TABLE transactions
    ALTER COLUMN status SET NOT NULL;

ALTER TABLE transactions
    ALTER COLUMN notes DROP NOT NULL;

ALTER TABLE transactions
    ADD COLUMN provider_id bigint default null;

DROP INDEX IF EXISTS transactions_bill_id_index;
DROP INDEX IF EXISTS transactions_bill_item_id_index;
DROP INDEX IF EXISTS transactions_doctor_id_index;

CREATE INDEX IF NOT EXISTS transactions_clinic_id_index ON transactions (clinic_id);
CREATE INDEX IF NOT EXISTS transactions_creator_id_index ON transactions (creator_id);
CREATE INDEX IF NOT EXISTS transactions_register_id_index ON transactions (register_id);
CREATE INDEX IF NOT EXISTS transactions_payment_method_id_index ON transactions (payment_method_id);
CREATE INDEX IF NOT EXISTS transactions_reference_register_id_index ON transactions (reference_register_id);
CREATE INDEX IF NOT EXISTS transactions_invoice_id_index ON transactions (invoice_id);
CREATE INDEX IF NOT EXISTS transactions_invoice_item_id_index ON transactions (invoice_item_id);
CREATE INDEX IF NOT EXISTS transactions_expense_title_id_index ON transactions (expense_title_id);
CREATE INDEX IF NOT EXISTS transactions_type_index ON transactions (type);
CREATE INDEX IF NOT EXISTS transactions_status_index ON transactions (status);
CREATE INDEX IF NOT EXISTS transactions_notes_index ON transactions (notes);
CREATE INDEX IF NOT EXISTS transactions_provider_id_index ON transactions (provider_id);
