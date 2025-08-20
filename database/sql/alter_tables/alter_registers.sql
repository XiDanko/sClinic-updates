

ALTER TABLE registers ADD COLUMN name varchar(255) DEFAULT  NULL;
ALTER TABLE registers ADD COLUMN cash bigint DEFAULT 0 NOT NULL;
ALTER TABLE registers ADD COLUMN profit bigint DEFAULT 0 NOT NULL;
ALTER TABLE registers ADD COLUMN total_transfer_in bigint DEFAULT 0 NOT NULL;
ALTER TABLE registers ADD COLUMN total_transfer_out bigint DEFAULT 0 NOT NULL;
ALTER TABLE registers ADD COLUMN total_expenses bigint DEFAULT 0 NOT NULL;
ALTER TABLE registers ADD COLUMN total_payments bigint DEFAULT 0 NOT NULL;
ALTER TABLE registers ADD COLUMN total_topups bigint DEFAULT 0 NOT NULL;
ALTER TABLE registers ADD COLUMN is_active boolean DEFAULT true NOT NULL;

ALTER TABLE registers ALTER COLUMN created_at TYPE timestamp(0) USING created_at::timestamp(0);
ALTER TABLE registers ALTER COLUMN updated_at TYPE timestamp(0) USING updated_at::timestamp(0);
ALTER TABLE registers ALTER COLUMN user_id DROP DEFAULT;




CREATE INDEX registers_name_index ON registers (name);
