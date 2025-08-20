ALTER TABLE suggestions
    DROP COLUMN IF EXISTS user_id;

ALTER TABLE suggestions
    RENAME COLUMN doctor_id TO clinic_id;
ALTER TABLE suggestions
    RENAME COLUMN content TO name;
ALTER TABLE suggestions
    RENAME COLUMN active TO is_active;



ALTER TABLE suggestions
    ALTER COLUMN click_count SET DEFAULT 0;

ALTER TABLE suggestions
    ALTER COLUMN is_active SET DEFAULT 1;
-- 7. Recreate indexes
DROP INDEX IF EXISTS suggestions_category_id_index;
DROP INDEX IF EXISTS suggestions_content_index;
DROP INDEX IF EXISTS suggestions_doctor_id_index;
DROP INDEX IF EXISTS suggestions_type_index;
DROP INDEX IF EXISTS suggestions_user_id_index;

-- Create new indexes per Laravel structure
CREATE INDEX IF NOT EXISTS suggestions_category_id_index ON suggestions (category_id);
CREATE INDEX IF NOT EXISTS suggestions_clinic_id_index ON suggestions (clinic_id);
CREATE INDEX IF NOT EXISTS suggestions_name_index ON suggestions (name);
CREATE INDEX IF NOT EXISTS suggestions_type_index ON suggestions (type);
CREATE INDEX IF NOT EXISTS suggestions_click_count_index ON suggestions (click_count);
