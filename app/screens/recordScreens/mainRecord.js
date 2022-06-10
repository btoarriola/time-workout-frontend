import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import NewRecord from "./newRecord";
import VerRecord from "./verRecord";
import Record from "./recordScreen";
const Stack = createStackNavigator()
export default function MainRecord(){
  return(

    <Stack.Navigator>
            <Stack.Screen
                name="Record"
                component={Record}
            />
            <Stack.Screen
                name="NuevoRecord"
                component={NewRecord}
            />
            <Stack.Screen
                name="VerRecord"
                component={VerRecord}
            />
        </Stack.Navigator>
  );
};