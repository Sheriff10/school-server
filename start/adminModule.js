const login = require("../routes/admin/Login");
const newStudent = require("../routes/admin/userManagement/createStudent");
const newAdmin = require("../routes/admin/userManagement/createNewAdmin");
const newTeacher = require("../routes/admin/userManagement/createTeacher");
const deleteUser = require("../routes/admin/userManagement/deleteUser");
const updateUser = require("../routes/admin/userManagement/updateUserData");
const createClass = require("../routes/admin/contentManagement/createNewClass");
const createContent = require("../routes/admin/contentManagement/createNewContent");
// calender
const createCalender = require("../routes/admin/schoolCalender/createCalender");
const updateCalender = require("../routes/admin/schoolCalender/updateCalender");
const deleteCalender = require("../routes/admin/schoolCalender/deleteCalender");

const adminRouteHandler = (app) => {
   app.use("/admin/auth", login);
   app.use("/admin/create-student", newStudent);
   app.use("/admin/create-admin", newAdmin);
   app.use("/admin/create-teacher", newTeacher);
   app.use("/admin/", updateUser);
   app.use("/admin/delete", deleteUser);
   app.use("/admin/create-class", createClass);
   app.use("/admin/create-content", createContent);

   // Calender
   app.use("/admin/create-calender", createCalender);
   app.use("/admin/update-calender", updateCalender);
   app.use("/admin/delete-calender", deleteCalender);
};

module.exports = adminRouteHandler;
