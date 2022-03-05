import { Router } from 'express'
import * as clientsCtrl from '../controllers/clients.js'

const router = Router()

// GET localhost:3000/clients
router.get('/', clientsCtrl.index)

// GET localhost:3000/clients/new
router.get('/new', clientsCtrl.new)

// GET localhost:3000/clients/:id
router.get('/:id', clientsCtrl.show)

// GET localhost:3000/clients/:id/edit
router.get('/:id/edit', clientsCtrl.edit)

// POST localhost:3000/clients
router.post('/', clientsCtrl.create)

// POST localhost:3000/clients/:id/conversations
router.post('/:id/conversations', clientsCtrl.createConversation)

// PUT localhost:3000/clients/:id
router.put('/:id', clientsCtrl.update)

export {
  router,
}