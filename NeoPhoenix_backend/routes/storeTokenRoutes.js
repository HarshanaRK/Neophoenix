import express from "express";
import firebaseAdmin from "../config/firebaseConfig.js";

const router = express.Router();

router.post("/store-token", async (req, res) => {
  const { userId, token } = req.body;
  if (!userId || !token) {
    return res.status(400).json({ error: "User ID and token are required" });
  }

  try {
    const db = firebaseAdmin.firestore();
    await db
      .collection("fcmTokens")
      .doc(userId)
      .set({ token }, { merge: true });

    res.status(200).json({ success: "Token stored successfully" });
  } catch (error) {
    console.error("❌ Error storing token:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
