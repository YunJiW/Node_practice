const db = require('../db/sqlite');

exports.getTodos = () => {
  return db.prepare('SELECT * FROM todos').all();
};

exports.createTodo = (title) => {
    const stmt = db.prepare('INSERT INTO todos (title) VALUES (?)');


const result = stmt.run(title);

    return {
        id : result.lastInsertRowid,
        title,
        done: 0
    };
};