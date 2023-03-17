import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Buttons from '../components/Button'
import Colors from '../constants/Colors'
import { buttonStyle, buttonTextStyle } from '../constants/Styles'

const FormTomaScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenText}>FORMULARIO</Text>
      <Image style={styles.image} source={require('../../assets/Tome.png')} />
      <Buttons styleButtonType={styles.button}
        styleButtonTextType={styles.buttonText}
        title="VOLVER" onPress={() => {
          navigation.navigate("RECEPCIÓN Y ENTREGA DE LA UNIDAD DEL CONDUCTOR")
        }}></Buttons>
    </View>
  )
}

export default FormTomaScreen

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
    marginTop: -50,
    backgroundColor: "white",
    marginBottom: 100,
  },
  button: {
    ...buttonStyle,
  },
  buttonText: {
    ...buttonTextStyle,
  },
  image: {
    marginBottom: 30,
  }
})