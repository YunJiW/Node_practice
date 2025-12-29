const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todo_controller');

router.get('/', todoController.getTodos);
router.post('/', todoController.createTodo);

module.exports = router;