import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Buttons from '../components/Button'
import Colors from '../constants/Colors'
import { buttonStyle, buttonTextStyle } from '../constants/Styles'
import {Ionicons} from '@expo/vector-icons'


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenText}>RECEPCIÓN Y ENTREGA DE LA UNIDAD DEL CONDUCTOR</Text>
      <Ionicons name = "md-cart" size={24} ></Ionicons>
      <Buttons styleButtonType={styles.button}
        styleButtonTextType={styles.buttonText}
        title="IR A TOMA DE SERVICIO" onPress={() => {
          navigation.navigate("TOMA DE SERVICIO")
        }}></Buttons>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.accent,

  },
  screenText: {
    fontSize: 36,
    textAlign: "center",
    color: Colors.primary,
    borderWidth: 2,
    backgroundColor: "white",
    marginBottom: 300,
  },
  button: {
    ...buttonStyle,
    marginTop: 130,
  },
  buttonText: {
    ...buttonTextStyle,
  }

})