import { Request, Response, NextFunction } from 'express'

import { ObjectSchema } from 'joi'
import { AppErrorResponse } from '../utils/app-error-response'

export default (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false })
    if (error) {
      AppErrorResponse(422, error.message)
    }
    next()
  }
}
