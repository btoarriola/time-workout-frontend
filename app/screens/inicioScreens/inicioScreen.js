import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {MaterialIcons} from '@expo/vector-icons';

export default function inicioScreen(){
    const ancho= Dimensions.get('window').width/1.25

    return(
        <View style={styles.viewPrincipal}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <LinearGradient colors={['#23529E','#44B115']} locations={[0.08,0.65]}>
                <View style={{height: ancho}}>
                    <View style={styles.cabezaView}><Text style={styles.titulo}>TIME WORKOUT</Text></View>
                    <Image
                    style={styles.cabezaImagen}
                    source={require('../b2.png')}
                    />
                </View>
            </LinearGradient>
            <View style={styles.intento}>
                <View style={styles.head}>
                    <View style={{flexDirection:"row",}}>
                    <Image
                        style={styles.headImagen}
                        source={require('../b2.png')}
                    />
                    <Text style={styles.headTitulo}>TIME WORKOUT</Text>
                    </View>
                    <MaterialIcons name="add-box" size={30} color="black" style={{marginRight:15, marginTop:10}}/>
                </View>
            </View>
            <View style={{backgroundColor:'#fff', margin: 0}}>
                <View style={styles.primerContenido}>
                    <TouchableOpacity style={styles.PrimerContenidoBoton}>
                        <Image
                            style={styles.PrimerContenidoBotonImage}
                            source={require('../b1.png')}
                        />
                        <Text style={styles.PrimerContenidoBotonText}>Ejercicios Favoritos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.PrimerContenidoBoton}>
                        <Image
                            style={styles.PrimerContenidoBotonImage}
                            source={require('../b2.png')}
                        />
                        <Text style={styles.PrimerContenidoBotonText}>Ejercicios Publicos</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{paddingBottom: 50,}}>
                <Text style={styles.subtitulo1}>Crear</Text>
                <TouchableOpacity style={styles.segundoContenidoBoton}>
                    <Text style={styles.segundoContenidoBotonText}>Nueva Rutinas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.segundoContenidoBoton}>
                    <Text style={styles.segundoContenidoBotonText}>Nueva Tabatas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.segundoContenidoBoton}>
                    <Text style={styles.segundoContenidoBotonText}>Nuevo Records</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tercerContenido}>
                <Text style={styles.subtitulo2}>Retos</Text>
                <TouchableOpacity style={styles.tercerContenidoBoton}>
                    <Text style={styles.tercerContenidoBotonText}>Nuevo Reto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tercerContenidoBoton}>
                    <Text style={styles.tercerContenidoBotonText}>Buscar Reto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tercerContenidoBoton}>
                    <Text style={styles.tercerContenidoBotonText}>Mis Retos</Text>
                </TouchableOpacity>
            </View>
            
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    
    viewPrincipal:{
        backgroundColor: '#F2F2F2',
        //flex:1,
        width:"100%",
        height:"100%",
        position: 'absolute'
    },
    cabezaView:{
        backgroundColor: 'white',
        height: (Dimensions.get('window').width/1.4)/2,
        marginTop: (Dimensions.get('window').width/1.1)/2,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center'

    },
    cabezaImagen: {
        width:  Dimensions.get('window').width/2.25,
        height: Dimensions.get('window').width/2.25,
        borderRadius: 300,
        position: 'absolute',
        justifyContent: 'center',
        marginTop: '25%',
        marginHorizontal: Dimensions.get('window').width/3.6,
        borderWidth: 10,
        borderColor: "white",
    },
    titulo:{
        marginTop: '25%',
        fontSize: 34,
        fontWeight: 'bold'
    },
    subtitulo1:{
        color: '#222',
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft: "6%",
        marginBottom: 10
    },
    subtitulo2:{
        color: '#fff',
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft: "6%",
        marginBottom: 25,
        marginTop: 20
    },
    intento: {
        height: 50,
    },
    head:{
        width:"100%",
        backgroundColor:"#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 50,
        borderBottomWidth: 1,
        borderWidth: 0,
        borderColor:"#aaa",
        //opacity: 0,
        
    },
    headTitulo:{
        marginTop: 9,
        marginLeft: 1,
        fontSize: 22,
        fontWeight: 'bold'
    },
    headImagen:{
        width: 30, 
        height: 30, 
        borderRadius: 100,
        margin: 10
    },
    primerContenido:{
        backgroundColor: "#F2F2F2",
        width:"100%",
        flexDirection: "row",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    PrimerContenidoBoton:{
        justifyContent: "center",
        marginTop: 30,
        marginLeft: "2.5%",
        marginBottom: 35,
        width: "46%",
        height: (Dimensions.get('window').width*0.46)/1.5 //el 1.5 es constante
    },
    PrimerContenidoBotonImage:{
        borderRadius: 15,
        width: "100%",
        height: "100%"
    },
    PrimerContenidoBotonText:{
        position: 'absolute',
        fontSize: 16,
        fontWeight: 'bold',
        color: "#fff",
        

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
        paddingBottom: 50

    },
    tercerContenidoBoton:{
        borderRadius: 100,
        height: 38,
        justifyContent: "center",
        marginTop: 25,
        marginBottom: 5,
        marginHorizontal: "9%",
        width: "82%",
        backgroundColor: "#23529E"
    },
    tercerContenidoBotonText:{
        fontSize: 17,
        //fontWeight:"bold",
        textAlign:"left",
        color: "white",
        marginLeft: 30
    },
});
