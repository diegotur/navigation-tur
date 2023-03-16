import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FormTomaScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>FORMULARIO</Text>
    </View>
  )
}

export default FormTomaScreen

const styles = StyleSheet.create({
  screen:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
})