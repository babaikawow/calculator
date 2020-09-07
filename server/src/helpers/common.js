const joi = require("joi");
const Errors = require("../errors/");

class CommonHelper {
  /**
   * validate - validate data by using joi schema
   * @param schema {JoiSchema} - joi schema
   * @param data {object} - data that should be validated
   * @return {object} - sanitarized data
   */
  static validate(schema, data) {
    const validated = schema.validate(data, {
      stripUnknown: true,
      abortEarly: false,
    });

    if (validated.error) {
      throw new Errors.InvalidDtoIn(undefined, {
        paramMap: {
          details: validated.error.details,
        },
      });
    }

    return validated.value;
  }
}

module.exports = CommonHelper;
