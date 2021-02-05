import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FeedbackScreen from "./app/screens/FeedbackScreen";
import SigninScreen from "./app/screens/SignInScreen";
import SignupScreen from "./app/screens/SignupScreen";

export default function App() {
  return (
    // <SignupScreen />
    // <SigninScreen />
    <FeedbackScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
