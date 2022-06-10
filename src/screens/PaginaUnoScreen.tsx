import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';


interface Props extends StackScreenProps<any,any>{};


export const PaginaUnoScreen = ({navigation}:Props) => {

  return (
    <View style={styles.globalMargin}>
        <Text>PaginaUnoScreen</Text>
        <Button title='ir Pagina 2'
        onPress={()=>{navigation.navigate('PaginaDosScreen')}}></Button>
    </View>
  )
}
