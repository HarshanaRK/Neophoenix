import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainTabs from "./components/MainTabs";
import UserTypeSelection from "./components/UserTypeSelection";
import StudentForm from "./components/StudentForm";
import FacultyForm from "./components/FacultyForm";
import CollegeSelection from "./components/CollegeSelection";
import GeneralSelection from "./components/GeneralSelection";

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="UserTypeSelection"
          component={UserTypeSelection}
        />
        <RootStack.Screen
          name="CollegeSelection"
          component={CollegeSelection}
        />
        <RootStack.Screen
          name="GeneralSelection"
          component={GeneralSelection}
        />
        <RootStack.Screen name="StudentForm" component={StudentForm} />
        <RootStack.Screen name="FacultyForm" component={FacultyForm} />
        <RootStack.Screen name="MainTabs" component={MainTabs} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
