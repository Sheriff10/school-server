const stats = require('../routes/student/stats')
const getClasses = require('../routes/student/getClasses')
const getAssignments = require('../routes/student/getAssignments')
const getAnnouncements = require('../routes/student/getAnnouncements')
const createNewContent = require('../routes/student/createNewContent')
const getMessages = require('../routes/student/getMessages')

const studentRouterHandler = (app) => {
    app.use('/student/stats', stats)
    app.use('/student/get-classes', getClasses)
    app.use('/student/get-assignments', getAssignments)
    app.use('/student/get-announcement', getAnnouncements)
    app.use('/student/create-content', createNewContent)
    app.use('/student/get-messages', getMessages)
}

module.exports = studentRouterHandler