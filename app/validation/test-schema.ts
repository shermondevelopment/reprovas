import * as Joi from 'joi'

export const testsSchema = Joi.object({
  name: Joi.string().required(),
  uri: Joi.string().uri().required(),
  category_id: Joi.string().required(),
  teacher_discipline_id: Joi.string().required()
});