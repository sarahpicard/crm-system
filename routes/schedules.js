import { Router } from 'express'
import * as schedulesCtrl from '../controllers/schedules.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/schedules
router.get('/', isLoggedIn, schedulesCtrl.index)


export {
  router,
}