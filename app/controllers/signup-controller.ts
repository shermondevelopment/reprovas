import { Request, Response } from 'express'

/** service signup */
import SignupService from '../services/signup/signup-service'

/** signin controller */
const SignupController = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const token = await SignupService(email, password)

  res.status(201).json({ token })
}

export default SignupController
