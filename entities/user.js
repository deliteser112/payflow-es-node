const Joi = require('@hapi/joi')

const userSchema = Joi.object({
  userName:  Joi.string().trim().min(1).max(100).required(),
  externalId:  Joi.string().trim().min(1).max(100).optional(),
  externalSource: Joi.string().trim().valid('bitbucket', 'github', 'payflow').default('payflow'),
  picture: Joi.string().trim().optional(),
  email: Joi.string().trim().email().max(100).optional(),
})

module.exports = userSchema