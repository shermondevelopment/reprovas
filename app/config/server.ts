/** express */
import express from 'express'

/** cors */
import cors from 'cors'

/** setting server */
const app = express()
app.use(cors())

export default app