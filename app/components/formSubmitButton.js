import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
} from "react-native";

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

export default function FormSubmitButton({ tittle, submitting, onPress }) {
  const backgroundColor = submitting ? "#fff5" : "#fff";
  return (
    <TouchableOpacity
      submitting={submitting}
      style={[styles.buttonSubmit, { backgroundColor }]}
      onPress={!submitting ? onPress : null}
    >
      <Text style={styles.buttonSubmitText}>{tittle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSubmit: {
    height: 50,
    width: (WINDOW_WIDTH / 10) * 8.5,
    borderRadius: 18,
    marginTop: 20,
    marginBottom: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSubmitText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
