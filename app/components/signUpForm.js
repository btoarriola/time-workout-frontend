import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  Modal,
  Platform,
  StyleSheet,
  Dimensions,
  StatusBar,
  DatePickerIOSBase,
} from "react-native";
import { StackActions } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-ico-flags";

//* imports for FORMS
import { Formik } from "formik";
import * as Yup from "yup";

//* imports components
import FormInput from "../components/formInput";
import FormSubmitButton from "../components/formSubmitButton";
import FormComponent from "../components/formComponent";
import NationalityModalPicker from "./nationalityModalPicker";
import apiServer from "../api/apiServer";

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
const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(3, "Must have at least 3 chars")
    .required("First name is required"),
  lastName: Yup.string()
    .trim()
    .min(6, "Must have at least 6 chars")
    .required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .trim()
    .min(8, "Password is too short")
    .required("Password is required"),
  gender: Yup.string()
    .max(1, "Invalid gender")
    .equals(["M", "F"])
    .required("Gender is required"),
});

export default function SignUpForm({ navigation }) {
  //> DataTimePicker
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [formatedDate, setFormatedDate] = useState("0000-00-00");
  const currentDate = new Date();
  const minimumYear = currentDate.getFullYear() - 50; //> e.g 2022
  const minimumMonth = currentDate.getMonth(); //> e.g range(0 - 11)
  const minimumDay = currentDate.getDate(); //> e.g 25
  const MINIMUMDATE = new Date(minimumYear, minimumMonth, minimumDay);
  const maximumYear = minimumYear + 45;
  const MAXIMUMDATE = new Date(maximumYear, minimumMonth, minimumDay);

  //> Modal for nationality
  const [chooseIcon, setChooseIcon] = useState("mexico");
  const [chooseData, setChooseData] = useState("MX");
  const [isModalVisible, setIsModalVisible] = useState(false);

  //> Formik
  const userInfo = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
  };

  //! Handle submit button actions
  const apiSignUp = async (values, formikActions) => {
    try {
      //   if (formatedDate === "0000-00-00") {
      //     alert("Select your birhtday");
      //   } else {
      const imageUrl =
        "https://res.cloudinary.com/ditqkou9h/image/upload/v1654591065/profile-picture.png";

      await apiServer.post("/auth/register", {
        ...values,
        nationality: chooseData,
        birthday: formatedDate,
        profilePicture: imageUrl,
      });

      const res = await apiServer.post("/auth/login", {
        email: values.email,
        password: values.password,
      });

      if (res.data.success) {
        formikActions.resetForm();
        formikActions.setSubmitting(false);
        navigation.dispatch(StackActions.replace("uploadImage", res.data));
      }
      // }
    } catch (err) {
      console.log(err.toJSON());
      alert(JSON.stringify(err));
    }
  };

  //* Modals
  const changeModalVisibility = (bool) => {
    setIsModalVisible(bool);
  };
  const setData = (nation, icon) => {
    setChooseData(nation);
    setChooseIcon(icon);
  };

  //* Handle value for birthday
  const onChangeDate = (event, selectedDate) => {
    let birthdaySelected = selectedDate || date;
    setShowDatePicker(Platform.OS == "ios");
    let day = birthdaySelected.getDate();
    let month = birthdaySelected.getMonth() + 1;
    const year = birthdaySelected.getFullYear();
    // birthdaySelected = birthdaySelected.toISOString().split("T").shift();
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    setFormatedDate(`${year}-${month}-${day}`);
    console.log(formatedDate);
  };
  return (
    <FormComponent>
      <Formik
        initialValues={userInfo}
        validationSchema={validationSchema}
        onSubmit={apiSignUp}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          const { name, lastName, email, password, gender } = values;
          return (
            <>
              <FormInput
                value={name}
                error={touched.name && errors.name}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                placeholder="First name"
                autoCapitalize="words"
              />
              <FormInput
                value={lastName}
                error={touched.lastName && errors.lastName}
                onChangeText={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                placeholder="Last name"
                autoCapitalize="words"
              />
              <FormInput
                value={email}
                error={touched.email && errors.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                placeholder="Email address"
                autoCapitalize="none"
              />
              <FormInput
                value={password}
                error={touched.password && errors.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry
              />
              <TouchableOpacity
                onPress={() => changeModalVisibility(true)}
                style={styles.modalButton}
              >
                <>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      marginRight: 20,
                    }}
                  >
                    Nationality
                  </Text>
                </>
                <>
                  <Icon name={chooseIcon} />
                  <Text style={[styles.calendarText, { marginLeft: 10 }]}>
                    {chooseData}
                  </Text>
                </>
              </TouchableOpacity>
              <Modal
                transparent={true}
                animationType="fade"
                visible={isModalVisible}
                onRequestClose={() => changeModalVisibility(false)}
              >
                <NationalityModalPicker
                  changeModalVisibility={changeModalVisibility}
                  setData={setData}
                />
              </Modal>
              <FormInput
                value={gender}
                error={touched.gender && errors.gender}
                onChangeText={handleChange("gender")}
                onBlur={handleBlur("gender")}
                placeholder="Gender"
                autoCapitalize="none"
                style={{ width: ((WINDOW_WIDTH * 8.5) / 30) * 1 }}
              >
                <TouchableOpacity
                  style={styles.calendarButton}
                  onPress={() => {
                    setShowDatePicker(true);
                  }}
                >
                  <Text style={styles.calendarText}>Birthday</Text>
                  <Text>{formatedDate}</Text>
                  <FontAwesome name="calendar" size={16} />
                </TouchableOpacity>
                {showDatePicker ? (
                  Platform.OS == "android" ? (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={new Date()}
                      mode={"date"}
                      minimumDate={MINIMUMDATE}
                      maximumDate={MAXIMUMDATE}
                      onChange={onChangeDate}
                    />
                  ) : (
                    <View style={styles.container}>
                      <DatePickerIOS
                        date={new Date()}
                        onDateChange={onChangeDate}
                      />
                    </View>
                  )
                ) : null}
              </FormInput>
              <FormSubmitButton
                tittle={"Sign up"}
                submitting={isSubmitting}
                onPress={handleSubmit}
              />
            </>
          );
        }}
      </Formik>
    </FormComponent>
  );
}

const styles = StyleSheet.create({
  calendarButton: {
    backgroundColor: "red",
    width: ((WINDOW_WIDTH * 8.5) / 30) * 2 - 10,
    height: 45,
    marginTop: 5,
    borderRadius: 17,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  calendarText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },
  errorView: {
    width: (WINDOW_WIDTH / 10) * 8.5,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 5,
  },
  modalButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: 10,
    width: (WINDOW_WIDTH / 10) * 8.5,
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 17,
    marginTop: 10,
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
