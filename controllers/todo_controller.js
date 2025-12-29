
let todos = [
    {
        id: 1, title : "Study Node.js", done :false
    },
    {
        id: 2, title : "Learn Express", done : false
    }
];

exports.getTodos = (req, res) => {
    res.json(todos);
};