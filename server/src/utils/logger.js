const winston = require("winston");
const path = require("path");

class Logger {
  constructor() {
    this.infoLogger = new winston.createLogger({
      transports: [
        new winston.transports.File({
          level: "info",
          filename: path.resolve(__dirname + "../../../logs/all-logs.log"),
          handleExceptions: true,
          json: true,
          maxsize: 5242880,
          maxFiles: 5,
          colorize: false,
        }),
        new winston.transports.Console({
          level: "debug",
          handleExceptions: true,
          json: false,
          colorize: true,
        }),
      ],
      exitOnError: false,
    });
    this.errorLogger = new winston.createLogger({
      transports: [
        new winston.transports.File({
          level: "info",
          filename: path.resolve(__dirname + "../../../logs/error-logs.log"),
          handleExceptions: true,
          json: true,
          maxsize: 5242880,
          maxFiles: 5,
          colorize: false,
        }),
        new winston.transports.Console({
          level: "debug",
          handleExceptions: true,
          json: false,
          colorize: true,
        }),
      ],
      exitOnError: false,
    });
  }

  /**
   * error - log error into error log
   *
   * @param message {string}
   * @return {void}
   */
  error(message) {
    this.errorLogger.error(message);
  }

  /**
   * info - log information into info log
   *
   * @param message {string}
   * @return {void}
   */
  info(message) {
    this.infoLogger.info(message);
  }
}

module.exports = new Logger();
