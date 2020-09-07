const MainError = require("./main-error");

class InternalServerError extends MainError {
  constructor(message, params = {}) {
    super(message, params);
    this.status = 500;
    this.message = "Internal server error";
    this.code = "InternalServerError";
  }
}

module.exports = InternalServerError;
