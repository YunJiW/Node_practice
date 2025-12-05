const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

let todos = [
    { id: 1, title: "Study Node.js", done: false},
    { id: 2, title: "Learn Express", done: false}
];

app.get("/todos", (req, res) => {
    res.send(200).json(todos);
});

app.post("/todos",(req, res) =>{
    const { title } = req.body;

    if(!title){
        return res.status(400).json({ message: "Title is required!"});
    }``

    const newTodo = {
        id: Date.now(),
        title,
        done: false
    };
    
    todos.push(newTodo);
    res.status(201).json(newTodo);
});


app.put("/todos/:id", (req, res) => {
    const id = Number(req.params.id);
    const { title, done } = req.body;

    const todo = todos.find(item => item.id === id);

    if(!todo)
        return res.status(404).json({ message: "Todo not found!"});

    if(title != undefined) todo.title = title;
    if(done != undefined) todo.done = done;

    res.status(200).json(todo);
});

app.delete("/todos/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = todos.findIndex(todo => todo.id === id);

    if(index === -1)
        return res.status(404).json({ message: "Todo not found!"});

    const deleted = todos.splice(index, 1);
    res.status(200).json({message : "Deleted", todo : deleted[0]});
});


app.listen(PORT, () => {
    console.log(`Server Running at http//localhost:${PORT}`);
});