import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Buttons from '../components/Button'
import Colors from '../constants/Colors'
import { buttonStyle, buttonTextStyle } from '../constants/Styles'

const TomaDeServicioScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenText}>TOMA DE SERVICIO</Text>
      <Buttons styleButtonType={styles.button}
        styleButtonTextType={styles.buttonText} title="IR A FORMULARIO" onPress={() => {
          navigation.navigate("FORMULARIO")
        }}></Buttons>
    </View>
  )
}

export default TomaDeServicioScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.accent,


  },
  screenText: {
    fontSize: 56,
    textAlign: "center",
    color: Colors.primary,
    borderWidth: 2,
    backgroundColor: "white",
    marginBottom: 300,
  },
  button: {
    ...buttonStyle,
    marginTop: 50,
  },
  buttonText: {
    ...buttonTextStyle,
  },
})