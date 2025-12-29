const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo_routes');
const PORT = 3001;

app.use(express.json());

const cors = require('cors');
app.use(cors());


app.use('/todos',todoRoutes);

app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});