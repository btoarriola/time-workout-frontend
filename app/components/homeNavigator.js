import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab= createBottomTabNavigator();
import Record from "../screens/recordScreen";
import Rutina from "../screens/rutinaScreen";
import Inicio from "../screens/inicioScreen";
import Tabata from "../screens/tabataScreen";
import Usuario from "../screens/usuarioScreen";
import HeaderUsuario from "./headerUsuario";

export default function HomeNavigator() {
    return(
        <Tab.Navigator
        initialRouteName="Inicio"
        backBehavior="oder"
        screenOptions={{tabBarActiveTinColor: '#23529E',}}
        >
            <Tab.Screen 
            name="Record" component={Record}
            options={{
                tabBarLabel: 'Record'
            }}
            />
            <Tab.Screen 
            name="Rutina" component={Rutina}
            options={{
                tabBarLabel: 'Rutina'
            }}
            />
            <Tab.Screen 
            name="Inicio" component={Inicio}
            options={{
                tabBarLabel: 'Inicio',
                headerShown: false,
            }}
            />
            <Tab.Screen 
            name="Tabata" component={Tabata}
            options={{
                tabBarLabel: 'Tabata'
            }}
            />
            <Tab.Screen 
            name="Usuario" component={Usuario}
            options={{
                tabBarLabel: 'Usuario',
                headerTitle: () => <HeaderUsuario/>
            }}
            />
        </Tab.Navigator>
    );
}