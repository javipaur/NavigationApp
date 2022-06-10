import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { PaginaTresScreen } from './PaginaTresScreen';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any,any>{};

export const PaginaDosScreen = ({navigation}:Props) => {

  const navigator=useNavigation();

  return (
    <View style={styles.globalMargin}>
        <Text>PaginaDosScreen</Text>

        <Button
        title='Ir Pagina 3'
        onPress={()=>{navigation.navigate('PaginaTresScreen')}}></Button>
        
    </View>
  )
}
