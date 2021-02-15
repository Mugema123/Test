import Joi from '@hapi/joi';

export const signup = Joi.object().keys({
  firstname: Joi.string().min(5).max(15).required(),
  lastname: Joi.string().min(5).max(15).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(7).max(10).required(),
  password: Joi.string().min(8).max(15).required(),
  password2: Joi.any().valid(Joi.ref('password')).required().label(' passwords')
  .options({ messages: { 'any.only': '{{#label}} do not match'} })
});

export const validationError = (req, res, next) => {
  const { error } = signup.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: 400,
      message: error.details[0].message.replace(/"/g, ''),
    });
  }
  next();
};
