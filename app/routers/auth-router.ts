import { Router } from 'express'

/** controller */
import SigninController from '../controllers/signin-controller'
import SignupController from '../controllers/signup-controller'


/** middleware */
import validationSchemaMiddleware from '../middlewares/validation-schema-middleware'

/** validation schema */
import { signinSchema, signupSchema } from '../validation/auth-schema'


const authRouter = Router()


authRouter.post('/signin', validationSchemaMiddleware(signinSchema),  SigninController)

authRouter.post('/signup', validationSchemaMiddleware(signupSchema), SignupController)

export default authRouter