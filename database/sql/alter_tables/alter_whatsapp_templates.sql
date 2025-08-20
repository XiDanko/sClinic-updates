
ALTER TABLE whatsapp_templates RENAME COLUMN doctor_id TO clinic_id;

ALTER TABLE whatsapp_templates ALTER COLUMN clinic_id TYPE bigint USING clinic_id::bigint;

ALTER TABLE whatsapp_templates
    ALTER COLUMN created_at TYPE timestamp(0) USING created_at::timestamp(0),
    ALTER COLUMN updated_at TYPE timestamp(0) USING updated_at::timestamp(0);

DROP INDEX IF EXISTS whatsapp_templates_doctor_id_index;

CREATE INDEX whatsapp_templates_clinic_id_index ON whatsapp_templates (clinic_id);
CREATE INDEX whatsapp_templates_type_index ON whatsapp_templates (type);

ALTER TABLE whatsapp_templates OWNER TO postgres;
