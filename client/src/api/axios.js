import axios from "axios";

// ─────────────────────────────────────────
// COOKIE HELPER FUNCTIONS
// Browsers store cookies as one long string: "key=value; key2=value2"
// These 3 functions make it easy to get, set, and delete one cookie
// ─────────────────────────────────────────

// SET a cookie
// days = how long it lives (default 1 day)
const setCookie = (name, value, days = 1) => {
    const expires = new Date();
    expires.setDate(expires.getDate() + days); // Set expiry date
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
    //                                          path=/ means available on all pages
};

// GET a cookie by name
const getCookie = (name) => {
    // Split the cookie string into individual "key=value" pairs
    const cookies = document.cookie.split("; ");

    // Find the one that starts with our cookie name
    const found = cookies.find((c) => c.startsWith(`${name}=`));

    // Return just the value part, or null if not found
    return found ? found.split("=")[1] : null;
};

// REMOVE a cookie by setting expiry to the past
const removeCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};

// ─────────────────────────────────────────
// AXIOS INSTANCE
// ─────────────────────────────────────────
const API = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true, // Sends httpOnly refreshToken cookie automatically
});

// ─────────────────────────────────────────
// REQUEST INTERCEPTOR
// Reads accessToken from cookie and attaches it to every request
// ─────────────────────────────────────────
API.interceptors.request.use((config) => {
    const token = getCookie("accessToken"); // Read from cookie

    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
});

// ─────────────────────────────────────────
// RESPONSE INTERCEPTOR
// If 401 → silently refresh token → retry original request
// ─────────────────────────────────────────
API.interceptors.response.use(
    (response) => response, // Success: pass through

    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const res = await API.get("/auth/refresh");

                const newToken = res.data.accessToken;

                // Save new token as a cookie (expires in 1 day)
                setCookie("accessToken", newToken, 1);

                // Update the retry request header
                originalRequest.headers["Authorization"] = `Bearer ${newToken}`;

                return API(originalRequest); // Retry the original request
            } catch (refreshError) {
                // Both tokens expired → force logout
                removeCookie("accessToken");
                window.location.href = "/login";
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

// Export helpers too — needed in AuthContext for login/logout
export { setCookie, getCookie, removeCookie };
export default API;
