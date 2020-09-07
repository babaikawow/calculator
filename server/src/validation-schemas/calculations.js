const joi = require("joi");
const number = joi.number().precision(5);

exports.add = joi.object({
  a: number.required(),
  b: number.required(),
});

exports.sub = joi.object({
  a: number.required(),
  b: number.required(),
});

exports.mul = joi.object({
  a: number.required(),
  b: number.required(),
});

exports.div = joi.object({
  a: number.required(),
  b: number.invalid(0, -0).required(),
});

exports.mod = joi.object({
  a: number.required(),
  b: number.invalid(0).invalid(-0).required(),
});


