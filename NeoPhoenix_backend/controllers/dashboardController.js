import firebaseAdmin from "../config/firebaseConfig.js";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dashboardController = async (req, res) => {
  try {
    const db = firebaseAdmin.firestore();
    // Query the "sosMessages" collection, sorting by priority (ascending)
    // and then timestamp (descending for newer at top).
    const snapshot = await db
      .collection("sosMessages")
      .orderBy("priority", "asc")
      .orderBy("timestamp", "desc")
      .get();

    // Map Firestore documents to an array of objects with required fields.
    const notifications = snapshot.docs.map((doc) => {
      const data = doc.data();
      // Convert Firestore timestamp to a JavaScript Date string.
      const ts =
        data.timestamp && data.timestamp.seconds
          ? new Date(data.timestamp.seconds * 1000).toLocaleString()
          : "N/A";
      return {
        id: doc.id,
        priority: data.priority,
        message: data.message,
        location: data.location, // expects { latitude, longitude }
        name: data.userData.name,
        mobile: data.userData.mobile,
        emergencyContact: data.userData.emergencyContact,
        timestamp: ts,
      };
    });

    // Convert the notifications array to JSON.
    const notificationsData = JSON.stringify(notifications);

    // Read the external HTML file.
    const dashboardHtmlPath = path.join(__dirname, "../static/dashboard.html");
    let html = await fs.readFile(dashboardHtmlPath, "utf8");

    // Replace the placeholder {{NOTIFICATIONS_DATA}} in dashboard.html with the JSON data.
    html = html.replace("{NOTIFICATIONS_DATA}", notificationsData);

    res.send(html);
  } catch (error) {
    console.error("Error retrieving notifications data:", error);
    res.status(500).send("Error retrieving notifications data.");
  }
};

export default dashboardController;
