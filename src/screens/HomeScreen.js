import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Buttons from '../components/Button'

const HomeScreen = ({navigation}) => {
  return (
    <View style = {styles.screen}>
      <Text style = {styles.screenText}>RECEPCIÓN Y ENTREGA DE LA UNIDAD DEL CONDUCTOR</Text>
      <Buttons title = "IR A TOMA DE SERVICIO" onPress = {()=>{
        navigation.navigate("TOMA DE SERVICIO")
      }}></Buttons>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  screen:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "green",
      
  },
  screenText:{
    fontSize: 36,
    textAlign: "center",
    color: "green",
    borderWidth: 2,
    marginTop: -150,
    backgroundColor: "white",
    marginBottom: 300,
  },
    
})