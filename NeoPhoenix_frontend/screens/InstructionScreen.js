import React, { useState, useCallback } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import Navbar from "../components/Navbar";

export default function InstructionScreen() {
  const route = useRoute();
  const [emergencyType, setEmergencyType] = useState("All");

  useFocusEffect(
    useCallback(() => {
      if (route.params?.emergencyType) {
        setEmergencyType(route.params.emergencyType);
      } else {
        setEmergencyType("All");
      }
    }, [route.params])
  );

  const instructions = {
    Medical: {
      title: "🩺 Medical Assistance (CPR Guide)",
      content: `𝗦𝗔𝗙𝗘𝗧𝗬
• Ensure the area is safe for you and the victim.
• Check for sharp objects and electrical hazards.
• Only proceed when the scene is secure.

𝗖𝗛𝗘𝗖𝗞 𝗖𝗢𝗡𝗦𝗖𝗜𝗢𝗨𝗦𝗡𝗘𝗦𝗦
• Tap the person's shoulder.
• Shout to try getting a response.
• Check for pulse and breathing.

𝗔𝗜𝗥𝗪𝗔𝗬 𝗠𝗔𝗡𝗔𝗚𝗘𝗠𝗘𝗡𝗧
• Tilt the head back, lift the chin.
• Pinch the nose, give two rescue breaths (if trained).

𝗖𝗛𝗘𝗦𝗧 𝗖𝗢𝗠𝗣𝗥𝗘𝗦𝗦𝗜𝗢𝗡𝗦
• Place hands one on top of the other on the center of the chest.
• Push down at least two inches.
• Maintain a rate of 100-120 compressions per minute.

𝗥𝗘𝗣𝗘𝗔𝗧 𝗣𝗥𝗢𝗖𝗘𝗗𝗨𝗥𝗘
• Continue compressions and breath cycles until help arrives.`,
    },
    Fire: {
      title: "🔥 Fire Emergency",
      content: `𝗔𝗟𝗘𝗥𝗧 𝗢𝗧𝗛𝗘𝗥𝗦
• Pull the fire alarm if available.
• Call emergency services (911 or local number).

𝗘𝗩𝗔𝗖𝗨𝗔𝗧𝗘
• Use the nearest emergency exit.
• Stay low to avoid smoke inhalation.
• Never use elevators during a fire.

𝗨𝗦𝗘 𝗔 𝗙𝗜𝗥𝗘 𝗘𝗫𝗧𝗜𝗡𝗚𝗨𝗜𝗦𝗛𝗘𝗥
• Pull the safety pin.
• Aim at the base of the fire.
• Squeeze the handle.
• Sweep from side to side.

𝗔𝗦𝗦𝗘𝗠𝗕𝗟𝗬 𝗣𝗢𝗜𝗡𝗧
• Gather at the designated safe area.
• Report any missing persons.`,
    },
    Violence: {
      title: "⚠️ Violence ",
      content: `𝗦𝗧𝗔𝗬 𝗖𝗔𝗟𝗠 & 𝗔𝗦𝗦𝗘𝗦𝗦 𝗧𝗛𝗘 𝗦𝗜𝗧𝗨𝗔𝗧𝗜𝗢𝗡
• If the violence is severe, immediately inform security.
• If minor, try to mediate, but safety should be the priority.

𝗖𝗔𝗟𝗟 𝗙𝗢𝗥 𝗕𝗔𝗖𝗞𝗨𝗣
• Security Team: Call the campus security helpline.
• Emergency App (Machii): If reported through the app, access the live location of the victim.
• Police: If the threat is serious, call 100 (police emergency number).

𝗜𝗦𝗢𝗟𝗔𝗧𝗘 𝗧𝗛𝗘 𝗔𝗥𝗘𝗔
• Move students to a safe location.
• Prevent unnecessary interference.

𝗣𝗥𝗢𝗩𝗜𝗗𝗘 𝗠𝗘𝗗𝗜𝗖𝗔𝗟 𝗛𝗘𝗟𝗣 (𝗜𝗙 𝗡𝗘𝗘𝗗𝗘𝗗)
• If anyone is injured, provide first aid.
• In severe cases, call an ambulance (108) immediately.

𝗚𝗔𝗧𝗛𝗘𝗥 𝗘𝗩𝗜𝗗𝗘𝗡𝗖𝗘
• Check CCTV footage for proof.
• Collect witness statements.

𝗜𝗡𝗙𝗢𝗥𝗠 𝗛𝗜𝗚𝗛𝗘𝗥 𝗔𝗨𝗧𝗛𝗢𝗥𝗜𝗧𝗜𝗘𝗦
• Report the incident to college management.
• Take disciplinary action if necessary.

𝗥𝗘𝗣𝗢𝗥𝗧 & 𝗙𝗢𝗟𝗟𝗢𝗪-𝗨𝗣
• Record the incident for future reference.
• Conduct awareness programs.`,
    },
    Rescue: {
      title: "👩‍🦰 Women's Safety & Medical Emergency Guidelines",
      content: `SAFETY THREATS & PRECAUTIONS

HARASSMENT (ONLINE/OFFLINE)
• Precaution: Avoid sharing personal details. Use privacy settings.
• Action: Report incidents via security or the emergency app.

STALKING OR BEING FOLLOWED
• Precaution: Stay in well-lit, crowded areas. Avoid distractions.
• Action: Move to a safe place, use the live location-sharing feature.
• If it persists beyond 5 minutes, call security.

FOOD/DRINK SPIKING
• Precaution: Never leave food/drinks unattended. Avoid open items from strangers.
• Action: If feeling unwell, inform someone and seek medical help.
• If symptoms worsen in 10-15 minutes, call emergency services.

ATTEMPTED THEFT/SNATCHING
• Precaution: Keep valuables secure, avoid open display.
• Action: Do not resist forcefully; report immediately.
• Report within 30 minutes for legal action.`,
    },
    Disaster: {
      title: "🌪️ College Evacuation Map",
      image: require("../assets/map.jpg"), // Ensure the image exists in assets
    },
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>📖 Emergency Instructions</Text>

        {emergencyType === "All" ? (
          Object.values(instructions).map((item, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              {item.content ? (
                <Text style={styles.content}>{item.content}</Text>
              ) : (
                <Image source={item.image} style={styles.imagePreview} />
              )}
            </View>
          ))
        ) : (
          <View style={styles.card}>
            <Text style={styles.title}>
              {instructions[emergencyType]?.title || "⚠️ Unknown Emergency"}
            </Text>
            {instructions[emergencyType]?.content ? (
              <Text style={styles.content}>
                {instructions[emergencyType].content}
              </Text>
            ) : (
              <Image
                source={instructions[emergencyType]?.image}
                style={styles.imagePreview}
              />
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingTop: 0, // Avoid overlapping Navbar
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingBottom: 20, // Prevent content from being cut off
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#d32f2f",
    textAlign: "center",
    marginBottom: 15,
  },
  card: {
    padding: 18,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignItems: "flex-start",
    width: "100%", // Ensure it adapts to the screen size
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
    textAlign: "left",
  },
  imagePreview: {
    width: "100%",
    height: 200, // Adjust height as needed
    resizeMode: "contain",
    borderRadius: 10,
    marginTop: 10,
    alignSelf: "center",
  },
});
