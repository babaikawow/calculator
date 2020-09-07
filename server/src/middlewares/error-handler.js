const { MainError, InternalServerError } = require("../errors/");
const Logger = require("../utils/logger.js");
function errorHandler(err, req, res, next) {
  let responseError = err;
  Logger.error(err.stack);

  if (!(err instanceof MainError)) {
    responseError = new InternalServerError();
  }

  return res.status(responseError.status).json({
    message: responseError.message,
    status: responseError.status,
    paramMap: responseError.paramMap,
    code: responseError.code,
  });
}

module.exports = errorHandler;
