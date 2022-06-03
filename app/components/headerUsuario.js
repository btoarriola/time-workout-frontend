import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
export default function headerUsuario(){
    return(
        <View style={styles.head}>
            <View style={{marginLeft: "100%"}}><MaterialIcons name="add-box" size={30} color="black"  /></View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    head: {
        width: "100%",
        margin: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: 'flex-end'
    }
});