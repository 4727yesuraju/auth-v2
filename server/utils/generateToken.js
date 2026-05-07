const jwt = require("jsonwebtoken");
// Creates a short-lived Access Token (15 minutes)
const generateAccessToken = (user) => {
    return jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_ACCESS_SECRET,
        { expiresIn: "15m" }
    );
};
// Creates a long-lived Refresh Token (7 days)
const generateRefreshToken = (user) => {
    return jwt.sign(
        { userId: user._id },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: "7d" }
    );
};

module.exports = { generateAccessToken, generateRefreshToken };