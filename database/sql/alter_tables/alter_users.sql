
ALTER TABLE users DROP COLUMN email;
ALTER TABLE users DROP COLUMN receive_mail_notifications;


ALTER TABLE users RENAME COLUMN active TO is_active;
ALTER TABLE users RENAME COLUMN main_role TO type;

ALTER TABLE users
    ALTER COLUMN is_active TYPE boolean USING (is_active = 1),
    ALTER COLUMN is_active SET DEFAULT true,
    ALTER COLUMN is_active SET NOT NULL;


ALTER TABLE users
    ALTER COLUMN created_at TYPE timestamp(0) USING created_at::timestamp(0),
    ALTER COLUMN updated_at TYPE timestamp(0) USING updated_at::timestamp(0);

ALTER TABLE users OWNER TO postgres;
