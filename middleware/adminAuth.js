const jwt = require("jsonwebtoken");
const User = require("../models/User");
const adminAuth = async (req, res, next) => {
   const token = req.header("administrator-token"); // Assuming the token is in the headers

   if (!token) {
      return res.status(401).json({ error: "Token not provided" });
   }

   try {
      const decoded = jwt.verify(token, process.env.JWT_ADMIN_KEY);
      console.log(decoded)
      req.user = await User.findOne({username: decoded})
      next();
   } catch (err) {
      res.status(401).json({ error: "Invalid token" });
      console.log(err);
   }
};

module.exports = adminAuth;
