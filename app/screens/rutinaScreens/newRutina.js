import React from "react";
import {View, Text, Button, TextInput, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import { RadioButton } from 'react-native-paper';

export default function NewRutina({navigation}){
  //const [checked, setChecked] = React.useState('first');
  const [value, setValue] = React.useState('private');
    return(
        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TextInput
              placeholder="Titulo del Ejercicio"
              placeholderTextColor={"#444"}
              style={styles.textInput1}
            />
            <Text style={styles.subtitulo}>Descripcion</Text>
            <TextInput
              multiline={true}
              style={styles.textarea}
            />
            <Text style={styles.subtitulo}>Tiempo</Text>
            <View style={{flexDirection: "row", alignItems:"center"}}>
              <Text style={styles.Tiemposubtitulo}>Ejecución</Text>
              <View style={styles.textTiempo}>
                <TextInput keyboardType="numeric" placeholder="00" style={styles.textTiempoInput}/>
                <Text style={styles.textTiempoInputDot}>:</Text>
                <TextInput keyboardType="numeric" placeholder="00" style={styles.textTiempoInput}/>
                <Text style={styles.textTiempoInputDot}>:</Text>
                <TextInput keyboardType="numeric" placeholder="00" style={styles.textTiempoInput}/>
              </View>
            </View>

            <View style={{flexDirection: "row", alignItems:"center"}}>
              <Text style={styles.Tiemposubtitulo}>Descanso</Text>
              <View style={styles.textTiempo}>
                <TextInput keyboardType="numeric" placeholder="00" style={styles.textTiempoInput}/>
                <Text style={styles.textTiempoInputDot}>:</Text>
                <TextInput keyboardType="numeric" placeholder="00" style={styles.textTiempoInput}/>
                <Text style={styles.textTiempoInputDot}>:</Text>
                <TextInput keyboardType="numeric" placeholder="00" style={styles.textTiempoInput}/>
              </View>
            </View>
            <View style={{flexDirection: "row", alignItems:"center", marginTop: 15}}>
              <Text style={styles.Tiemposubtitulo}>Ejercicio 1: </Text>
                <TextInput placeholder="Descripcion" style={styles.textEjercicioDesc}/>
            </View>
            <View style={{flexDirection: "row", alignItems:"center"}}>
              <Text style={styles.Tiemposubtitulo}>Ejercicio 2: </Text>
                <TextInput placeholder="Descripcion" style={styles.textEjercicioDesc}/>
            </View>
            <View style={{flexDirection: "row", alignItems:"center"}}>
              <Text style={styles.Tiemposubtitulo}>Ejercicio 3: </Text>
                <TextInput placeholder="Descripcion" style={styles.textEjercicioDesc}/>
            </View>
            <View style={{flexDirection: "row", alignItems:"center"}}>
              <Text style={styles.Tiemposubtitulo}>Ejercicio 4: </Text>
                <TextInput placeholder="Descripcion" style={styles.textEjercicioDesc}/>
            </View>
            <View style={{flexDirection: "row", alignItems:"center"}}>
              <Text style={styles.Tiemposubtitulo}>Ejercicio 5: </Text>
                <TextInput placeholder="Descripcion" style={styles.textEjercicioDesc}/>
            </View>
        
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
              <View style={styles.radioButton}>
                <RadioButton value="private" color="#46B60E"/>
                <Text style={styles.radioText}>Privada</Text>
              </View>
              <View style={styles.radioButton}>
                <RadioButton value="public" color="#46B60E"/>
                <Text style={styles.radioText}>Publica</Text>
              </View>
            </RadioButton.Group>
            <View style={{marginTop: 20, marginBottom: 5}}>
              <TouchableOpacity style={styles.botonCrear}>
                <Text style={styles.botonCrearText}>Crear Record</Text>
              </TouchableOpacity>
            </View>
            </ScrollView>      
        </View>
    );
}

const styles = StyleSheet.create({
  textInput1: {
    color: "#222",
    width: "90%",
    height: 50,
    marginTop: 25,
    marginBottom: 20,
    marginHorizontal: "5%",
    fontSize: 25,
    fontWeight: 'bold',
    borderBottomWidth: 0.8,
    borderColor: "#46B60E",
    paddingLeft: 5,
  },
  textarea: {
    color: "#000",
    backgroundColor: "#fff",
    width: "90%",
    height: 85,
    marginTop: 20,
    marginHorizontal: "5%",
    borderWidth: 0.5,
    borderColor: "#d1d1d1",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 9,
    textAlignVertical: 'top',
  },
  textTiempo: {
    width: "34%",
    marginTop: 5,
    marginLeft: "5%",
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: 'center',
  },
  textTiempoInput: {
    width: 30,
    height:20,
    borderBottomWidth: 0.8,
    borderColor: "#46B60E",
    paddingLeft: 5,
    fontSize: 19,
  },
  textTiempoInputDot: { 
    color: '#46B60E',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 0.8,
  },
  subtitulo:{
    color: '#222',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: "8%",
    marginBottom: 5,
    marginTop: 35
  },
  Tiemposubtitulo:{
    color: '#222',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: "8%",
    marginTop:22,
    marginBottom: 20,
    height:20,
  },
  textEjercicioDesc: {
    width: "64%",
    height:20,
    borderBottomWidth: 0.8,
    borderColor: "#46B60E",
    paddingLeft: 5,
    fontSize: 19,
  },
  radioButton: {
    width: "90%",
    marginHorizontal: "5%",
    flexDirection: "row",
    alignItems: 'center'
  },
  radioText:{
    fontSize: 15,
    marginLeft: 3,
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
      textAlign:"center",
      color: "white",
  },
});