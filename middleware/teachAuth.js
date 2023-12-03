const jwt = require("jsonwebtoken");
const User = require("../models/User");

const teacherAuth = async (req, res, next) => {
   const token = req.header("teacher-token"); // Assuming the token is in the headers
   console.log(token)

   if (!token) {
      return res.status(401).json({ error: "Token not provided" });
   }

   try {
      const decoded = jwt.verify(token, process.env.JWT_TEACHER_KEY);
      // req.student = decoded; // You can attach the decoded payload to the request for further use
      console.log(decoded);

      const user = await User.findOne({ username: decoded });
      req.user = user;
      next();
   } catch (err) {
      res.status(401).json({ error: "Invalid token" });
   }
};

module.exports = teacherAuth;
