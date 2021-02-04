import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <View style={styles.view}>{children}</View>
    </SafeAreaView>
  );
}

export default Screen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 2,
    paddingHorizontal: 10,
  },
  view: {
    flex: 1,
  },
});
