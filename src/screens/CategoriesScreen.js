import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const CategoriesScreen = ({navigation}) => {
  return (
    <View>
      <Text>CategoriesScreen</Text>
      <Button title = "Ir a Products" onPress = {()=>{
        navigation.navigate("Products")
      }}></Button>
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  screen:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
})