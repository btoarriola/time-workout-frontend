import React from "react";
import {View, Text, StyleSheet, TouchableOpacity,ScrollView } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
export default function RutinaScreen({navigation}){
    return(
        <View style={styles.viewPrincipal}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{paddingBottom: 50,}}>
                    <Text style={styles.subtitulo1}>Mis Rutinas</Text>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('NuevoRutina')}
                     style={styles.primerContenidoBoton}>
                        <Text style={styles.primerContenidoBotonText}
                        
                        >Nueva Rutina</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.primerContenidoBoton2}>
                        <Text style={styles.primerContenidoBotonText}>Ver Rutinas públicas</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.segundoContenido}>
                    <Text style={styles.subtitulo2}>Rutinas</Text>

                    <TouchableOpacity style={styles.segundoContenidoBoton}
                    onPress={() => navigation.navigate('VerRutina')}
                    >
                        <View style={{flexDirection: "row",}}>
                            <View style={styles.textInfo}>
                                <Text style={{fontWeight:"bold", fontSize: 20, marginTop: 3}}>
                                    Nombre del Rutina
                                </Text>
                                <Text style={{color: "#23529E", marginTop: 2,fontSize: 16}}>
                                    Usuario que lo creo
                                </Text>
                            </View>
                            <MaterialIcons name="lock" size={30} color="black" style={{marginRight:25, marginTop:25}}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.segundoContenidoBoton}
                    onPress={() => navigation.navigate('VerRutina')}
                    >
                        <View style={{flexDirection: "row",}}>
                            <View style={styles.textInfo}>
                                <Text style={{fontWeight:"bold", fontSize: 20, marginTop: 3}}>
                                    Nombre del Rutina
                                </Text>
                                <Text style={{color: "#23529E", marginTop: 2,fontSize: 16}}>
                                    Usuario que lo creo
                                </Text>
                            </View>
                            <MaterialIcons name="lock" size={30} color="black" style={{marginRight:25, marginTop:25}}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.segundoContenidoBoton}
                    onPress={() => navigation.navigate('VerRutina')}
                    >
                        <View style={{flexDirection: "row",}}>
                            <View style={styles.textInfo}>
                                <Text style={{fontWeight:"bold", fontSize: 20, marginTop: 3}}>
                                    Nombre del Rutina
                                </Text>
                                <Text style={{color: "#23529E", marginTop: 2,fontSize: 16}}>
                                    Usuario que lo creo
                                </Text>
                            </View>
                            <MaterialIcons name="lock" size={30} color="black" style={{marginRight:25, marginTop:25}}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.segundoContenidoBoton}
                    onPress={() => navigation.navigate('VerRutina')}
                    >
                        <View style={{flexDirection: "row",}}>
                            <View style={styles.textInfo}>
                                <Text style={{fontWeight:"bold", fontSize: 20, marginTop: 3}}>
                                    Nombre del Rutina
                                </Text>
                                <Text style={{color: "#23529E", marginTop: 2,fontSize: 16}}>
                                    Usuario que lo creo
                                </Text>
                            </View>
                            <MaterialIcons name="lock" size={30} color="black" style={{marginRight:25, marginTop:25}}/>
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
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: "8%",
        marginBottom: 20,
        marginTop: 35
    },
    subtitulo2:{
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: "6%",
        marginBottom: 20,
        marginTop: 10
    },
    primerContenidoBoton:{
        borderRadius: 100,
        height: 38,
        justifyContent: "center",
        marginTop: 19,
        marginHorizontal: "9%",
        width: "82%",
        backgroundColor: "#46B60E"
    },
    primerContenidoBoton2:{
        borderRadius: 100,
        height: 38,
        justifyContent: "center",
        marginTop: 30,
        marginHorizontal: "9%",
        width: "82%",
        backgroundColor: "#23529E"
    },
    primerContenidoBotonText:{
        fontSize: 17,
        //fontWeight:"bold",
        textAlign:"left",
        color: "white",
        marginLeft: 30
    },
    segundoContenido:{
        backgroundColor: '#333',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingTop:15,
        paddingBottom: 30

    },
    segundoContenidoBoton:{
        borderRadius: 20,
        justifyContent: "space-between",
        marginTop: 19,
        marginHorizontal: "8%",
        width: "84%",
        height: 80,
        backgroundColor: "#C2D9FC"
    },
    
    textInfo:{
        marginLeft: 20,
        marginTop: 15,
        width: "75%"
    },
});