import "dotenv/config";
import axios from "axios";
import firebaseAdmin from "../config/firebaseConfig.js";

const loginController = async (req, res) => {
  const { idToken, email, password } = req.body;
  const FIREBASE_WEB_API_KEY = process.env.FIREBASE_WEB_API_KEY;
  console.log("Login request received with:", { idToken, email, password });
  // If an idToken is provided, verify it using firebaseAdmin
  if (idToken) {
    try {
      await firebaseAdmin.auth().verifyIdToken(idToken);
      // Token is valid; respond with success (you may include additional user info if needed)
      return res.json({ message: "Token valid", idToken });
    } catch (error) {
      console.error("Error verifying token:", error);
      return res.status(400).json({ error: "Invalid token" });
    }
  }
  // Otherwise, use email/password to sign in via Firebase Auth REST API.
  else if (email && password) {
    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
          FIREBASE_WEB_API_KEY,
        {
          email,
          password,
          returnSecureToken: true,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const { idToken, refreshToken, expiresIn } = response.data;
      res.cookie("idToken", idToken, {
        sameSite: "Strict", // Prevents CSRF attacks
        maxAge: 60 * 60 * 1000, // 1 hour expiration
      });
      return res.json({ idToken, refreshToken, expiresIn });
    } catch (error) {
      console.error(
        "Error during sign in:",
        error.response?.data || error.message
      );
      return res.status(400).json({ error: "Invalid credentials" });
    }
  } else {
    return res.status(400).json({ error: "Missing credentials" });
  }
};

export default loginController;
