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

exports.updateTodo = (req,res) => {
    const id = Number(req.params.id);
    const {title , done} = req.body;

    const todo = todoService.updateTodo(id,title,done);

    if(!todo){
        return res.status(404).json({ message : 'Todo not found !!'});

    }

    res.json(todo);
};

exports.deleteTodo = (req,res) => {
    const id = Number(req.params.id);
    
    const todo = todoService.deleteTodo(id);

    if(!todo){
        return res.status(404).json({ message : 'Todo not found !!'});
    }

    res.json({ message : 'Todo deleted successfully !!',todo});
};