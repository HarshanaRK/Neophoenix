import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { navBarStyles as styles } from "../styles/styles";
import Profile from "./Profile";

export default function Navbar() {
  const [profileVisible, setProfileVisible] = useState(false);

  return (
    <SafeAreaView
      style={{
        paddingTop: Constants.statusBarHeight,
        backgroundColor: styles.navbar.backgroundColor,
      }}
    >
      <View style={styles.navbar}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <Text style={styles.title}>NeoPhoenix</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => setProfileVisible(true)}>
            <Ionicons name="person-circle" size={40} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <Profile
        visible={profileVisible}
        onClose={() => setProfileVisible(false)}
      />
    </SafeAreaView>
  );
}
