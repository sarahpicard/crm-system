import { Router } from 'express'
import * as clientsCtrl from '../controllers/clients.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/clients
router.get('/', isLoggedIn, clientsCtrl.index)

// GET localhost:3000/clients/new
router.get('/new', isLoggedIn, clientsCtrl.new)

// GET localhost:3000/clients/:id
router.get('/:id', isLoggedIn, clientsCtrl.show)

// GET localhost:3000/clients/:id/edit
router.get('/:id/edit', isLoggedIn, clientsCtrl.edit)

// POST localhost:3000/clients
router.post('/', isLoggedIn, clientsCtrl.create)

// POST localhost:3000/clients/:id/conversations
router.post('/:id/conversations', isLoggedIn, clientsCtrl.createConversation)

// DELETE localhost:3000/clients/:id
router.delete('/:id', isLoggedIn, clientsCtrl.delete)

// PUT localhost:3000/clients/:id
router.put('/:id', isLoggedIn, clientsCtrl.update)

export {
  router,
}