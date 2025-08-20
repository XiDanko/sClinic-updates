
ALTER TABLE messages RENAME COLUMN body TO content;
ALTER TABLE messages ALTER COLUMN content TYPE varchar(255);
ALTER TABLE messages ADD COLUMN is_read boolean NOT NULL DEFAULT false;
ALTER TABLE messages ALTER COLUMN created_at TYPE timestamp(0) USING created_at::timestamp(0);
ALTER TABLE messages ALTER COLUMN updated_at TYPE timestamp(0) USING updated_at::timestamp(0);
CREATE INDEX messages_is_read_index ON messages (is_read);
