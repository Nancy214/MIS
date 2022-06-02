import express from 'express'
import {
  authUser
} from '../controller/userController.js'
import { admin, protect } from '../middleware/authMiddleware.js'
const router = express.Router()

//auth user and get token
router.post('/login', authUser)


export default router
