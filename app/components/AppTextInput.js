import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import BrandColors from "../configs/BrandColors";
import DefaultStyles from "../configs/Styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTextInput({ label, placeholder, icon, ...otherProps }) {
  return (
    <View style={styles.input}>
      {!icon && <Text style={styles.label}>{label}</Text>}
      {icon && <Text style={styles.labelWithIcon}>{label}</Text>}
      {/* icon */}
      <View style={styles.textContainer}>
        {icon && (
          <MaterialCommunityIcons style={styles.icon} name={icon} size={30} />
        )}
        <TextInput
          style={[styles.text, DefaultStyles.h6, { fontWeight: "bold" }]}
          {...otherProps}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
}

export default AppTextInput;

const styles = StyleSheet.create({
  label: {
    color: "grey",
    paddingTop: 6,
  },
  labelWithIcon: {
    color: "grey",
    paddingTop: 6,
    paddingLeft: 36,
  },
  input: {
    backgroundColor: BrandColors.white,
    height: 60,
    borderRadius: 7,
    elevation: 3,
    marginVertical: 10,
    paddingHorizontal: 11,
    width: "100%",
    overflow: "hidden",
  },
  text: {
    paddingVertical: 1,
    textDecorationLine: "none",
    width: "90%",
  },
  textContainer: {
    flexDirection: "row",
  },
  icon: {
    color: "grey",
    marginRight: 5,
  },
});
