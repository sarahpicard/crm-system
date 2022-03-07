import { Router } from 'express'
import * as todosCtrl from '../controllers/todos.js'

const router = Router()

// GET localhost:3000/todos/new
router.get('/new', todosCtrl.new)

export {
  router, 
}