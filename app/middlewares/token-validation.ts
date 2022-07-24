import { Request, Response, NextFunction } from 'express'

/** jwt */
import { verify } from 'jsonwebtoken'

/** AppError */
import { AppErrorResponse } from '../utils/app-error-response'

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization as string

  if (!token) {
    return AppErrorResponse(401, 'providing a token')
  }

  if (token.split(' ')[0] !== 'Bearer') {
    return AppErrorResponse(401, 'badly formatted token')
  }

  try {
    const decode = verify(token.split(' ')[1], process.env.JWT_KEY as string)

    res.locals.user = decode

    next()
  } catch (error) {
    AppErrorResponse(401, 'invalid or expired token')
  }
}
