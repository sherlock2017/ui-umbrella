import React from "react";
import { Text, StyleSheet, View, TextInput, Image } from "react-native";
import AppButton from "../components/AppButton";
import AppGradientButton from "../components/AppGradientButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import DefaultStyles from "../configs/Styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BrandColors from "../configs/BrandColors";

function SignupScreen(props) {
  return (
    <Screen style={styles.container}>
      <MaterialCommunityIcons
        style={styles.icon}
        name="all-inclusive"
        size={90}
      />
      <View style={styles.body}>
        <Text style={[DefaultStyles.h1]}>Register</Text>
        <Text style={[DefaultStyles.h5]}>Register with us to get benefits</Text>
      </View>
      <View style={styles.form}>
        <AppTextInput label="Name" icon="account" placeholder="Rishabh Jain" />
        <AppTextInput
          label="Email"
          icon="email"
          placeholder="ironman@gmail.com"
        />
        <AppTextInput
          label="Password"
          icon="form-textbox-password"
          placeholder="**********"
          secureTextEntry
        />
        {/* <AppButton text="Register" color="dodgerblue" /> */}
        <AppGradientButton
          style={{ flexDirection: "row", justifyContent: "flex-end" }}
          text="Register "
          width="50%"
          onPress={() => alert("User Registered")}
          colors={["#09C6F9", "#045DE9"]}
        />

        <View style={styles.footer}>
          <Text style={{ fontSize: 16 }}>Already a user?</Text>
          <Text onPress={() => alert("sign in")} style={styles.signIn}>
            SignIn&nbsp;
          </Text>
        </View>
      </View>
    </Screen>
  );
}

export default SignupScreen;

const styles = StyleSheet.create({
  icon: {
    left: 250,
    bottom: 90,
    color: "#045DE9",
  },
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    //backgroundColor: "yellow",
    paddingHorizontal: 25,
  },
  body: {
    //backgroundColor: "orange",
  },
  form: {
    paddingTop: 15,
  },
  image: {
    zIndex: -1,
    height: 200,
    width: 200,
    transform: [{ rotate: "270deg" }],
  },
  footer: {
    alignItems: "center",
    flexDirection: "row",
    top: "22%",
    left: "25%",
  },
  signIn: {
    fontWeight: "bold",
    fontSize: 16,
    textDecorationLine: "underline",
    color: "#045DE9",
    paddingLeft: 2,
  },
});
