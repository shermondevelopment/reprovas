/** express */
import express, { json } from 'express'

/** cors */
import cors from 'cors'

/** setting server */
const app = express()
app.use(cors())
app.use(json())

export default app