const app = require("../../app.js");

const PORT = process.env.PORT || 3500 || 0;

const listener = app.listen(PORT, () => {
  console.info(`Server starts at ${listener.address().port} port`);
});
