import { StackActions } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

//* imports components
import SignUpForm from "../components/signUpForm";

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

export default function SignUp({ navigation }) {
  {
    /**
     * > Usar para navegar entre pantallas
     */
  }
  function navigateToSigIn() {
    navigation.dispatch(StackActions.replace("login"));
  }
  return (
    <SafeAreaView style={[{ ...StyleSheet.absoluteFill }, styles.container]}>
      <View style={[{ ...StyleSheet.absoluteFill }, styles.container]}>
        <View style={styles.topView}>
          <Image source={require("../assets/patternLogin.jpg")} />
        </View>
        <View style={styles.bottonView}>
          <TouchableOpacity onPress={navigateToSigIn}>
            <Text
              style={{
                color: "#fff",
                fontSize: 37,
                fontWeight: "bold",
                marginLeft: 30,
                marginTop: 5,
              }}
            >
              {"<"}
            </Text>
          </TouchableOpacity>
          <ScrollView>
            <Text style={styles.heading}>Create Account</Text>
            <SignUpForm navigation={navigation} />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottonView: {
    height: (ANDROID_SCREEN_WITHOUT_BOTTON_NAV / 10) * 8,
    width: WINDOW_WIDTH,
    backgroundColor: "#000",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  buttonSubmit: {
    height: 50,
    width: (WINDOW_WIDTH / 10) * 8.5,
    backgroundColor: "#fff",
    borderRadius: 18,
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSubmitText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  formView: {
    width: WINDOW_WIDTH,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },
  heading: {
    color: "#fff",
    fontSize: 45,
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: 15,
  },
  textButton: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 10,
  },
  textInput: {
    color: "#fff",
    width: (WINDOW_WIDTH / 10) * 8.5,
    height: 45,
    marginTop: 15,
    borderWidth: 0.8,
    borderColor: "#fff",
    borderRadius: 17,
    paddingLeft: 15,
  },
  topView: {
    height: (ANDROID_SCREEN_WITHOUT_BOTTON_NAV / 10) * 2,
    width: WINDOW_WIDTH,
    backgroundColor: "#000",
  },
});
