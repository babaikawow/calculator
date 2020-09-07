const path = require("path");
const routes = require("express").Router();
const calculationsController = require("../controllers/calculations");
const asyncHandler = require("express-async-handler");

routes.get(
  "/",
  asyncHandler((req, res, next) => {
    return res.sendFile(path.join(__dirname, '../../../client/build/index.html'));
  })
);

routes.post("/calculations/add", asyncHandler(calculationsController.add));

routes.post("/calculations/sub", asyncHandler(calculationsController.sub));

routes.post("/calculations/div", asyncHandler(calculationsController.div));

routes.post("/calculations/mod", asyncHandler(calculationsController.mod));

routes.post("/calculations/mul", asyncHandler(calculationsController.mul));

routes.all("*", (req, res) => {
  return res.status(404).end();
});

module.exports = routes;
