const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");

const connectDB = require("./utils/db");         // DB connection
const authRoutes = require("./routes/authRoutes"); // Auth routes

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// ─────────────────────────────────────────────
// MIDDLEWARE
// Middleware runs on EVERY request before it hits your routes
// ─────────────────────────────────────────────

// helmet() adds security-related HTTP headers automatically
app.use(helmet());

// express.json() lets your server read JSON from request body (req.body)
// Without this, req.body would be undefined
app.use(express.json());

// cookieParser() lets your server read cookies from requests
app.use(cookieParser());

// ─────────────────────────────────────────────
// ROUTES
// All auth routes will be prefixed with /auth
// e.g. /auth/register, /auth/login
// ─────────────────────────────────────────────
app.use("/auth", authRoutes);

// A simple test route to confirm server is running
app.get("/", (req, res) => {
  res.json({ message: "🚀 Server is running!" });
});

// ─────────────────────────────────────────────
// START SERVER
// ─────────────────────────────────────────────
const PORT = process.env.PORT || 5000;

// First connect to DB, then start listening for requests
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
