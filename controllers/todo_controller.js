const todoService = require('../services/todo_service');


exports.getTodos = (req, res) => {
    const todos = todoService.getTodos();
    res.json(todos);
};

exports.createTodo = (req,res) => {
    const {title} = req.body;

    if(!title){
        return res.status(400).json({message : "Title is required!"});
    }

    const todo = todoService.createTodo(title);
    res.status(201).json(todo);
};

