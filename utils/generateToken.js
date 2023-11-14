const jwt = require("jsonwebtoken");
require("dotenv").config();

class Token {
   // generate student token for authorization
   studentToken = () => {
      const token = jwt.sign(data, process.env.JWT_STUDENT_KEY, {
         expiresIn: "300s",
      });
      return token;
   };

   // generate teacher token for authorization
   teacherToken = () => {
      const token = jwt.sign(data, process.env.JWT_TEACHER_KEY, {
         expiresIn: "300s",
      });
      return token;
   };

   // generate student token for authorization
   adminToken = () => {
      const token = jwt.sign(data, process.env.JWT_ADMIN_KEY, {
         expiresIn: "300s",
      });
      return token;
   };
}
