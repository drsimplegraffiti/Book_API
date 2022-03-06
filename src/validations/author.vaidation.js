const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const AuthorValidations = {
  createOrUpdateAuthorValidator: {
    body: Joi.object({
      name: Joi.string().required(),
      country: Joi.string().required(),
      age: Joi.number().required(),
      DOB: Joi.date().required(),
    }),
  },
};

module.exports = AuthorValidations;
