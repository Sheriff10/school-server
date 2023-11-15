const newStudent = require("../routes/admin/userManagement/createStudent");
const login = require("../routes/admin/Login.ts");

const adminRouteHandler = (app) => {
   app.use("/admin/create-student", newStudent);
   app.use("/admin/auth", login);
};

module.exports = adminRouteHandler;
