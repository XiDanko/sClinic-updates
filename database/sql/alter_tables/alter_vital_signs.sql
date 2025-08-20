
ALTER TABLE vital_signs
    ALTER COLUMN created_at TYPE timestamp(0) USING created_at::timestamp(0),
    ALTER COLUMN updated_at TYPE timestamp(0) USING updated_at::timestamp(0);

CREATE INDEX IF NOT EXISTS vital_signs_visitation_id_index ON vital_signs (visitation_id);

ALTER TABLE vital_signs OWNER TO postgres;
