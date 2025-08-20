ALTER TABLE inventory_managers RENAME TO inventory_user;

ALTER TABLE inventory_user RENAME COLUMN doctor_id TO user_id;


ALTER TABLE inventory_user ALTER COLUMN user_id TYPE bigint USING user_id::bigint;
ALTER TABLE inventory_user ALTER COLUMN inventory_id TYPE bigint USING inventory_id::bigint;
ALTER TABLE inventory_user ALTER COLUMN created_at TYPE timestamp(0) USING created_at::timestamp(0);
ALTER TABLE inventory_user ALTER COLUMN updated_at TYPE timestamp(0) USING updated_at::timestamp(0);

DROP INDEX IF EXISTS inventory_managers_doctor_id_index;
DROP INDEX IF EXISTS inventory_managers_inventory_id_index;

CREATE INDEX inventory_user_user_id_index ON inventory_user (user_id);
CREATE INDEX inventory_user_inventory_id_index ON inventory_user (inventory_id);
