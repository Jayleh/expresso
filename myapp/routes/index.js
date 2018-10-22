const express = require('express');
const router = express.Router();

const todos = ["get milk", "get butter", "learn Javascript"];

/* GET home page. */
router.get('/', function(req, res, next) {
  const content = {
    title: 'Todo List',
    todos: todos
  }
  res.render('index', content);
});

router.post('/todo', (req, res) => {
  todos.push(req.body.todo);
  res.json(req.body);
});

module.exports = router;
