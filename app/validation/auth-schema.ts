import * as Joi from 'joi'

export const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  confirm_password: Joi.string().valid(Joi.ref('password'), '').required()
})

export const signinSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});