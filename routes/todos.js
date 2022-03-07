import { Router } from 'express'
import * as todosCtrl from '../controllers/todos.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/todos/new
router.get('/new', isLoggedIn, todosCtrl.new)

// POST localhost:3000/todos/new
router.post('/', isLoggedIn, todosCtrl.create)

// DELETE localhost:3000/todos/:id
router.delete('/:id', isLoggedIn, todosCtrl.delete)

export {
  router, 
}