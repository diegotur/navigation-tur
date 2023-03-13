import { StyleSheet, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoryBreadScreen from '../screens/CategoryBreadScreen';
import BreadDetailScreen from '../screens/BreadDetailScreen';
import CategoriesScreen from '../screens/CategoriesScreen';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName = "Home">
            <Stack.Screen name = "Home" component = {CategoryBreadScreen}></Stack.Screen>
            <Stack.Screen name = "List" component = {CategoriesScreen}></Stack.Screen>
            <Stack.Screen name = "Detail" component = {BreadDetailScreen}></Stack.Screen>
        </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default ShopNavigator

const styles = StyleSheet.create({})