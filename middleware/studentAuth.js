const jwt = require("jsonwebtoken");

const studentAuth = (req, res, next) => {
    const token = req.headers["student-token"]; // Assuming the token is in the headers

    if (!token) {
        return res.status(401).json({ error: "Token not provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_STUDENT_KEY);
        req.student = decoded; // You can attach the decoded payload to the request for further use
        next();
    } catch (err) {
        res.status(401).json({ error: "Invalid token" });
    }
};

module.exports = studentAuth;
