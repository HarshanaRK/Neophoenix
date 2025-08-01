import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ContactScreen from "../screens/ContactScreen";
import InstructionScreen from "../screens/InstructionScreen";
import CONFIG from "../config/config";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          return (
            <Ionicons
              name={CONFIG.navigationIcons[route.name]}
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: "#ff3b30",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen
        name="Help"
        component={InstructionScreen}
        initialParams={{ emergencyType: "All" }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("Help", { emergencyType: "All" });
          },
        })}
      />
    </Tab.Navigator>
  );
}
