const jwt = require("jsonwebtoken");
require("dotenv").config();

class Token {
   // generate student token for authorization
   studentToken = (data) => {
      console.log("Student called");
      const token = jwt.sign(data, process.env.JWT_STUDENT_KEY);
      return token;
   };

   // generate teacher token for authorization
   teacherToken = (data) => {
      console.log("teacher called");
      const token = jwt.sign(data, process.env.JWT_TEACHER_KEY);
      return token;
   };

   // generate student token for authorization
   adminToken = (data) => {
      console.log("admin called");
      const token = jwt.sign(data, process.env.JWT_ADMIN_KEY);
      return token;
   };
}

module.exports = Token;
