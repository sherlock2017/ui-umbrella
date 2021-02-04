import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import BrandColors from "../configs/BrandColors";
import DefaultStyles from "../configs/Styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppPasswordEye from "./AppPasswordEye";

function AppTextInput({
  label,
  placeholder,
  icon,
  fieldType,
  password = false,
  ...otherProps
}) {
  const [activateEye, setActivateEye] = useState(false);

  const togglePassword = () => {
    setActivateEye(!activateEye);
  };

  return (
    <View style={styles.input}>
      {!icon && <Text style={styles.label}>{label}</Text>}
      {icon && <Text style={styles.labelWithIcon}>{label}</Text>}
      {/* icon */}
      <View style={styles.textContainer}>
        {icon && (
          <MaterialCommunityIcons style={styles.icon} name={icon} size={30} />
        )}
        {password && (
          <TextInput
            style={[styles.text, DefaultStyles.h6, { fontWeight: "bold" }]}
            {...otherProps}
            placeholder={placeholder}
            secureTextEntry={!activateEye}
          />
        )}
        {!password && (
          <TextInput
            style={[styles.text, DefaultStyles.h6, { fontWeight: "bold" }]}
            {...otherProps}
            placeholder={placeholder}
          />
        )}
        <AppPasswordEye
          onPress={togglePassword}
          password={password}
          active={activateEye}
          style={styles.eye}
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
    width: "80%",
  },
  textContainer: {
    flexDirection: "row",
  },
  icon: {
    color: "grey",
    marginRight: 5,
  },
  eye: {
    bottom: 5,
  },
});
