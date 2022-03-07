import { Todo } from '../models/todo.js'

function newTodo(req, res) {
  Todo.find({}, function(err, todos) {
    res.render('todos/new', {
      title: 'To-dos',
      todos,
    })
  })
}

export {
  newTodo as new,
}