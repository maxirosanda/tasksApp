import { StatusBar } from 'expo-status-bar'
import {StyleSheet, View, TextInput} from 'react-native'
import ButtonPrimary from './src/components/ButtonPrimary'
import TasksListContainer from './src/components/TasksListContainer'
import { useState } from 'react'
import uuid from 'react-native-uuid'
import ModalPrimary from './src/components/ModalPrimary'
import ContainerInput from './src/components/ContainerInput'



const App = () => {
    
    const [taskName,setTaskName] = useState("")
    const [tasks, setTasks] = useState([])
    const [visibleAddTaskModal,setVisibleAddTaskModal] = useState(false)
    const [visibleDeleteTaskModal,setVisibleDeleteTaskModal] = useState(false)
    const [idTaskDelete,setIdTaskDelete] = useState("")

    const handleTasksName = (t) => {
      setTaskName(t)
    }

    const handleVisibleAddTaskModal = () => {
      setVisibleAddTaskModal(!visibleAddTaskModal)
    }
    const handleVisibleDeleteTaskModal = (id="") => {
      setIdTaskDelete(id)
      setVisibleDeleteTaskModal(!visibleDeleteTaskModal)
    }
    const handleAddTask = () => {
      const newTask = {
        id:uuid.v4(),
        name:taskName
      }
      setTasks([...tasks,newTask])
      setTaskName("")
      handleVisibleAddTaskModal()
      
    }

    const handleDeleteTask = (id) => {
      setTasks(tasks.filter(task => task.id !== id))
      handleVisibleDeleteTaskModal()
    }

    return(
          <>
          <View style={styles.container}>
                <ContainerInput 
                  taskName={taskName} 
                  handleVisibleModal={handleVisibleAddTaskModal}
                  handleTasksName={handleTasksName}
                />
                <TasksListContainer 
                  tasks={tasks}
                  handleVisibleModal={handleVisibleDeleteTaskModal}
                  />
           
            </View>
            <ModalPrimary 
              text="Quiere agregar una tarea?"
              visible={visibleAddTaskModal}
              handleVisibleModal={handleVisibleAddTaskModal}
              handleModal = {handleAddTask}
            />
               <ModalPrimary 
              text="Quiere borrar la tarea?"
              visible={visibleDeleteTaskModal}
              handleVisibleModal={handleVisibleDeleteTaskModal}
              handleModal = {()=>handleDeleteTask(idTaskDelete)}
            />
          </>
    )
}

export default App

const styles = StyleSheet.create({
  container:{
    marginTop:30,
    flex:1
  }
})
