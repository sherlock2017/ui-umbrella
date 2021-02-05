import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppDateTimePicker({
  onChange,
  mode,
  value = new Date(),
  display = "default",
}) {
  return (
    <DateTimePicker
      testID="dateTimePicker"
      value={value}
      mode={mode}
      is24Hour={true}
      display={display}
      onChange={onChange}
    />
  );
}

export default AppDateTimePicker;
