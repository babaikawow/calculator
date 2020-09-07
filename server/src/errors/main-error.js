class MainError extends Error {
  constructor(message, params = {}) {
    super();
    this.message = message || "Internal server error";
    this.status = params.status || 500;
    this.paramMap = params.paramMap || {};
    this.code = params.code = "InternalServerError";
  }
}

module.exports = MainError;
