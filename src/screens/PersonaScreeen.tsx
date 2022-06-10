import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any,any>{};

export const PersonaScreeen = ({navigation}:Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>PersonaScreeen</Text>

        <Button title='ir Persona' onPress={()=>{navigation.navigate('PersonaScreeen')}}
        ></Button>
        </View>
  )
}
