
let todos = [
    {
        id: 1, title : "Study Node.js", done :false
    },
    {
        id: 2, title : "Learn Express", done : false
    }
];

exports.getTodos = () => {
    return todos;
};

exports.createTodo = (title) => {
    const newTodo = {
        id: Date.now(),
        title,
        done: false
    };
    todos.push(newTodo);
    return newTodo;
};