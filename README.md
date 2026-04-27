🚀 MERN Auth System (JWT + OAuth + MFA)

A production-grade authentication system built with the MERN stack, implementing modern security best practices:

🔐 JWT Authentication (Access + Refresh Tokens)
🍪 HTTP-only Secure Cookies
🔑 OAuth Login (Google)
📲 Multi-Factor Authentication (OTP / TOTP)
♻️ Token Rotation & Revocation
🛡️ Secure Backend Architecture
🧠 Why This Project?

Most tutorials stop at basic JWT login. This project goes further and implements real-world authentication patterns used in scalable systems.

Designed for:

Learning production-level auth
Preparing for system design interviews
Serving as a starter boilerplate
✨ Features
🔐 Authentication
User signup & login
Password hashing (bcrypt)
JWT-based authentication
🔁 Token System
Short-lived Access Token
Long-lived Refresh Token
Token rotation on refresh
Logout with token invalidation
🍪 Secure Cookies
HTTP-only cookies (no XSS access)
Secure & SameSite configuration
Refresh token stored safely
🌐 OAuth Integration
Google OAuth login
Auto account linking
Fallback to email/password login
📲 Multi-Factor Authentication (MFA)
OTP (email/SMS) or TOTP (authenticator apps)
Enable/disable MFA per user
MFA verification during login
🛡️ Security Best Practices
Input validation
Rate limiting (prevent brute force)
CSRF protection
Helmet for secure headers
🏗️ Tech Stack
Frontend
React
Axios
Context API / Redux (optional)
Backend
Node.js
Express.js
Database
MongoDB + Mongoose
Auth & Security
jsonwebtoken (JWT)
bcrypt
cookie-parser
OAuth (Google)
speakeasy / otplib (for MFA)
🔄 Authentication Flow
1. Login
User logs in (email/password or OAuth)
Server returns:
Access Token (short-lived)
Refresh Token (HTTP-only cookie)
2. Access Protected Routes
Client sends Access Token in headers
Server verifies JWT
3. Token Refresh
When access token expires:
Client calls /refresh
Server validates refresh token (cookie)
Issues new access token
4. Logout
Refresh token invalidated (DB/blacklist)
Cookie cleared
5. MFA Flow (if enabled)
After login → OTP/TOTP required
Access granted only after verification
## 📂 Project Structure

```
mern-auth-system/
│
├── client/                 # React frontend
│   ├── components/
│   ├── pages/
│   └── context/
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── services/
│   └── utils/
│
├── .env
├── README.md
└── package.json
```
🔐 Environment Variables
JWT_ACCESS_SECRET=
JWT_REFRESH_SECRET=
MONGO_URI=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
COOKIE_SECRET=
⚙️ Setup Instructions
# Clone repo
git clone https://github.com/your-username/mern-auth-system.git

# Install dependencies
cd server && npm install
cd client && npm install

# Run backend
cd server
npm run dev

# Run frontend
cd client
npm start
🧪 API Endpoints (Sample)
Method	Endpoint	Description
POST	/auth/register	Register user
POST	/auth/login	Login user
POST	/auth/refresh	Refresh token
POST	/auth/logout	Logout user
GET	/auth/google	Google OAuth
POST	/auth/mfa/verify	Verify OTP/TOTP
📈 Future Improvements
🔑 Role-Based Access Control (RBAC)
📊 Login analytics & audit logs
🔔 Push-based MFA (instead of OTP)
🌍 Multi-device session management
🏆 Key Learnings
Stateless vs stateful authentication
Secure token storage strategies
OAuth integration in real systems
Implementing MFA in scalable apps
📌 Inspiration

Built following best practices inspired by modern authentication systems used by companies like Google and Auth0.

🤝 Contributing

Pull requests are welcome. For major changes, open an issue first.

📄 License

MIT
