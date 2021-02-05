import { Platform } from "react-native";
import BrandColors from "./BrandColors";

export default {
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "sans-serif-condensed" : "Avenir",
    color: BrandColors.black,
  },
  h1: {
    fontSize: 42,
    fontFamily: Platform.OS === "android" ? "sans-serif-condensed" : "Avenir",
    color: BrandColors.black,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 36,
    fontFamily: Platform.OS === "android" ? "sans-serif-condensed" : "Avenir",
    color: BrandColors.black,
  },
  h3: {
    fontSize: 30,
    fontFamily: Platform.OS === "android" ? "sans-serif-condensed" : "Avenir",
    color: BrandColors.black,
  },
  h4: {
    fontSize: 28,
    fontFamily: Platform.OS === "android" ? "sans-serif-condensed" : "Avenir",
    color: BrandColors.black,
  },
  h5: {
    fontSize: 24,
    fontFamily: Platform.OS === "android" ? "sans-serif" : "Avenir",
    color: BrandColors.black,
  },
  h6: {
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "sans-serif" : "Avenir",
    color: BrandColors.black,
  },
  gradient: {
    blue: ["#09C6F9", "#045DE9"],
    lime: ["#55D284", "#F2CF07"],
  },
};
