const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todo_controller');

router.get('/', todoController.getTodos);

module.exports = router;