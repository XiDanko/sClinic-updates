
ALTER TABLE procedure_product ALTER COLUMN product_id TYPE bigint USING product_id::bigint;
ALTER TABLE procedure_product ALTER COLUMN procedure_id TYPE bigint USING procedure_id::bigint;
ALTER TABLE procedure_product ALTER COLUMN inventory_id TYPE bigint USING inventory_id::bigint;

ALTER TABLE procedure_product RENAME COLUMN deduction TO quantity;

ALTER TABLE procedure_product ALTER COLUMN created_at TYPE timestamp(0) USING created_at::timestamp(0);
ALTER TABLE procedure_product ALTER COLUMN updated_at TYPE timestamp(0) USING updated_at::timestamp(0);

CREATE INDEX procedure_product_procedure_id_index ON procedure_product (procedure_id);
CREATE INDEX procedure_product_inventory_id_index ON procedure_product (inventory_id);
CREATE INDEX procedure_product_product_id_index ON procedure_product (product_id);
