 ALTER TABLE stocks ALTER COLUMN inventory_id TYPE bigint USING inventory_id::bigint;
ALTER TABLE stocks ALTER COLUMN product_id TYPE bigint USING product_id::bigint;

ALTER TABLE stocks RENAME COLUMN price TO cost;
ALTER TABLE stocks RENAME COLUMN exp_date TO expiry_date;

ALTER TABLE stocks ALTER COLUMN created_at TYPE timestamp(0) USING created_at::timestamp(0);
ALTER TABLE stocks ALTER COLUMN updated_at TYPE timestamp(0) USING updated_at::timestamp(0);
