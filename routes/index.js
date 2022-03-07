import { Router } from 'express'
import * as clientsCtrl from '../controllers/clients.js'

const router = Router()

// GET localhost:3000/
router.get('/', clientsCtrl.showRecentConversations)

router.get('/', function (req, res) {
  res.render('index', { title: 'Home Page', user: req.user ? req.user : null })
})


export {
  router,
}
