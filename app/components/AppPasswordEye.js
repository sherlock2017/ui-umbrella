import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BrandColors from "../configs/BrandColors";

function AppPasswordEye({ onPress, active = false, ...otherProps }) {
  console.log("password");
  return (
    <>
      {active && (
        <MaterialCommunityIcons
          color={BrandColors.dark}
          name="eye"
          size={25}
          {...otherProps}
          onPress={onPress}
        />
      )}
      {!active && (
        <MaterialCommunityIcons
          color={BrandColors.medium}
          name="eye-off"
          size={25}
          {...otherProps}
          onPress={onPress}
        />
      )}
    </>
  );
}

export default AppPasswordEye;
