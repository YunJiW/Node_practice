const Database = require('better-sqlite3');

const db = new Database('database.sqlite');

db.prepare(`
    CREATE TABLE IF NOT EXISTS todos(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        completed INTEGER DEFAULT 0)`)
        .run();

module.exports = db;