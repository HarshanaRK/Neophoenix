import express from "express";
import firebaseAdmin from "../config/firebaseConfig.js";

const router = express.Router();

router.post("/broadcast", async (req, res) => {
  try {
    const db = firebaseAdmin.firestore();
    const snapshot = await db.collection("fcmTokens").get();

    const tokens = snapshot.docs.map((doc) => doc.data().token);
    if (tokens.length === 0) {
      return res.status(400).json({ error: "No devices registered" });
    }

    const message = {
      notification: {
        title: "🚀 Broadcast Message",
        body: "Hello, this is a test push notification!",
      },
      tokens,
    };

    const response = await firebaseAdmin
      .messaging()
      .sendEachForMulticast(message);
    res
      .status(200)
      .json({ success: `Sent to ${response.successCount} devices` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
