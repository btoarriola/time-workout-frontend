import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

//* imports components
import SignInForm from "../components/signInForm";

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

export default function LogIn({ navigation }) {
  {
    /**
     * > Usar para navegar entre pantallas
     * @param {String} screenName
     */
  }
  function navigateToSignUp() {
    navigation.navigate("signup");
  }

  return (
    <SafeAreaView style={[{ ...StyleSheet.absoluteFill }, styles.container]}>
      <View style={[{ ...StyleSheet.absoluteFill }, styles.container]}>
        <View style={styles.topView}>
          <Image
            style={{
              height: (SCREEN_HEIGHT / 10) * 3,
              width: WINDOW_WIDTH,
            }}
            source={require("../assets/backgroundLoginTrimmed.jpg")}
          />
        </View>
        <View style={styles.bottonView}>
          <Text style={styles.heading}>Welcome{"\n"}Back</Text>
          <SignInForm />
          <TouchableOpacity
            style={styles.textButton}
            onPress={navigateToSignUp}
          >
            <Text style={{ color: "gray" }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottonView: {
    height: (SCREEN_HEIGHT / 10) * 7,
    width: WINDOW_WIDTH,
    backgroundColor: "#333",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "#fff",
    fontSize: 45,
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: 60,
  },
  textButton: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 10,
  },
  topView: {
    height: (SCREEN_HEIGHT / 10) * 3,
    width: WINDOW_WIDTH,
    backgroundColor: "#000",
  },
});
