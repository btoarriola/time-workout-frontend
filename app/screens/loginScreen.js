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

//* imports for FORMS
import { Form, Formik } from "formik";
import * as Yup from "yup";

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

//* VALIDATION SCHEMA FOR FORMIK
const validationSchema = Yup.object({});

export default function LogIn({ navigation }) {
  const userInfo = {
    email: "",
    password: "",
  };
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
          <Image source={require("../assets/patternLogin.jpg")} />
        </View>
        <View style={styles.bottonView}>
          <Text style={styles.heading}>Welcome{"\n"}Back</Text>
          <View style={styles.formView}>
            <Formik initialValues={userInfo} validationSchema>
              {() => {
                return (
                  <>
                    <TextInput
                      placeholder="Email address"
                      placeholderTextColor={"#fff"}
                      autoCapitalize="none"
                      style={styles.textInput}
                    />
                    <TextInput
                      placeholder="Password"
                      placeholderTextColor={"#fff"}
                      autoCapitalize="none"
                      secureTextEntry
                      style={styles.textInput}
                    />
                  </>
                );
              }}
            </Formik>
            {/* TODO: diseñar logica para validar form */}
            <TouchableOpacity style={styles.buttonSubmit}>
              <Text style={styles.buttonSubmitText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.textButton}
              onPress={navigateToSignUp}
            >
              <Text style={{ color: "gray" }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottonView: {
    height: (SCREEN_HEIGHT / 10) * 7,
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
    justifyContent: "center",
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
    marginTop: 60,
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
    height: (SCREEN_HEIGHT / 10) * 3,
    width: WINDOW_WIDTH,
    backgroundColor: "#000",
  },
});
