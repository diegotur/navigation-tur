import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const CategoryBreadScreen = ({navigation}) => {
  return (
    <View>
      <Text>CategoryBreadScreen</Text>
      <Button title = "Ir a Detail" onPress = {()=>{
        navigation.navigate("Detail")
      }}></Button>
    </View>
  )
}

export default CategoryBreadScreen

const styles = StyleSheet.create({
  screen:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
})