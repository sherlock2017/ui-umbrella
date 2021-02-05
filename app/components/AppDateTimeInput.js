import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import BrandColors from "../configs/BrandColors";
import DefaultStyles from "../configs/Styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppPasswordEye from "./AppPasswordEye";
import AppDateTimePicker from "./AppDateTimePicker";
import { getNotificationCategoriesAsync } from "expo-notifications";

function AppDateTimeInput({
  label,
  placeholder = "MM/DD/YYYY",
  mode = "date",
  display = "default",
  value = new Date(),
  onSelect,
  ...otherProps
}) {
  const [show, setShow] = useState(false);
  const [dateTimeValue, setDateTimeValue] = useState();

  const togglePassword = () => {
    setActivateEye(!activateEye);
  };

  const getWidth = () => {
    if (!mode) return "98%";
    else return "80%";
  };

  const getIcon = () => {
    if (mode == "time") return "clock";
    if (mode == "date") return "calendar";
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setDateTimeValue(currentDate);
    setShow(Platform.OS === "ios");
    onSelect(dateTimeValue.toString());
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setShow(true)}>
        <View style={[styles.input, { height: 60 }]}>
          {/* {!icon && <Text style={styles.label}>{label}</Text>} */}
          <Text style={styles.labelWithIcon}>{label}</Text>
          <View style={styles.textContainer}>
            <MaterialCommunityIcons
              style={styles.icon}
              name={getIcon()}
              size={30}
            />

            {
              <>
                {placeholder && (
                  <Text
                    style={[
                      styles.text,
                      DefaultStyles.h6,
                      {
                        fontWeight: "bold",
                        width: getWidth(),
                        color: dateTimeValue ? "grey" : BrandColors.medium,
                      },
                    ]}
                    {...otherProps}
                  >
                    {dateTimeValue ? dateTimeValue.toDateString() : placeholder}
                  </Text>
                )}
                <MaterialCommunityIcons
                  style={(styles.icon, { color: BrandColors.medium })}
                  name="chevron-down"
                  size={30}
                />
              </>
            }
          </View>
        </View>
      </TouchableWithoutFeedback>
      {show && (
        <AppDateTimePicker
          mode={mode}
          display={display}
          value={value}
          onChange={(event, selectedDate) => onChange(event, selectedDate)}
        />
      )}
    </>
  );
}

export default AppDateTimeInput;

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
    textAlignVertical: "top",
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
