import firebaseAdmin from "../config/firebaseConfig.js";

export async function sendBroadcastNotification(message) {
  if (!firebaseAdmin) {
    throw new Error("Firebase is not initialized.");
  }

  const notification = {
    notification: {
      title: "Broadcast Alert",
      body: message,
    },
    topic: "all",
  };

  return firebaseAdmin.messaging().send(notification);
}
