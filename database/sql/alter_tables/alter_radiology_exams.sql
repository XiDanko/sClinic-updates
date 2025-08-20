ALTER TABLE radiology_exams RENAME TO exam_radiology_visitations;


ALTER TABLE exam_radiology_visitations ADD COLUMN radiology_id bigint NOT NULL;
ALTER TABLE exam_radiology_visitations ADD COLUMN exam_id bigint NOT NULL;

ALTER TABLE exam_radiology_visitations DROP COLUMN name;
ALTER TABLE exam_radiology_visitations DROP COLUMN price;
ALTER TABLE exam_radiology_visitations DROP COLUMN doctor_ratio;
ALTER TABLE exam_radiology_visitations DROP COLUMN doctor_cost;
ALTER TABLE exam_radiology_visitations DROP COLUMN center_cost;
ALTER TABLE exam_radiology_visitations DROP COLUMN duration;
ALTER TABLE exam_radiology_visitations DROP COLUMN active;
ALTER TABLE exam_radiology_visitations DROP COLUMN click_count;

ALTER TABLE exam_radiology_visitations ALTER COLUMN created_at TYPE timestamp(0) USING created_at::timestamp(0);
ALTER TABLE exam_radiology_visitations ALTER COLUMN updated_at TYPE timestamp(0) USING updated_at::timestamp(0);

DROP INDEX IF EXISTS radiology_exams_name_index;

CREATE INDEX radiology_exam_radiology_id_index ON exam_radiology_visitations (radiology_id);
CREATE INDEX radiology_exam_exam_id_index ON exam_radiology_visitations (exam_id);
