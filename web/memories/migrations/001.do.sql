
  -- Add SQL in this file to create the database tables for your API
  CREATE TABLE IF NOT EXISTS memories (
    id INTEGER PRIMARY KEY,
    user_id TEXT NOT NULL,
    thread_id TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
  