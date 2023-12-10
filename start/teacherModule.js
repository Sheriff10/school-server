const createAssignment = require("../routes/teacher/classManagement/createAssignment");
const getAssignments = require("../routes/teacher/classManagement/getAssignments");
const updateClass = require("../routes/teacher/classManagement/updateClass");
const getStudent = require("../routes/teacher/infos/getStudent");
const getClasses = require("../routes/teacher/infos/getClasses");
const stats = require("../routes/teacher/infos/stats");
const getStudentData = require("../routes/teacher/infos/getStudentData");
const markAttendance = require("../routes/teacher/classManagement/markAttendance");



const teacherRouterHandler = (app) => {
   app.use("/teacher/stats", stats);
   app.use("/teacher/all-students", getStudent);
   app.use("/teacher/get-student", getStudentData);
   app.use("/teacher/get-classes", getClasses);
   app.use("/teacher/create-assignment", createAssignment);
   app.use("/teacher/get-assignment", getAssignments);
   app.use("/teacher/mark-attendance", markAttendance);

   app.use("/teacher/update-class", updateClass);
};

module.exports = teacherRouterHandler;
