import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Navbar from "../components/Navbar";
import { isValidUserData } from "../utils/userDataUtils";
import { homeScreenStyles as styles } from "../styles/styles";
import { sendSOS } from "../utils/sosUtils";
import { Audio } from "expo-av";

// Import images
import MedicalIcon from "../assets/medical.png";
import FireIcon from "../assets/fire.png";
import ViolenceIcon from "../assets/violence.png";
import RescueIcon from "../assets/rescue.png"; // or change to .png if needed
import SOSBefore from "../assets/sosbefore.png";
import SOSAfter from "../assets/sosafter.png";

// Updated emergencyIcons mapping with correct key:
const emergencyIcons = {
  Rescue: RescueIcon,
  Medical: MedicalIcon,
  Fire: FireIcon,
  Violence: ViolenceIcon,
};

const emergencyData = [
  {
    label: "Rescue",
    icon: RescueIcon,
    priority: 1,
    message: "Women Safety - Immediate assistance required.",
  },
  {
    label: "Medical",
    icon: MedicalIcon,
    priority: 2,
    message: "Medical Emergency - Need urgent medical help.",
  },
  {
    label: "Fire",
    icon: FireIcon,
    priority: 3,
    message: "Fire Alert - Fire detected, need rescue support.",
  },
  {
    label: "Violence",
    icon: ViolenceIcon,
    priority: 4,
    message: "Violence Incident - Urgent security required.",
  },
];

export default function HomeScreen() {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [sosImage, setSosImage] = useState(SOSBefore);
  const [sosSize, setSosSize] = useState(styles.sosButtonSmall);
  const [sosTriggered, setSosTriggered] = useState(false);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("userData");
        if (storedData) {
          setUserData(JSON.parse(storedData));
        }
      } catch (error) {
        console.error("Error loading user data:", error);
      }
    };
    loadUserData();
  }, []);

  const sendSOSMessage = async (priority, message) => {
    try {
      await sendSOS({ ...userData, priority, message });
      Alert.alert("🚨 SOS Sent", message);
    } catch (error) {
      console.error("Error sending SOS:", error);
      Alert.alert("❌ Error", "Failed to send SOS. Please try again.");
    }
  };

  const handleSOSClick = async () => {
    if (!userData || !isValidUserData(userData)) {
      Alert.alert("Complete Profile", "Please complete your profile first", [
        {
          text: "Go to Profile",
          onPress: () => navigation.navigate("UserTypeSelection"),
        },
      ]);
      return;
    }

    if (sosTriggered) return;

    setSosTriggered(true);
    setSosImage(SOSAfter);
    setSosSize(styles.sosButtonLarge);

    await sendSOSMessage(0, "General SOS - Immediate assistance required.");
  };

  const handleLongPress = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/buzzer.mp3")
      );
      await sound.playAsync();

      setTimeout(async () => {
        await sound.stopAsync();
        await sound.unloadAsync();
      }, 300000);

      await sendSOSMessage(
        0,
        "Emergency Alarm Activated - Immediate assistance required."
      );
    } catch (error) {
      console.error("Error playing alarm:", error);
    }
  };

  const handleEmergencyClick = async (priority, message, label) => {
    await sendSOSMessage(priority, message);
    navigation.navigate("Help", { emergencyType: label });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#ECECEC" }}>
      <Navbar />

      {/* Emergency Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.emergencyText}>Are you in an emergency?</Text>
        <Text style={styles.subText}>
          Press the SOS button to send an alert immediately. Hold for 3 seconds
          to activate the alarm and send another alert.
        </Text>
      </View>

      {/* SOS Button */}
      <View style={styles.center}>
        <TouchableOpacity
          onPress={handleSOSClick}
          onLongPress={handleLongPress}
        >
          <Image source={sosImage} style={sosSize} />
        </TouchableOpacity>
      </View>

      {/* Emergency Options */}
      <View style={styles.emergencyOptions}>
        {emergencyData.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.emergencyButton}
            onPress={() =>
              handleEmergencyClick(item.priority, item.message, item.label)
            }
          >
            <Image
              source={emergencyIcons[item.label]}
              style={styles.emergencyImage}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
