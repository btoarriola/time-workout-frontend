import React from "react";
//import {View, Text, StyleSheet, TouchableOpacity, Image,ScrollView } from "react-native-web";
import {View, Text, StyleSheet, TouchableOpacity, Image,ScrollView } from "react-native";
export default function recordScreen(){
    return(
        <View style={styles.viewPrincipal}>
            <ScrollView>
                <View style={{paddingBottom: 50,}}>
                    <Text style={styles.subtitulo1}>Mis Records</Text>
                    <TouchableOpacity style={styles.segundoContenidoBoton}>
                        <Text style={styles.segundoContenidoBotonText}>Nuevo Record</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tercerContenido}>
                    <Text style={styles.subtitulo2}>Retos</Text>

                    <TouchableOpacity style={styles.tercerContenidoBoton}>
                        <View style={styles.textInfo}>
                            <Text style={{fontWeight:"bold", fontSize: 15}}>
                                Nombre del Record
                            </Text>
                            <Text style={{color: "#23529E", marginTop: 2}}>
                                Usuario que lo creo
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    viewPrincipal:{
        backgroundColor: '#F2F2F2',
        flex:1,
        width:"100%",
        height:"100%",
        position: 'absolute'
    },
    subtitulo1:{
        color: '#222',
        fontSize: 29,
        fontWeight: 'bold',
        marginLeft: "8%",
        marginBottom: 20,
        marginTop: 35
    },
    subtitulo2:{
        color: '#fff',
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft: "6%",
        marginBottom: 20
    },
    segundoContenidoBoton:{
        borderRadius: 100,
        height: 38,
        justifyContent: "center",
        marginTop: 19,
        marginHorizontal: "9%",
        width: "82%",
        backgroundColor: "#46B60E"
    },
    segundoContenidoBotonText:{
        fontSize: 17,
        //fontWeight:"bold",
        textAlign:"left",
        color: "white",
        marginLeft: 30
    },
    tercerContenido:{
        backgroundColor: '#333',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingTop:15,
        paddingBottom: 30

    },
    tercerContenidoBoton:{
        borderRadius: 20,
        justifyContent: "center",
        marginTop: 19,
        marginHorizontal: "8%",
        width: "84%",
        backgroundColor: "#aaa"
    },
    
    textInfo:{
        marginLeft: 20,
        marginTop: 3
    },
});