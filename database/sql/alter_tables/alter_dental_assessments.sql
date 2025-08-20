ALTER TABLE dental_assessments
    ALTER COLUMN adult_dental_chart TYPE json USING adult_dental_chart::json;

ALTER TABLE dental_assessments
    ALTER COLUMN pedo_dental_chart TYPE json USING pedo_dental_chart::json;

-- Update NULL pedo_dental_chart values to empty JSON object to avoid NOT NULL violation
UPDATE dental_assessments
SET pedo_dental_chart = '{}'::json
WHERE pedo_dental_chart IS NULL;

ALTER TABLE dental_assessments
    ALTER COLUMN pedo_dental_chart SET NOT NULL;

ALTER TABLE dental_assessments
    ALTER COLUMN created_at TYPE timestamp(0) USING created_at::timestamp(0);

ALTER TABLE dental_assessments
    ALTER COLUMN updated_at TYPE timestamp(0) USING updated_at::timestamp(0);
