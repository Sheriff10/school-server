const jwt = require("jsonwebtoken");
const User = require("../models/User");

const teacherAuth = async (req, res, next) => {
   const token = req.headers["teacher-token"]; // Assuming the token is in the headers

   if (!token) {
      return res.status(401).json({ error: "Token not provided" });
   }

   try {
      const decoded = jwt.verify(token, process.env.JWT_TEACHER_KEY);
      // req.student = decoded; // You can attach the decoded payload to the request for further use
      console.log(decode);

      const user = await User.findOne({ username: decoded });
      req.user = user;
      next();
   } catch (err) {
      res.status(401).json({ error: "Invalid token" });
   }
};

module.exports = teacherAuth;
