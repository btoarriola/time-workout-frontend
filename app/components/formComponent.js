import React from "react";
import { View, StyleSheet, Dimensions, StatusBar } from "react-native";

//* constants for Screen manage
const SCREEN_HEIGHT = Dimensions.get("screen").height; // device height
const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;
const WINDOW_HEIGHT = Dimensions.get("window").height;
const WINDOW_WIDTH = Dimensions.get("window").width;
const BOTTON_NAV_BAR_HEIGHT =
  SCREEN_HEIGHT === WINDOW_HEIGHT
    ? 0
    : SCREEN_HEIGHT - WINDOW_HEIGHT - STATUS_BAR_HEIGHT;
const ANDROID_SCREEN_WITHOUT_BOTTON_NAV = SCREEN_HEIGHT - BOTTON_NAV_BAR_HEIGHT;

export default function FormComponent({ children }) {
  return <View style={styles.formView}>{children}</View>;
}

const styles = StyleSheet.create({
  formView: {
    width: WINDOW_WIDTH,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },
});
