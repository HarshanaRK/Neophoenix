import axios from "axios";
import CONFIG from "../config/config";
import { getLocation } from "./locationUtils";

export const sendSOS = async (userData) => {
  console.log("[SOS Utils] Initiating SOS process with userData:", userData);

  const location = await getLocation();
  if (!location) {
    console.error("[SOS Utils] Location retrieval failed.");
    throw new Error("Location not available");
  }
  console.log("[SOS Utils] Location obtained:", location);

  console.log(
    "[SOS Utils] Sending SOS request to:",
    CONFIG.apiBaseUrl + CONFIG.sosEndpoint
  );
  try {
    const response = await axios.post(CONFIG.apiBaseUrl + CONFIG.sosEndpoint, {
      userData,
      location,
      message: userData.message,
    });
    console.log(
      "[SOS Utils] SOS request sent successfully. Response:",
      response.data
    );
  } catch (error) {
    console.error("[SOS Utils] Error sending SOS request:", error);
    throw error;
  }
};
