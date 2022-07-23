import 'express-async-errors'

/** express */
import express, { json } from 'express'

/** middlewares */
import errorMiddleware from '../middlewares/error-middleware'

/** cors */
import cors from 'cors'

/** setting server */
const app = express()
app.use(cors())
app.use(json())
app.use(errorMiddleware)

export default app