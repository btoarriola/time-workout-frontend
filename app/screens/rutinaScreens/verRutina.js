import React from "react";
import {View, Text, StyleSheet,TextInput, TouchableOpacity, Dimensions, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {MaterialIcons} from '@expo/vector-icons';
export default function VerRutina({navigation}){
    const ancho= Dimensions.get('window').width/1.6
    return(
        <View style={styles.viewPrincipal}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <LinearGradient colors={['#23529E','#44B115']} locations={[0.3,0.7]}>
                <View style={{height: ancho}}>
                    <View style={styles.cabezaView}><Text style={styles.titulo}>Titulo del Ejercicio</Text></View>
                </View>
            </LinearGradient>
            <View style={{flexDirection: "row", marginTop: 20, }}>
                <Text style={styles.subtitulo1}>Privado</Text>
                <TouchableOpacity style={styles.botonEdit}>
                <MaterialIcons name="edit" size={23} color="black"/>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.subtitulo2}>Descripcion</Text>
                <Text style={styles.textarea}>
                    hhhasqwahha hhhjkhashha hhhashha hhhashha ejrocp miie sas khhjgfke d hhhashha hhhashha hhhashha hhhashha 
                    ejrocp miie sas kke d 
                </Text>
                <Text style={styles.subtitulo2}>Tiempo</Text>
                <View style={styles.textTiempo}>
                    <Text style={styles.textTiempoInput}>00</Text>
                    <Text style={styles.textTiempoInputDot}>:</Text>
                    <Text style={styles.textTiempoInput}>00</Text>
                    <Text style={styles.textTiempoInputDot}>:</Text>
                    <Text style={styles.textTiempoInput}>00</Text>
                </View>
                <View style={{marginVertical: 20}}>
              <TouchableOpacity style={styles.botonCrear}>
                <Text style={styles.botonCrearText}>Iniciar Record</Text>
              </TouchableOpacity>
            </View>
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
        backgroundColor: '#F2F2F2',
        height: (Dimensions.get('window').width/2.5)/2,
        marginTop: (Dimensions.get('window').width/1.16)/2,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,

    },
    titulo:{
        marginTop: 25,
        marginLeft: 15,
        fontSize: 30,
        fontWeight: 'bold'
    },
    subtitulo1:{
        color: '#46B60E',
        fontSize: 19,
        fontWeight: 'bold',
        marginLeft: "5%",
        marginBottom: 5,
        width: "80%",
      },
    subtitulo2:{
        color: '#222',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: "5%",
        marginTop: 35,
        width: "80%",
      },
    botonEdit:{
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        width:35,
        height: 30,
      },
    textarea: {

        width: "90%",
        marginTop: 5,
        marginHorizontal: "5%",
        paddingRight:5,
        paddingVertical: 9,
        textAlignVertical: 'top',
      },
    textTiempo: {
        width: "34%",
        marginTop: 10,
        marginLeft: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: 'center'
      },
    textTiempoInput: {
        width: 30,
        height:20,
        paddingLeft: 5,
        fontSize: 19,
      },
    textTiempoInputDot: { 
        color: '#46B60E',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 0.8,
      },
    botonCrear:{
        borderRadius: 100,
        height: 38,
        justifyContent: "center",
        marginTop: 30,
        marginHorizontal: "5%",
        width: "90%",
        backgroundColor: "#23529E"
      },
    botonCrearText:{
        fontSize: 17,
        //fontWeight:"bold",
        textAlign:"center",
        color: "white",
      },
});