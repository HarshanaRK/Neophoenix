import React from "react";
import { View, Text, Image } from "react-native";
import { heroStyles as styles } from "../styles/styles";

export default function HomeHeroSection() {
  return (
    <View style={styles.container}>
      {/* Left Side: Emergency Text */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Are you in an emergency?</Text>
        <Text style={styles.description}>
          Press the SOS button, your live location will be shared with the
          nearest help center and your emergency contacts.
        </Text>
      </View>

      {/* Right Side: Emergency Image */}
      <Image
        source={require("../assets/emoji.webp")} // Make sure you have an image in assets/
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}
