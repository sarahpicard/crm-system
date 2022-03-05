import { Router } from 'express'
import * as clientsCtrl from '../controllers/clients.js'

const router = Router()

// GET localhost:3000/clients
router.get('/', clientsCtrl.index)

// GET localhost:3000/clients/new
router.get('/new', clientsCtrl.new)

export {
  router,
}