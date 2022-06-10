import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';


interface Props extends StackScreenProps<any,any>{};

export const PaginaTresScreen = ({navigation}:Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>PaginaTresScreen</Text>


      <Button title='Regresar' onPress={()=>{navigation.pop()}}></Button>

      
      <Button title='Ir a pagina 1' onPress={()=>{navigation.popToTop()}}></Button>
    </View>
  )
}
