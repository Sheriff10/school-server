const logger = require("../utils/logger")

const error = (err, req, res, next) => {
    logger.error(err)
    res.status(500).send({error: "Internal Server Error"})
}

module.exports = error