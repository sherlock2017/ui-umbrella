import React, { useState } from "react";
import AppRatingsScale from "../components/AppStarScale";
import Screen from "../components/Screen";
import { StyleSheet } from "react-native";

function FeedbackScreen(props) {
  const [rate, setRate] = useState(0);

  return (
    <Screen style={styles.container}>
      <AppRatingsScale
        totalPoints={8}
        size={40}
        ratings={(rate) => console.log("rating -- ", rate)}
      />
    </Screen>
  );
}

export default FeedbackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});
