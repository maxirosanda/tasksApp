import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonPrimary from '../ButtonPrimary'

const CardTask = ({task,handleVisibleModal}) => {
  return (
    <View style={styles.container} key={task.id}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>ID: {task.id}</Text>
          <Text style={styles.text}>Nombre: {task.name}</Text>
        </View>
        <ButtonPrimary
            style={{backgroundColor:"blue"}}
            text="Borrar" 
            onPress={() => handleVisibleModal(task.id)}
        />
    </View>
  )
}

export default CardTask

const styles = StyleSheet.create({
    container:{
        width:"90%",
        backgroundColor:"red",
        marginHorizontal:"5%",
        marginVertical:10,
        padding:20,
        borderRadius:5
    },
    textContainer:{
      flexDirection:"column",
      gap:10
    },
    text:{
        color:"white",
        fontWeight:"bold"
    }
})