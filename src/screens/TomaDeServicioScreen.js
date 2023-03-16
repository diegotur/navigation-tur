import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Buttons from '../components/Button'

const TomaDeServicioScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenText}>TOMA DE SERVICIO</Text>
      <Buttons title = "IR A FORMULARIO" onPress = {()=>{
        navigation.navigate("FORMULARIO")
      }}></Buttons>
    </View>
  )
}

export default TomaDeServicioScreen

const styles = StyleSheet.create({
  screen:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "green",

  },
  screenText:{
    fontSize: 56,
    textAlign: "center",
    color: "green",
    borderWidth: 2,
    marginTop: -150,
    backgroundColor: "white",
    marginBottom: 300,
  },
})