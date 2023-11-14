const mongoose = require("mongoose");
require("dotenv").config();

mongoose
   .connect(process.env.MONGODB_URI_DEV)
   .then(() => console.log("Database connected successfully"))
   .catch((error) => console.log(`Database Connection Error: ${error}`));
