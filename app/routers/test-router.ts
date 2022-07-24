import { Router } from 'express'
import { NewTestController } from '../controllers/test-controller'
import tokenValidation from '../middlewares/token-validation'
import validationSchemaMiddleware from '../middlewares/validation-schema-middleware'
import { testsSchema } from '../validation/test-schema'

const testRouter = Router()


testRouter.post('/test', tokenValidation, validationSchemaMiddleware(testsSchema), NewTestController)

export default testRouter