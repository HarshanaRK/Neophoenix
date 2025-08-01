import firebaseAdmin from "../config/firebaseConfig.js";

const publicPaths = ["/api/sos", "/api/auth", "/api/login"];

const authMiddleware = async (req, res, next) => {
  try {
    // If the request URL is a public path, skip authentication.
    if (publicPaths.some((p) => req.originalUrl.startsWith(p))) {
      return next();
    }

    console.log("Authenticating User...");

    // Try to get token from cookies.
    const idToken = req.cookies?.idToken;
    if (!idToken) {
      return res.redirect("/api/auth");
    }
    console.log("Token Found. Verifying...");

    try {
      const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken);
      req.user = decodedToken;
      return next();
    } catch (error) {
      console.error("Error verifying token:", error);
      return res.redirect("/api/auth");
    }
  } catch (error) {
    console.error("Authentication middleware error:", error);
    return res.status(500).send("Internal Server Error");
  }
};

export default authMiddleware;
