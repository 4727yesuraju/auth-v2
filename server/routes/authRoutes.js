const express = require("express");
const router = express.Router();

// Import the controller functions
const { register, login, refresh } = require("../controllers/authController");

// Define routes
// When a POST request hits /auth/register → call the register function
router.post("/register", register);

// When a POST request hits /auth/login → call the login function
router.post("/login", login);

router.get("/refresh", refresh)

module.exports = router;
