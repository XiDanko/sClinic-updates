 ALTER TABLE stock_transactions ALTER COLUMN stock_id TYPE bigint USING stock_id::bigint;
ALTER TABLE stock_transactions ALTER COLUMN product_id TYPE bigint USING product_id::bigint;
ALTER TABLE stock_transactions ALTER COLUMN inventory_id TYPE bigint USING inventory_id::bigint;

ALTER TABLE stock_transactions ADD COLUMN creator_id bigint  ;

ALTER TABLE stock_transactions RENAME COLUMN bill_item_id TO invoice_item_id;

ALTER TABLE stock_transactions ALTER COLUMN invoice_item_id TYPE bigint USING invoice_item_id::bigint;

ALTER TABLE stock_transactions ALTER COLUMN created_at TYPE timestamp(0) USING created_at::timestamp(0);
ALTER TABLE stock_transactions ALTER COLUMN updated_at TYPE timestamp(0) USING updated_at::timestamp(0);

CREATE INDEX IF NOT EXISTS stock_transactions_creator_id_index ON stock_transactions (creator_id);
CREATE INDEX IF NOT EXISTS stock_transactions_invoice_item_id_index ON stock_transactions (invoice_item_id);
CREATE INDEX IF NOT EXISTS stock_transactions_quantity_index ON stock_transactions (quantity);
CREATE INDEX IF NOT EXISTS stock_transactions_type_index ON stock_transactions (type);

CREATE INDEX IF NOT EXISTS stock_transactions_stock_id_index ON stock_transactions (stock_id);
CREATE INDEX IF NOT EXISTS stock_transactions_product_id_index ON stock_transactions (product_id);
CREATE INDEX IF NOT EXISTS stock_transactions_inventory_id_index ON stock_transactions (inventory_id);
