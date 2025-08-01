import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { generalSelectionStyles as styles } from "../styles/styles";

export default function GeneralSelection({ navigation, route }) {
  const defaultData = route.params?.defaultData;
  const [formData, setFormData] = useState({
    name: defaultData?.name || "",
    age: defaultData?.age || "",
    address: defaultData?.address || "",
    mobile: defaultData?.mobile || "",
    emergencyContact: defaultData?.emergencyContact || "",
    aadhar: defaultData?.aadhar || "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.age ||
      !formData.address ||
      !formData.mobile ||
      !formData.emergencyContact ||
      !formData.aadhar
    ) {
      Alert.alert("Validation Error", "All fields are required.");
      return;
    }
    setSubmitting(true);
    try {
      const dataToSave = { ...formData, userType: "General" };
      await AsyncStorage.setItem("userData", JSON.stringify(dataToSave));
      navigation.reset({
        index: 0,
        routes: [{ name: "MainTabs", params: { screen: "Home" } }],
      });
    } catch (error) {
      console.error("Error saving general user data:", error);
      Alert.alert("Error", "Failed to save profile. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>General User Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Name *"
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Age *"
        keyboardType="numeric"
        value={formData.age}
        onChangeText={(text) => setFormData({ ...formData, age: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Address *"
        value={formData.address}
        onChangeText={(text) => setFormData({ ...formData, address: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Aadhar Number *"
        keyboardType="numeric"
        value={formData.aadhar}
        onChangeText={(text) => setFormData({ ...formData, aadhar: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Number *"
        keyboardType="phone-pad"
        value={formData.mobile}
        onChangeText={(text) => setFormData({ ...formData, mobile: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Emergency Contact *"
        keyboardType="phone-pad"
        value={formData.emergencyContact}
        onChangeText={(text) =>
          setFormData({ ...formData, emergencyContact: text })
        }
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        disabled={submitting}
      >
        <Text style={styles.buttonText}>
          {submitting ? "Saving..." : "Save Profile"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
