ALTER TABLE model_has_permissions ALTER COLUMN permission_id TYPE bigint USING permission_id::bigint;
ALTER TABLE model_has_permissions ALTER COLUMN model_id TYPE bigint USING model_id::bigint;

ALTER TABLE model_has_permissions DROP CONSTRAINT model_has_permissions_permission_id_foreign;

ALTER TABLE model_has_permissions ADD CONSTRAINT model_has_permissions_permission_id_foreign
    FOREIGN KEY (permission_id) REFERENCES permissions(id) ON DELETE CASCADE;
