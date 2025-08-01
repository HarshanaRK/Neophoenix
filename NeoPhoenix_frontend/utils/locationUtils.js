import * as Location from "expo-location";
import { Alert } from "react-native";

export const getLocation = async () => {
  console.log("[Location Utils] Requesting location permissions...");

  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    console.error("[Location Utils] Permission to access location was denied.");
    Alert.alert(
      "Permission Denied",
      "Permission to access location was denied. Please enable location permissions in your device settings."
    );
    return null;
  }

  console.log(
    "[Location Utils] Permission granted. Fetching current location..."
  );
  try {
    const location = await Location.getCurrentPositionAsync({});
    console.log("[Location Utils] Location obtained:", location.coords);
    return location.coords;
  } catch (error) {
    console.error("[Location Utils] Error retrieving location:", error.message);
    Alert.alert("Error", "Failed to retrieve location details.");
    return null;
  }
};
