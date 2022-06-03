import React from "react";

//* import navigator
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

//* import screen { login, home }
import Login from "../screens/loginScreen";
import HomeNavigator from "./homeNavigator";

export default function LoginNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home" component={HomeNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
