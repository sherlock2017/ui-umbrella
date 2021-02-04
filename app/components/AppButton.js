import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import BrandColors from "../configs/BrandColors";
import { LinearGradient } from "expo-linear-gradient";

function AppButton({ text, color = "black", onPress }) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 7,
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: BrandColors.white,
  },
});
