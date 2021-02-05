import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";

function AppStar({ onPress, point = 0, size }) {
  return (
    <View style={styles.container}>
      {point == 0 && (
        <TouchableOpacity onPress={onPress}>
          <MaterialCommunityIcons
            style={styles.emptyStar}
            name="star-outline"
            size={size}
          />
        </TouchableOpacity>
      )}
      {point == 0.5 && (
        <TouchableOpacity onPress={onPress}>
          <MaterialCommunityIcons
            style={styles.halfStar}
            name="star-half-full"
            size={size}
          />
        </TouchableOpacity>
      )}
      {point == 1 && (
        <TouchableOpacity onPress={onPress}>
          <MaterialCommunityIcons
            style={styles.fullStar}
            name="star"
            size={size}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

export default AppStar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyStar: {
    color: "black",
  },
  halfStar: {
    color: "gold",
  },
  fullStar: {
    color: "gold",
  },
});
