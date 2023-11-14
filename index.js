require("./start/db"); // db connection
require("express-async-errors");

const express = require("express");
const error = require("./middleware/error");
const logger = require("./utils/logger");
const adminRouteHandler = require("./start/adminModule");

const app = express();

app.use(express.json());
adminRouteHandler(app);

app.get("/", (req, res) => {
   throw new Error("Some Error testing...");
});

app.use(error);
app.listen(5000 || process.env.PORT, () => {
   logger.verbose("School Server Running (5000)");
});
