const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const Logger = require("./src/utils/logger.js");

require("dotenv").config({ path: __dirname + "/.env" });

const routes = require("./src/routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  require("morgan")("combined", {
    stream: {
      write: function (message, encoding) {
        Logger.info(message);
      },
    },
  })
);
Logger.error("lol");
Logger.error(new Error("lol"));
app.use("/static", express.static(path.join(__dirname, '../client/build/static/')));
app.use("/", routes);
app.use(require("./src/middlewares/error-handler.js"));
module.exports = app;
