const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const BookValidations = {
  createOrUpdateBookValidator: {
    body: Joi.object({
      name: Joi.string().required(),
      author: Joi.objectId().required(),
      numberOfPages: Joi.number().required(),
      summary: Joi.string().required(),
    }),
  },
};

module.exports = BookValidations;
