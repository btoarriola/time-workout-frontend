import React from "react";
//import {View, Text, StyleSheet, TouchableOpacity, Image,ScrollView } from "react-native-web";
import {View, Text, StyleSheet, TouchableOpacity, Image,ScrollView } from "react-native";
import { Link } from '@react-navigation/native';


export default function usuarioScreen(){
    return(
        <View style={styles.viewPrincipal}>
            <ScrollView>
            <View style={styles.container}>
                <Image
                    style={styles.imagen}
                    source={require('../assets/b2.png')}
                />
                <View style={styles.textInfo}>
                    <Text style={{fontWeight:"bold", fontSize: 22}}>
                        Usuario
                    </Text>

                    <Link to={{ screen: 'Inicio'}} style={{color: "#23529E", marginTop: 5}}>
                        Cambiar informacion
                    </Link>
                </View>
            </View>
            <View style={{marginTop: 35}}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Mis Favoritos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Mis Retos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Mis Rutinas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Mis Tabatas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Mis Records</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    viewPrincipal:{
        width:"100%",
        height:"100%",
        position: 'absolute'
    },
    imagen: {
        width: 80,
        height: 80,
        borderRadius: 100,
        marginTop: 40,
        marginBottom: 20,
        marginLeft: 30
    },
    container:{
        flexDirection: "row",
    },
    textInfo:{
        marginLeft: 20,
        marginTop: 50
    },
    button:{
        borderRadius: 100,
        height: 32,
        justifyContent: "center",
        marginTop: 23,
        marginHorizontal: "10%",
        width: "80%",
        backgroundColor: "#23529E"
    },
    buttonText:{
        fontWeight:"bold",
        textAlign:"center",
        color: "white"
    }
});