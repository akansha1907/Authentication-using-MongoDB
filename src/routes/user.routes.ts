import express from 'express'
import { createUser, loginUser } from '../controller/user.contoller'
const userRoutes = express.Router()
userRoutes.route("/create").post(createUser)
userRoutes.route("/login").post(loginUser)
export default userRoutes