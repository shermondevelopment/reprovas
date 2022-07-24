import { Router } from 'express'


const routers = Router()

import authRouter from './auth-router'
import testRouter from './test-router'

routers.use(authRouter)
routers.use(testRouter)

export default routers