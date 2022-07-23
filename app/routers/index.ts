import { Router } from 'express'


const routers = Router()

import authRouter from '../routers/auth-router'

routers.use(authRouter)

export default routers