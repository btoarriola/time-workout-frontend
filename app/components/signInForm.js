import React from "react";

//* imports for FORMS
import { Form, Formik } from "formik";
import * as Yup from "yup";

//* imports components
import FormInput from "../components/formInput";
import FormSubmitButton from "../components/formSubmitButton";
import FormComponent from "../components/formComponent";
import apiServer from "../api/apiServer";

//* VALIDATION SCHEMA FOR FORMIK
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .trim()
    .min(8, "Password is too short")
    .required("Password is required"),
});

export default function SignInForm() {
  const userInfo = {
    email: "",
    password: "",
  };
  const apiSignIn = async (values, formikActions) => {
    const res = await apiServer.post("/auth/login", {
      ...values,
    });
    console.log(res.data);
    formikActions.resetForm();
    formikActions.setSubmitting(false);
  };
  return (
    <FormComponent>
      <Formik
        initialValues={userInfo}
        validationSchema={validationSchema}
        onSubmit={apiSignIn}
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
          const { email, password } = values;
          return (
            <>
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
              <FormSubmitButton
                tittle={"Sign in"}
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
