import React from "react";

//* import navigator
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

//* import screen { logIn, home }
import LogIn from "../screens/loginScreen";
import SignUp from "../screens/signUPScreen";
import HomeNavigator from "./homeNavigator";


export default function LoginNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="login"
      >
        <Stack.Screen name="login" component={LogIn} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="home" component={HomeNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
