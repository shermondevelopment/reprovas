/** repository */
import { findByEmail } from '../../repositorys/auth-repository'

/** error handle */
import { AppErrorResponse } from '../../utils/app-error-response'

/** bcrypt */
import bcrypt from 'bcrypt'

/** jsonwebtoken */
import jwt from 'jsonwebtoken'

const SigninService = async (email: string, password: string) => {
  const searchByUser = await findByEmail(email)

  if (!searchByUser) {
    return AppErrorResponse(401, 'email not registered')
  }

  if (!(await bcrypt.compare(password, searchByUser.password))) {
    return AppErrorResponse(401, 'incorrect password')
  }

  const token = jwt.sign({ id: searchByUser.id }, process.env.JWT_KEY as string)

  return token
}

export default SigninService
