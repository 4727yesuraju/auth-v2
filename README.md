# 🚀 MERN Authentication System (JWT + OAuth + MFA)

A **production-ready authentication system** built using the MERN stack with modern security practices like JWT (access + refresh tokens), HTTP-only cookies, Google OAuth, and Multi-Factor Authentication (MFA).

---

## 🧠 Why This Project?

Most basic auth tutorials stop at simple JWT login.  
This project goes beyond that and demonstrates **real-world authentication architecture** used in scalable production systems.

It is ideal for:
- 🎯 MERN stack mastery
- 🎯 System design interview preparation
- 🎯 Building production-grade backend skills

---

## ✨ Features

### 🔐 Authentication System
- User registration & login
- Secure password hashing using bcrypt
- JWT-based authentication system

### 🔁 Token System
- Access Token (short-lived)
- Refresh Token (long-lived)
- Token rotation & renewal
- Secure logout with token invalidation

### 🍪 Secure Cookie Handling
- HTTP-only cookies (prevents XSS attacks)
- Secure + SameSite cookie configuration
- Refresh token stored safely in cookies

### 🌐 OAuth Login
- Google OAuth integration
- One-click login experience
- Automatic account linking

### 📲 Multi-Factor Authentication (MFA)
- OTP (Email/SMS) or TOTP (Authenticator apps)
- Optional per-user MFA activation
- MFA verification during login flow

### 🛡️ Security Enhancements
- Input validation
- Rate limiting (brute-force protection)
- Helmet security headers
- CSRF protection (where applicable)

---

## 🏗️ Tech Stack

### Frontend
- React.js
- Axios
- Context API / Redux (optional)

### Backend
- Node.js
- Express.js

### Database
- MongoDB + Mongoose

### Authentication & Security
- JWT (jsonwebtoken)
- bcrypt
- cookie-parser
- OAuth 2.0 (Google)
- speakeasy / otplib (MFA)

---

## 🔄 Authentication Flow

### 1️⃣ Login Flow
- User logs in using email/password or Google OAuth
- Server issues:
  - Access Token (short expiry)
  - Refresh Token (stored in HTTP-only cookie)

---

### 2️⃣ Access Protected Routes
- Client sends Access Token in request headers
- Backend validates JWT before granting access

---

### 3️⃣ Token Refresh Flow
- When Access Token expires:
  - Client calls `/auth/refresh`
  - Server verifies Refresh Token (cookie)
  - Issues a new Access Token

---

### 4️⃣ Logout Flow
- Refresh token is cleared/invalidated
- Cookies are removed
- Session is terminated

---

### 5️⃣ MFA Flow (Optional)
- After login, MFA challenge is triggered
- User verifies OTP/TOTP
- Access granted only after successful verification

---

## 📂 Project Structure

```
mern-auth-system/
│
├── client/                 # React frontend
│   ├── components/
│   ├── pages/
│   └── context/
│
├── server/                 # Express backend
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

---

## 🔐 Environment Variables

```
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
MONGO_URI=your_mongodb_connection_string

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

COOKIE_SECRET=your_cookie_secret
```

---

## ⚙️ Setup Instructions

```bash
# 1. Clone repository
git clone https://github.com/your-username/mern-auth-system.git

# 2. Install backend dependencies
cd server
npm install

# 3. Install frontend dependencies
cd ../client
npm install

# 4. Run backend server
cd server
npm run dev

# 5. Run frontend
cd client
npm start
```

---

## 📡 API Endpoints

| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| POST   | /auth/register      | Register new user       |
| POST   | /auth/login         | Login user              |
| POST   | /auth/refresh       | Refresh access token    |
| POST   | /auth/logout        | Logout user             |
| GET    | /auth/google        | Google OAuth login      |
| POST   | /auth/mfa/verify    | Verify MFA OTP/TOTP     |

---

## 📈 Future Improvements

- Role-Based Access Control (RBAC)
- Session/device management
- Push-based MFA authentication
- Advanced audit logging system
- Email verification system

---

## 🏆 Key Learnings

- JWT authentication architecture
- Secure cookie-based authentication
- OAuth 2.0 integration flow
- MFA implementation in real systems
- Scalable backend authentication design

---

## 🤝 Contributions

Contributions are welcome!  
Feel free to open issues or submit pull requests.

---

## 📄 License

This project is licensed under the MIT License.
