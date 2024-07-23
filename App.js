import { StatusBar } from 'expo-status-bar'
import {StyleSheet, View, TextInput, Pressable,Text} from 'react-native'
import ButtonPrimary from './src/components/ButtonPrimary'

const App = () => {

    return(
          <View style={styles.container}>
            <View style={styles.containerInput}>
              <TextInput style={styles.input} placeholder='Ingrese una tarea'/>
              <ButtonPrimary text="Agregar"/>
            </View>
          </View>
    )
}

export default App

const styles = StyleSheet.create({
  container:{
    marginTop:30,
    flex:1
  },
  containerInput:{
    flexDirection:"row",
    padding:10
  },
  input:{
    borderColor:"black",
    borderWidth:1,
    padding:5,
    paddingStart:20,
    flex:2,
    margin:10,
    borderRadius:5
  }
})
