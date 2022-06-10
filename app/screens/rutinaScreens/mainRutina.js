import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import NewRutina from "./newRutina";
import VerRutina from "./verRutina";
import Rutina from "./rutinaScreen";
const Stack = createStackNavigator()
export default function MainRutina(){
  return(

    <Stack.Navigator>
            <Stack.Screen
                name="Rutina"
                component={Rutina}
            />
            <Stack.Screen
                name="NuevoRutina"
                component={NewRutina}
            />
            <Stack.Screen
                name="VerRutina"
                component={VerRutina}
            />
        </Stack.Navigator>
  );
};