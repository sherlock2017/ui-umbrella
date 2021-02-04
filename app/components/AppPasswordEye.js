import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BrandColors from "../configs/BrandColors";

function AppPasswordEye({ password, onPress, active = false, ...otherProps }) {
  return (
    <>
      {password && active && (
        <MaterialCommunityIcons
          color={BrandColors.dark}
          name="eye"
          size={25}
          {...otherProps}
          onPress={onPress}
        />
      )}
      {password && !active && (
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
