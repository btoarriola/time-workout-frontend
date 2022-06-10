import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { LinearGradient } from "expo-linear-gradient";

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

//* Imports Handlers
import imageUploadHandler from "../handlers/imageUploadHandler";
import apiServer from "../api/apiServer";

export default function UploadProfilePictureScreen(props) {
  let user = props.route.params.user;
  JSON.stringify(user);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadImage = async () => {
    console.log(user);
    if (image) {
      const profilePicture = await imageUploadHandler(image);
      console.log("userWithImage", user);
      const res = await apiServer.put(
        "/auth/edit",
        { ...user, profilePicture: profilePicture },
        {
          headers: {
            Accept: "aplication/json",
            "Content-type": "aplication/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log(res);
      if (res.data) {
        navigation.dispatch(StackActions.replace("home", ...res.data));
      }
    } else {
      navigation.dispatch(StackActions.replace("home", user));
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#EE4540", "#801336"]} locations={[0.1, 0.45]}>
        <View style={styles.background}>
          <View style={styles.topBackground} />
          <View style={styles.bottomBackground} />
        </View>
        <View style={styles.topView}>
          <Text style={styles.heading}>Profile Picture</Text>
          <View style={styles.imageContainer}>
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200, borderRadius: 100 }}
              />
            )}
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={pickImage} style={styles.iconButton}>
                <Ionicons name="ios-image-outline" size={25} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.bottomView}>
          <View style={styles.userInfoContainer}>
            <View style={styles.nameContainer}>
              <SimpleLineIcons name="user" size={16} />
              <SimpleLineIcons name="user-female" size={16} />
              <Text style={styles.nameText}>Ingrese el suario!</Text>
            </View>
          </View>
          <View style={styles.continueContainer}>
            <TouchableOpacity
              onPress={uploadImage}
              style={styles.continueButton}
            >
              <Text
                style={{ fontSize: 19, fontWeight: "bold", color: "white" }}
              >
                {image ? "Continuar" : "Skip"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    width: WINDOW_WIDTH,
    height: ANDROID_SCREEN_WITHOUT_BOTTON_NAV,
    // backgroundColor: "#f4837d",
  },
  bottomBackground: {
    width: WINDOW_WIDTH,
    height: ANDROID_SCREEN_WITHOUT_BOTTON_NAV * 0.65,
    backgroundColor: "#fff8",
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    borderBottomLeftRadius: 60,
  },
  bottomView: {
    width: WINDOW_WIDTH,
    height: ANDROID_SCREEN_WITHOUT_BOTTON_NAV * 0.65 - 100,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  continueButton: {
    width: 100,
    height: 35,
    margin: 25,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0496FF",
    elevation: 10,
  },
  continueContainer: {
    flex: 2,
    width: WINDOW_WIDTH,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  heading: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "normal",
    marginBottom: 30,
    letterSpacing: 4,
    opacity: 0.7,
  },
  iconButton: {
    backgroundColor: "#00897b",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    position: "absolute",
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: 200,
    height: 200,
  },
  imageContainer: {
    backgroundColor: "#fff",
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  userInfoContainer: {
    flex: 4,
    width: WINDOW_WIDTH,
    alignItems: "center",
  },
  nameContainer: {
    height: 45,
    width: WINDOW_WIDTH * 0.8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    borderRadius: 12,
    backgroundColor: "#fff",
    opacity: 0.8,
    elevation: 10,
  },
  nameText: { fontSize: 20, paddingLeft: 8 },
  topBackground: {
    width: WINDOW_WIDTH,
    height: ANDROID_SCREEN_WITHOUT_BOTTON_NAV * 0.35,
  },
  topView: {
    width: WINDOW_WIDTH,
    height: ANDROID_SCREEN_WITHOUT_BOTTON_NAV * 0.35 + 100,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
