/** repository */
import { createUser, findByEmail } from '../repositorys/auth-repository'

/** error handle */
import { AppErrorResponse } from '../utils/app-error-response'

/** bcrypt */
import bcrypt from 'bcrypt'

/** jsonwebtoken */
import jwt from 'jsonwebtoken'

const SignupService = async (email: string, password: string) => {
  const searchByUser = await findByEmail(email)

  if (searchByUser) {
    return AppErrorResponse(401, 'e-mail already registered')
  }

  const addUser = await createUser(email, bcrypt.hashSync(password, 10))

  const token = jwt.sign({ id: addUser?.id }, process.env.JWT_KEY as string)

  return token
}

export default SignupService
