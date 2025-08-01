import React from "react";
import { View, Text } from "react-native";
import { footerStyles as styles } from "../styles/styles";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2025 NeoPhoenix</Text>
    </View>
  );
}
