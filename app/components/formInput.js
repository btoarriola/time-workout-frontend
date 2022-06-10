import React from "react";
import {
  View,
  Text,
  TextInput,
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

export default function FormInput(props) {
  const { placeholder, error, children } = props;
  props = { ...props, children: null };
  return (
    <View style={{ flexDirectio: "column" }}>
      <View style={[styles.errorView]}>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
      <View style={{ flexDirection: "row" }}>
        {children}

        <TextInput
          {...props}
          placeholder={placeholder}
          placeholderTextColor={"#fff"}
          style={[styles.textInput, { ...props.style }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  errorView: {
    width: (WINDOW_WIDTH / 10) * 8.5,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 5,
  },
  errorText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },
  textInput: {
    color: "#fff",
    width: (WINDOW_WIDTH / 10) * 8.5,
    height: 45,
    marginTop: 5,
    borderWidth: 0.8,
    borderColor: "#fff",
    borderRadius: 17,
    paddingLeft: 15,
  },
});
