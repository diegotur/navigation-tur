import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FormTomaScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenText}>FORMULARIO</Text>
      <Image source={require('../..assets/Tome.png')}/>
    </View>
  )
}

export default FormTomaScreen

const styles = StyleSheet.create({
  screen:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "green"
  },
  screenText:{
    fontSize: 56,
    textAlign: "center",
    color: "green",
    borderWidth: 2,
    marginTop: -350,
    backgroundColor: "white",
    marginBottom: 300,
  },
})