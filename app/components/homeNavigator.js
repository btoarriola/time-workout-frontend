import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialIcons} from '@expo/vector-icons';

const Tab= createBottomTabNavigator();
import Record from "../screens/recordScreens/mainRecord";
import Rutina from "../screens/rutinaScreens/mainRutina";
import Inicio from "../screens/inicioScreens/inicioScreen";
import Tabata from "../screens/tabataScreens/tabataScreen";
import Usuario from "../screens/usuarioScreens/usuarioScreen";
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
                tabBarLabel: 'Record',
                headerShown: false,
                tabBarIcon: ()=> <MaterialIcons name="alarm-on" size={30} color="#23529E"/>
            }}
            />
            <Tab.Screen 
            name="Rutina" component={Rutina}
            options={{
                tabBarLabel: 'Rutina',
                headerShown: false,
                tabBarIcon: ()=> <MaterialIcons name="timer" size={30} color="#23529E"/>
            }}
            />
            <Tab.Screen 
            name="Inicio" component={Inicio}
            options={{
                tabBarLabel: 'Inicio',
                headerShown: false,
                tabBarIcon: ()=> <MaterialIcons name="home" size={30} color="#23529E"/>
            }}
            />
            <Tab.Screen 
            name="Tabata" component={Tabata}
            options={{
                tabBarLabel: 'Tabata',
                headerShown: false,
                tabBarIcon: ()=> <MaterialIcons name="directions-run" size={30} color="#23529E"/>
            }}
            />
            <Tab.Screen 
            name="Usuario" component={Usuario}
            options={{
                tabBarLabel: 'Usuario',
                headerTitle: () => <HeaderUsuario/>,
                tabBarIcon: ()=> <MaterialIcons name="face" size={30} color="#23529E"/>
            }}
            />
        </Tab.Navigator>
    );
}