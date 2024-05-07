const cors = require("cors");
require("./start/db"); // db connection
require("express-async-errors");

const express = require("express");
const error = require("./middleware/error");
const logger = require("./utils/logger");
const adminRouteHandler = require("./start/adminModule");
const teacherRouterHandler = require("./start/teacherModule");
const studentRouterHandler = require("./start/studentModule");

const app = express();

app.use(
   cors({
      origin: "*", // Allow requests from any origin
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allow the specified methods
      credentials: true, // Allow credentials (cookies, authorization headers, etc.)
   })
);
app.use(express.json());
adminRouteHandler(app);
teacherRouterHandler(app);
studentRouterHandler(app);

app.get("/", (req, res) => {
   // throw new Error("Some Error testing...");
   res.status(200).send("Server Running Successfully")
});

app.use(error);
app.listen(5000 || process.env.PORT, () => {
   logger.verbose("School Server Running (5000)");
});
