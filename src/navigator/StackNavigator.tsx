import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PaginaUnoScreen } from '../screens/PaginaUnoScreen';
import { PaginaDosScreen } from '../screens/PaginaDosScreen';
import { PaginaTresScreen } from '../screens/PaginaTresScreen';
import { PersonaScreeen } from '../screens/PersonaScreeen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      //initialRouteName='PaginaTresScreen'
      screenOptions={{
        headerStyle:{
          elevation:0,
        },
        cardStyle:{
          backgroundColor:'white'
        }
      }}
    >
      <Stack.Screen name="PaginaUnoScreen" options={{ title:'Pagina 1'}} component={PaginaUnoScreen} />
      <Stack.Screen name="PaginaDosScreen" options={{ title:'Pagina 2'}} component={PaginaDosScreen} />
      <Stack.Screen name="PaginaTresScreen" options={{ title:'Pagina 3'}}component={PaginaTresScreen} />
      <Stack.Screen name="PersonaScreeen" options={{ title:''}}component={PersonaScreeen} />
    </Stack.Navigator>
  )
}
