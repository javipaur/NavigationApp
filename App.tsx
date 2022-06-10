import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { StackNavigator} from './src/navigator/StackNavigator';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}
export default App;
