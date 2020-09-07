const MainError = require("./main-error");

class InvalidDtoIn extends MainError {
  constructor(message, params = {}) {
    super(message, params);
    this.status = 400;
    this.message = "Invalid dtoIn";
    this.code = "InvalidDtoIn";
  }
}

module.exports = InvalidDtoIn;
