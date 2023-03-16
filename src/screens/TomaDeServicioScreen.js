import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const TomaDeServicioScreen = ({navigation}) => {
  return (
    <View>
      <Text>TOMA DE SERVICIO</Text>
      <Button title = "IR A FORMULARIO" onPress = {()=>{
        navigation.navigate("FORMULARIO")
      }}></Button>
    </View>
  )
}

export default TomaDeServicioScreen

const styles = StyleSheet.create({
  screen:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
})