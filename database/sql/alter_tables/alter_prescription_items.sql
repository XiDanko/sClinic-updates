
ALTER TABLE prescription_items RENAME COLUMN drug_usage_id TO usage_id;
ALTER TABLE prescription_items ALTER COLUMN usage_id SET DEFAULT NULL;




ALTER TABLE prescription_items ADD COLUMN duration_id bigint DEFAULT NULL;

ALTER TABLE prescription_items ADD COLUMN note_id bigint DEFAULT NULL;

ALTER TABLE prescription_items ALTER COLUMN created_at TYPE timestamp(0) USING created_at::timestamp(0);
ALTER TABLE prescription_items ALTER COLUMN updated_at TYPE timestamp(0) USING updated_at::timestamp(0);

CREATE INDEX prescription_items_usage_id_index ON prescription_items (usage_id);
CREATE INDEX prescription_items_duration_id_index ON prescription_items (duration_id);
CREATE INDEX prescription_items_note_id_index ON prescription_items (note_id);
