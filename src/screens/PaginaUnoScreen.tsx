import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';
import { PersonaScreeen } from './PersonaScreeen';


interface Props extends StackScreenProps<any, any> { };


export const PaginaUnoScreen = ({ navigation }: Props) => {

  return (
    <View style={styles.globalMargin}>

      <Text style={styles.title}>PaginaUnoScreen</Text>


      <Button title='ir Pagina 2'
        onPress={() => { navigation.navigate('PaginaDosScreen') }}></Button>

      {/* <Button title='ir Persona' onPress={() => { navigation.navigate('PersonaScreeen') }}
      ></Button> */}


      <Text>Navegar con argumentos</Text>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity  style={{...styles.botonGrande,backgroundColor:'#5856D6'}}
       onPress={() => { navigation.navigate('PersonaScreeen',{
        id:1,
        nombre:'Pedro'}) }}
        >
       <Text style={styles.botonGrandeTexto}>Pedro</Text>
      </TouchableOpacity>

      <TouchableOpacity  style={{...styles.botonGrande,backgroundColor:'#ff9427'}}
       onPress={() => { navigation.navigate('PersonaScreeen',{
        id:2,
        nombre:'Maria'}) }}
        >
       <Text style={styles.botonGrandeTexto}>Maria</Text>
      </TouchableOpacity>
      </View>
      

    </View>
  )
}
