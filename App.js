import { StatusBar } from 'expo-status-bar'
import {StyleSheet, View, TextInput, Text, ScrollView,FlatList} from 'react-native'
import ButtonPrimary from './src/components/ButtonPrimary'
import { useEffect, useState } from 'react'
import uuid from 'react-native-uuid'
import CardTask from './src/components/CardTask'


const App = () => {
    
    const [taskName,setTaskName] = useState("")
    const [tasks, setTasks] = useState([])


    const handleAddTask = () => {
      const newTask = {
        id:uuid.v4(),
        name:taskName
      }
      setTasks([...tasks,newTask])
      setTaskName("")
      
    }

    return(
          <View style={styles.container}>
            <View style={styles.containerInput}>
              <TextInput 
                style={styles.input} 
                placeholder='Ingrese una tarea'
                value={taskName}
                onChangeText={setTaskName}
              />
              <ButtonPrimary onPress={handleAddTask} text="Agregar"/>
            </View>
            <FlatList
              data={tasks}
              keyExtractor={item => item.id}
              renderItem={({item})=> <CardTask task={item}/>}
            />

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
