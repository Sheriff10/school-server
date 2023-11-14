require("./start/db"); // db connection
const express = require("express");
const logger = require("./utils/logger");

const app = express();

app.use(express.json());

app.listen(5000 || process.env.PORT, () => {
   logger.error("School Server Running (5000)");
});
