const Config = require("../config.js");
const joi = require("joi");
const validationSchemas = require("../validation-schemas/calculations.js");
const Errors = require("../errors/");
const CommonHelper = require("../helpers/common.js");
const CalculatorUtil = require("../utils/calculator.js");
const Calculator = new CalculatorUtil({
  fractLimit: Config.FRACTIAL_PART_LIMIT_NUMBERS,
});

exports.add = async (dtoIn) => {
  const { a, b } = CommonHelper.validate(validationSchemas.add, dtoIn);

  return Calculator.addition(a, b);
};

exports.sub = async (dtoIn) => {
  const { a, b } = CommonHelper.validate(validationSchemas.sub, dtoIn);

  return Calculator.subtraction(a, b);
};

exports.div = async (dtoIn) => {
  const { a, b } = CommonHelper.validate(validationSchemas.div, dtoIn);

  return Calculator.division(a, b);
};

exports.mod = async (dtoIn) => {
  const { a, b } = CommonHelper.validate(validationSchemas.mod, dtoIn);

  return Calculator.modulo(a, b);
};

exports.mul = async (dtoIn) => {
  const { a, b } = CommonHelper.validate(validationSchemas.mul, dtoIn);

  return Calculator.multiplication(a, b);
};
