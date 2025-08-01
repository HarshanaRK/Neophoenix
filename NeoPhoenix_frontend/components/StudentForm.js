import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { formatPhoneNumber, isValidPhone } from "../utils/phoneUtils";
import { formStyles as styles } from "../styles/styles";

export default function StudentForm({ navigation, route }) {
  const defaultData = route.params?.defaultData;
  const [formData, setFormData] = useState({
    name: defaultData?.name || "",
    regNo: defaultData?.regNo || "",
    dept: defaultData?.dept || "",
    collegeName: defaultData?.collegeName || "",
    mobile: defaultData?.mobile || "",
    emergencyContact: defaultData?.emergencyContact || "",
  });
  const [submitting, setSubmitting] = useState(false);

  const validateForm = () => {
    if (!formData.name.trim()) return "Please enter your full name";
    if (!formData.regNo.trim()) return "Please enter your registration number";
    if (!formData.dept.trim()) return "Please enter your department";
    if (!formData.collegeName.trim()) return "Please enter your college name";
    if (!isValidPhone(formatPhoneNumber(formData.mobile)))
      return "Invalid mobile number (e.g., +919876543210)";
    if (!isValidPhone(formatPhoneNumber(formData.emergencyContact)))
      return "Invalid emergency contact number (e.g., +919876543210)";
    return null;
  };

  const handleSubmit = async () => {
    if (submitting) return;
    const validationError = validateForm();
    if (validationError) {
      Alert.alert("Validation Error", validationError);
      return;
    }
    setSubmitting(true);
    try {
      const formattedData = {
        ...formData,
        mobile: formatPhoneNumber(formData.mobile),
        emergencyContact: formatPhoneNumber(formData.emergencyContact),
        userType: "Student",
      };
      await AsyncStorage.setItem("userData", JSON.stringify(formattedData));
      navigation.reset({
        index: 0,
        routes: [{ name: "MainTabs", params: { screen: "Home" } }],
      });
    } catch (error) {
      console.error("Error saving student data:", error);
      Alert.alert("Error", "Failed to save profile. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name *"
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Registration Number *"
        value={formData.regNo}
        onChangeText={(text) => setFormData({ ...formData, regNo: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Department *"
        value={formData.dept}
        onChangeText={(text) => setFormData({ ...formData, dept: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="College Name *"
        value={formData.collegeName}
        onChangeText={(text) => setFormData({ ...formData, collegeName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Number (e.g., +919876543210) *"
        keyboardType="phone-pad"
        value={formData.mobile}
        onChangeText={(text) => setFormData({ ...formData, mobile: text })}
        maxLength={15}
      />
      <TextInput
        style={styles.input}
        placeholder="Emergency Contact (e.g., +919876543210) *"
        keyboardType="phone-pad"
        value={formData.emergencyContact}
        onChangeText={(text) =>
          setFormData({ ...formData, emergencyContact: text })
        }
        maxLength={15}
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
