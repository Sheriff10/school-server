const mongoose = require("mongoose");
const logger = require("../utils/logger");
require("dotenv").config();

mongoose
   .connect(process.env.MONGODB_URI_DEV)
   .then(() => console.log("Database connected successfully"))
   .catch((error) => logger.error(`Database Connection Error: ${error.message}`));
