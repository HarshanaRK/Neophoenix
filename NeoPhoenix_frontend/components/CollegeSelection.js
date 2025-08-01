import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { formStyles as styles } from "../styles/styles";
import { isValidUserData } from "../utils/userDataUtils";

export default function CollegeSelection({ navigation }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("userData");
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          if (isValidUserData(parsedData)) {
            navigation.reset({
              index: 0,
              routes: [{ name: "MainTabs", params: { screen: "Home" } }],
            });
            return;
          }
          await AsyncStorage.removeItem("userData");
        }
      } catch (error) {
        console.error("Error checking user data:", error);
      }
      setLoading(false);
    };

    checkUserData();
  }, [navigation]);

  if (loading) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <ActivityIndicator size="large" color="#ff3b30" />
      </View>
    );
  }

  return (
    <View style={[styles.container, { justifyContent: "center" }]}>
      <Text style={[styles.title, { marginBottom: 20, textAlign: "center" }]}>
        Select your user type
      </Text>
      <TouchableOpacity
        style={[
          styles.button,
          { flexDirection: "row", alignItems: "center", marginBottom: 10 },
        ]}
        onPress={() => navigation.navigate("StudentForm")}
      >
        <Ionicons
          name="school"
          size={24}
          color="white"
          style={{ marginRight: 10 }}
        />
        <Text style={styles.buttonText}>Student</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { flexDirection: "row", alignItems: "center" }]}
        onPress={() => navigation.navigate("FacultyForm")}
      >
        <Ionicons
          name="briefcase"
          size={24}
          color="white"
          style={{ marginRight: 10 }}
        />
        <Text style={styles.buttonText}>Faculty</Text>
      </TouchableOpacity>
    </View>
  );
}
