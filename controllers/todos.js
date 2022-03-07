import { Todo } from '../models/todo.js'

function newTodo(req, res) {
  Todo.find({}, function(err, todos) {
    res.render('todos/new', {
      title: 'To-dos',
      todos,
    })
  })
}

function create(req, res) {
  Todo.create(req.body, function(err, todo) {
    res.redirect('/todos/new')
  })
}

function deleteTodo(req, res) {
  Todo.findByIdAndDelete(req.params.id, function(err, todo) {
    res.redirect('/todos/new')
  })
}

export {
  newTodo as new,
  create,
  deleteTodo as delete,
}