const Joi = require("joi");

function createCourseValidation(req, res, next) {
  // create schema object
  const schema = Joi.object({
    // title: Joi.string().required(),
    // description: Joi.string().required(),
  });

  validateRequest(req, res, next, schema);
}

function validateRequest(req, res, next, schema) {
  const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    // stripUnknown: true, // remove unknown props
  };
  const { error, value } = schema.validate(req.body, options);
  if (error) {
    const errs = `Validation error: ${error.details
      .map((x) => x.message)
      .join(", ")}`;
    console.log(errs);
    res.status(400).send(errs);
  } else {
    req.body = value;
    next();
  }
}
module.exports = { createCourseValidation };
