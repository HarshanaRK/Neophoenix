import admin from "firebase-admin";
import fs from "fs/promises";
import "dotenv/config";

let firebaseAdmin = null;

async function initializeFirebase() {
  try {
    const serviceAccountPath = process.env.FIREBASE_CREDENTIALS;

    if (!serviceAccountPath) {
      console.warn(
        "⚠️ Firebase credentials path not set in .env. Push notifications will not be available."
      );
      return null;
    }

    const serviceAccountJson = await fs.readFile(serviceAccountPath, "utf8");
    const serviceAccount = JSON.parse(serviceAccountJson);

    firebaseAdmin = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

    console.log("✅ Firebase initialized successfully.");
    return firebaseAdmin;
  } catch (error) {
    console.error("❌ Error initializing Firebase:", error.message);
    return null;
  }
}

const firebaseInstance = await initializeFirebase();

export default firebaseInstance;
