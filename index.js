const cors = require('cors');
require("./start/db"); // db connection
require("express-async-errors");

const express = require("express");
const error = require("./middleware/error");
const logger = require("./utils/logger");
const adminRouteHandler = require("./start/adminModule");
const teacherRouterHandler = require('./start/teacherModule');
const studentRouterHandler = require('./start/studentModule');

const app = express();

app.use(cors())
app.use(express.json());
adminRouteHandler(app);
teacherRouterHandler(app);
studentRouterHandler(app)

app.get("/", (req, res) => {
   throw new Error("Some Error testing...");
});

app.use(error);
app.listen(5000 || process.env.PORT, () => {
   logger.verbose("School Server Running (5000)");
});
