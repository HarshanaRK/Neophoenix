import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { formatPhoneNumber, isValidPhone } from "../utils/phoneUtils";
import { formStyles as styles } from "../styles/styles";

export default function FacultyForm({ navigation, route }) {
  const defaultData = route.params?.defaultData;
  const [formData, setFormData] = useState({
    name: defaultData?.name || "",
    facultyID: defaultData?.facultyID || "",
    dept: defaultData?.dept || "",
    position: defaultData?.position || "",
    collegeName: defaultData?.collegeName || "",
    mobile: defaultData?.mobile || "",
  });
  const [submitting, setSubmitting] = useState(false);

  const validateForm = () => {
    if (!formData.name.trim()) return "Please enter your full name";
    if (!formData.facultyID.trim()) return "Please enter your faculty ID";
    if (!formData.dept.trim()) return "Please enter your department";
    if (!formData.position.trim()) return "Please enter your position";
    if (!formData.collegeName.trim()) return "Please enter your college name";
    if (!isValidPhone(formatPhoneNumber(formData.mobile)))
      return "Invalid contact number (e.g., +919876543210)";
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
        userType: "Faculty",
      };
      await AsyncStorage.setItem("userData", JSON.stringify(formattedData));
      navigation.reset({
        index: 0,
        routes: [{ name: "MainTabs", params: { screen: "Home" } }],
      });
    } catch (error) {
      console.error("Error saving faculty data:", error);
      Alert.alert("Error", "Failed to save profile. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faculty Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name *"
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Faculty ID *"
        value={formData.facultyID}
        onChangeText={(text) => setFormData({ ...formData, facultyID: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Department *"
        value={formData.dept}
        onChangeText={(text) => setFormData({ ...formData, dept: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Position *"
        value={formData.position}
        onChangeText={(text) => setFormData({ ...formData, position: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="College Name *"
        value={formData.collegeName}
        onChangeText={(text) => setFormData({ ...formData, collegeName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Number (e.g., +919876543210) *"
        keyboardType="phone-pad"
        value={formData.mobile}
        onChangeText={(text) => setFormData({ ...formData, mobile: text })}
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
