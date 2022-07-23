import { Router } from 'express'

/** controller */
import SigninController from '../controllers/signin-controller'

/** middleware */
import validationSchemaMiddleware from '../middlewares/validation-schema-middleware'

/** validation schema */
import { signinSchema } from '../validation/auth-schema'


const authRouter = Router()


authRouter.post('/signin', validationSchemaMiddleware(signinSchema),  SigninController)

export default authRouter