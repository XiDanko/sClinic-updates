
ALTER TABLE inventories RENAME COLUMN active TO is_active;
ALTER TABLE inventories ALTER COLUMN is_active TYPE boolean USING (is_active = 1);
ALTER TABLE inventories ALTER COLUMN created_at TYPE timestamp(0) USING created_at::timestamp(0);
ALTER TABLE inventories ALTER COLUMN updated_at TYPE timestamp(0) USING updated_at::timestamp(0);
