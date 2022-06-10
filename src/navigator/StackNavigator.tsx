import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PaginaUnoScreen } from '../screens/PaginaUnoScreen';
import { PaginaDosScreen } from '../screens/PaginaDosScreen';
import { PaginaTresScreen } from '../screens/PaginaTresScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PaginaUnoScreen" component={PaginaUnoScreen} />
      <Stack.Screen name="PaginaDosScreen" component={PaginaDosScreen} />
      <Stack.Screen name="PaginaTresScreen" component={PaginaTresScreen} />
    </Stack.Navigator>
  )
}
