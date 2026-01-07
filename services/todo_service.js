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

/**
 * Update
 */
exports.updateTodo = (id, title, done) =>{
    const todo = db
    .prepare('SELECT * FROM todos WHERE id = ?')
    .get(id);

    if(!todo){
        return null;
    }

    const newTitle = title !== undefined ? title : todo.title;
    const newDone = done !== undefined ? done : todo.done;

    db.prepare(`
        UPDATE todos
        SET title = ? , done = ?
        WHERE id = ?`)
        .run(newTitle, newDone,id);

    return {id, title: newTitle, done: newDone};
};
/**
 * DELETE 
 */

exports.deleteTodo = (id) =>{
    const todo = db
    .prepare('SELECT * FROM todos WHERE id = ?')
    .get(id);

    if(!todo){
        return null;
    }

    db.prepare(
        'DELETE FROM todos WHERE id = ?'
    ).run(id);

    return todo;
};
