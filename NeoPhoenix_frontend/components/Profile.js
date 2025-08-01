import React, { useState, useEffect } from "react";
import { Modal, View, Text, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { profileStyles as styles } from "../styles/styles";

export default function Profile({ visible, onClose }) {
  const [userData, setUserData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (visible) {
      const loadUserData = async () => {
        try {
          const storedData = await AsyncStorage.getItem("userData");
          if (storedData) {
            setUserData(JSON.parse(storedData));
          }
        } catch (error) {
          console.error("Error loading user data", error);
        }
      };
      loadUserData();
    }
  }, [visible]);

  const handleEditProfile = () => {
    if (userData) {
      if (userData.userType === "Student") {
        navigation.navigate("StudentForm", { defaultData: userData });
      } else if (userData.userType === "Faculty") {
        navigation.navigate("FacultyForm", { defaultData: userData });
      } else if (userData.userType === "General") {
        navigation.navigate("GeneralSelection", { defaultData: userData });
      }
      onClose(); // Close the modal after navigating
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("userData");
      navigation.reset({
        index: 0,
        routes: [{ name: "UserTypeSelection" }],
      });
      onClose();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
          <Image
            source={require("../assets/defaultProfile.png")} // Ensure default image is in assets/
            style={styles.profilePicture}
          />
          {userData ? (
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>Name: {userData.name}</Text>
              <Text style={styles.infoText}>
                User Type: {userData.userType}
              </Text>
              {userData.userType === "Student" && (
                <>
                  <Text style={styles.infoText}>
                    College: {userData.collegeName}
                  </Text>
                  <Text style={styles.infoText}>
                    Registration No: {userData.regNo}
                  </Text>
                  <Text style={styles.infoText}>
                    Department: {userData.dept}
                  </Text>
                  <Text style={styles.infoText}>
                    Emergency Contact: {userData.emergencyContact}
                  </Text>
                </>
              )}
              {userData.userType === "Faculty" && (
                <>
                  <Text style={styles.infoText}>
                    College: {userData.collegeName}
                  </Text>
                  <Text style={styles.infoText}>
                    Faculty ID: {userData.facultyID}
                  </Text>
                  <Text style={styles.infoText}>
                    Department: {userData.dept}
                  </Text>
                  <Text style={styles.infoText}>
                    Position: {userData.position}
                  </Text>
                </>
              )}
              {userData.userType === "General" && (
                <>
                  <Text style={styles.infoText}>Age: {userData.age}</Text>
                  <Text style={styles.infoText}>
                    Address: {userData.address}
                  </Text>
                  <Text style={styles.infoText}>
                    Emergency Contact: {userData.emergencyContact}
                  </Text>
                  <Text style={styles.infoText}>
                    Aadhar Number: {userData.aadhar}
                  </Text>
                </>
              )}
              <Text style={styles.infoText}>Mobile: {userData.mobile}</Text>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <TouchableOpacity
                  style={styles.Button}
                  onPress={handleEditProfile}
                >
                  <Ionicons
                    name="create-outline"
                    size={20}
                    color="white"
                    style={{ marginRight: 5 }}
                  />
                  <Text style={styles.ButtonText}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.Button,
                    { marginLeft: 10, backgroundColor: "gray" },
                  ]}
                  onPress={handleLogout}
                >
                  <Ionicons
                    name="log-out-outline"
                    size={20}
                    color="white"
                    style={{ marginRight: 5 }}
                  />
                  <Text style={styles.ButtonText}>Logout</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <Text style={styles.infoText}>No profile data found.</Text>
          )}
        </View>
      </View>
    </Modal>
  );
}
