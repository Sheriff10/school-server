const newStudent = require("../routes/admin/userManagement/createStudent");
const login = require("../routes/admin/Login.ts");
const deleteUser = require("../routes/admin/userManagement/deleteUser");

const adminRouteHandler = (app) => {
   app.use("/admin/auth", login);
   app.use("/admin/create-student", newStudent);
   app.use("/admin/delete", deleteUser);
};

module.exports = adminRouteHandler;
