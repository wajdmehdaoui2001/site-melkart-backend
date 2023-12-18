const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  partenariat: Joi.string().required(),
  message: Joi.string().required(),
});

module.exports = contactSchema;
