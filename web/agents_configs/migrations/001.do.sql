
  -- Add SQL in this file to create the database tables for your API
  CREATE TABLE IF NOT EXISTS agents_configs (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    instructions TEXT NOT NULL,
    model TEXT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
  