const login = require("../routes/admin/Login");
const stats = require("../routes/admin/userManagement/adminStats");
const allStudents = require("../routes/admin/userManagement/getStudent");
const allTeachers = require("../routes/admin/userManagement/getTeacher");
const getStudentData = require("../routes/admin/userManagement/getStudentData");
const getTeacherData = require("../routes/admin/userManagement/getTeacherData");
const ongoingClasses = require("../routes/admin/contentManagement/ongoingClass");
const updateClass = require("../routes/admin/contentManagement/updateClass");
const newStudent = require("../routes/admin/userManagement/createStudent");
const newAdmin = require("../routes/admin/userManagement/createNewAdmin");
const newTeacher = require("../routes/admin/userManagement/createTeacher");
const deleteUser = require("../routes/admin/userManagement/deleteUser");
const markAttendance = require("../routes/admin/userManagement/markAttendance");
const updateUser = require("../routes/admin/userManagement/updateUserData");
const getClass = require("../routes/admin/contentManagement/getClasses");
const createClass = require("../routes/admin/contentManagement/createNewClass");
const getAnnouncments = require("../routes/admin/contentManagement/getAnnouncements");
const createContent = require("../routes/admin/contentManagement/createNewContent");

// calender
const createCalender = require("../routes/admin/schoolCalender/createCalender");
const updateCalender = require("../routes/admin/schoolCalender/updateCalender");
const deleteCalender = require("../routes/admin/schoolCalender/deleteCalender");
const getCalendar = require("../routes/admin/getCalendar");

// Student
const getGradeStudent = require("../routes/admin/gradeManagement/getGradeStudent");
const newStudentGrade = require("../routes/admin/gradeManagement/newStudentGrade");
const getGrades = require("../routes/admin/gradeManagement/getGrades");

const adminRouteHandler = (app) => {
   app.use("/admin/auth", login);
   app.use("/admin/stats", stats);
   app.use("/admin/all-students", allStudents);
   app.use("/admin/all-teachers", allTeachers);
   app.use("/admin/get-student", getStudentData);
   app.use("/admin/get-teacher", getTeacherData);
   app.use("/admin/ongoing-class", ongoingClasses);
   app.use("/admin/update-class", updateClass);
   app.use("/admin/create-student", newStudent);
   app.use("/admin/create-admin", newAdmin);
   app.use("/admin/create-teacher", newTeacher);
   app.use("/admin/", updateUser);
   app.use("/admin/delete", deleteUser);
   app.use("/admin/get-classes", getClass);
   app.use("/admin/create-class", createClass);
   app.use("/admin/create-content", createContent);
   app.use("/admin/get-announcement", getAnnouncments);
   app.use("/admin/mark-attendance", markAttendance);

   // Calender
   app.use("/admin/create-calender", createCalender);
   app.use("/admin/update-calender", updateCalender);
   app.use("/admin/delete-calender", deleteCalender);
   app.use("/get/calender", getCalendar);

   // Grade
   app.use("/admin/grade/students", getGradeStudent);
   app.use("/admin/grade/create", newStudentGrade);
   app.use("/admin/get-grades", getGrades);
};

module.exports = adminRouteHandler;
