import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import BrandColors from "../configs/BrandColors";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppGradientButton({
  text,
  colors = ["#EC9F05", "#FF4E00"],
  onPress,
  width = "100%",
  icon = "arrow-right",
  ...otherProps
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ width: width }}
      {...otherProps}
    >
      <LinearGradient
        // Button Linear Gradient
        colors={colors}
        style={[styles.container]}
      >
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
          {icon && (
            <MaterialCommunityIcons style={styles.icon} name={icon} size={25} />
          )}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default AppGradientButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "flex-end",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: BrandColors.white,
    marginRight: "15%",
  },
  textContainer: {
    flexDirection: "row",
  },
  icon: {
    paddingTop: 3,
    color: BrandColors.white,
  },
});
