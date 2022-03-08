import { Todo } from '../models/todo.js'


function newTodo(req, res) {
  Todo.find({ owner: req.user.profile._id}).then(todos => {
    Todo.findById(req.user.profile._id)
    .then(self => {
      res.render('todos/new', {
        todos, 
        self, 
        title: 'To-Dos'
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/todos/new')
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
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