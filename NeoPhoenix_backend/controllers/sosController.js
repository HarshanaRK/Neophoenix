import { twilioClient } from "../config/twilioConfig.js";
import "dotenv/config";
import { isValidPhoneNumber } from "../utils/phoneUtils.js";
import { formatEmergencyMessage } from "../utils/messageUtils.js";
import firebaseAdmin from "../config/firebaseConfig.js";

export const sendSOS = async (req, res) => {
  const { userData, location, message, priority } = req.body;

  if (
    userData === undefined ||
    location === undefined ||
    message === undefined ||
    priority === undefined
  ) {
    console.log(userData);
    console.log(location);
    console.log(message);
    console.log(priority);
    return res.status(400).json({
      success: false,
      error: "Missing required fields in the request body",
    });
  }
  console.log("User Data:", userData);

  if (
    !isValidPhoneNumber(userData.mobile) ||
    !isValidPhoneNumber(userData.emergencyContact)
  ) {
    return res.status(400).json({
      success: false,
      error:
        "Invalid phone number format. Please use E.164 format (e.g., +919876543210).",
    });
  }
  console.log("Location:", location);

  try {
    console.log("Sending SOS...");
    const fullMessage = formatEmergencyMessage(userData, message, location);
    // Store the SOS data in Firestore
    const db = firebaseAdmin.firestore();
    await db.collection("sosMessages").add({
      userData,
      location,
      message,
      timestamp: new Date(),
      priority,
    });

    console.log("Firestore: SOS data stored successfully.");
    // Send SMS via Twilio
    const response = await twilioClient.messages.create({
      body: fullMessage,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.VERIFIED_NUMBERS,
    });
    console.log("SMS Sent:", response.sid);

    res.json({ success: true, message: "SOS Sent Successfully!" });
  } catch (error) {
    console.error("Twilio Error:", error);
    const errorMessage =
      error.code === 21211
        ? "Invalid emergency contact number. Please update your profile with a valid phone number in E.164 format."
        : "Failed to send SOS. Please try again.";
    res.status(500).json({ success: false, error: errorMessage });
  }
};
