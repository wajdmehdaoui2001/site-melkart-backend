const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT;

require("./startup/routes")(app);

const server = app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = server;
module.exports.app = app;
