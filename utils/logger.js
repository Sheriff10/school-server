const winston = require("winston");

const customMessageFormat = winston.format.printf(({ level, message }) => {
   return `[Shool-Server]: ${message}`;
});
const loggerColor = winston.format.combine(
   winston.format.colorize({ all: true }),
   customMessageFormat
);

const logger = winston.createLogger({
   level: "silly",
   format: loggerColor,
   transports: [
      new winston.transports.File({
         filename: "./error-logs/error.log",
         level: "error",
      }),
      new winston.transports.File({ filename: "./error-logs/info.log" }),
      new winston.transports.Console(),
   ],
});
module.exports = logger;
