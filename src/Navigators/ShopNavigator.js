import { StyleSheet, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TomaDeServicioScreen from '../screens/TomaDeServicioScreen';
import FormTomaScreen from '../screens/FormTomaScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="RECEPCIÓN Y ENTREGA DE LA UNIDAD DEL CONDUCTOR">
            <Stack.Screen name="RECEPCIÓN Y ENTREGA DE LA UNIDAD DEL CONDUCTOR" component={HomeScreen} />
            <Stack.Screen name="TOMA DE SERVICIO" component={TomaDeServicioScreen} />
            <Stack.Screen name="FORMULARIO" component={FormTomaScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ShopNavigator

const styles = StyleSheet.create({})