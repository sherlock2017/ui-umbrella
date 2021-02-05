import React, { useState } from "react";
import AppRatingsScale from "../components/AppStarScale";
import Screen from "../components/Screen";
import { StyleSheet, View, Text } from "react-native";
import DefaultStyles from "../configs/Styles";
import AppTextInput from "../components/AppTextInput";
import AppGradientButton from "../components/AppGradientButton";

function FeedbackScreen(props) {
  const [rating, setRating] = useState(0);

  return (
    <Screen style={styles.container}>
      <View style={styles.body}>
        <Text style={[DefaultStyles.h1]}>Feedback</Text>
        <Text style={[DefaultStyles.h5]}>How was your experience?</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.scale}>
          <AppRatingsScale
            totalPoints={5}
            size={40}
            ratings={(rate) => setRating(rate)}
          />
          {rating != 0 && <Text style={DefaultStyles.h4}>({rating})</Text>}
        </View>
        <AppTextInput
          label="Let us know about your experience"
          placeholder="I feel great about.."
          multiline={true}
          numberOfLines={10}
        />
        <AppGradientButton
          position="left"
          text="Submit "
          width="50%"
          colors={DefaultStyles.gradient.blue}
        />
      </View>
    </Screen>
  );
}

export default FeedbackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 25,
  },
  body: {
    //backgroundColor: "orange",
  },
  form: {
    paddingTop: 15,
  },
  scale: {
    flexDirection: "row",
    alignItems: "center",
  },
});
