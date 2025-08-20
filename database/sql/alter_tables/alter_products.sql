
ALTER TABLE products ALTER COLUMN active TYPE boolean USING (active = 1);
ALTER TABLE products ALTER COLUMN active SET DEFAULT true;

ALTER TABLE products ALTER COLUMN created_at TYPE timestamp(0) USING created_at::timestamp(0);
ALTER TABLE products ALTER COLUMN updated_at TYPE timestamp(0) USING updated_at::timestamp(0);
