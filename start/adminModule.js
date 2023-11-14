const newStudent = require("../routes/admin/userManagement/createStudent");

const adminRouteHandler = (app) => {
   app.use("/admin/create-student", newStudent);
};

module.exports = adminRouteHandler;
