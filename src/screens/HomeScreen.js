import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View style = {styles.screen}>
      <Text style = {styles.screenText}>RECEPCIÓN Y ENTREGA DE LA UNIDAD DEL CONDUCTOR</Text>
      <Pressable style = {styles.screenButton} title = "IR A TOMA DE SERVICIO" onPress = {()=>{
        navigation.navigate("TOMA DE SERVICIO")
      }}></Pressable>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  screen:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  screenText:{
    fontSize: 20,
    color: "white",
  },
  screenButton:{
  }
})