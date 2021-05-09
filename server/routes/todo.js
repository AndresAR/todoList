const express = require('express');
const TodoCtrl = require('../controllers/todo-ctrl');
const router = express.Router();

router.post('/todo', TodoCtrl.createTodo);

module.exports = router;