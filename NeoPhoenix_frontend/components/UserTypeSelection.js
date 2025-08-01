import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { userTypeSelectionStyles as styles } from "../styles/styles";

export default function UserTypeSelection({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select User Category</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CollegeSelection")}
      >
        <Ionicons name="school" size={24} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>College</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("GeneralSelection")}
      >
        <Ionicons
          name="people-circle"
          size={24}
          color="white"
          style={styles.icon}
        />
        <Text style={styles.buttonText}>General User</Text>
      </TouchableOpacity>
    </View>
  );
}
