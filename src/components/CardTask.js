import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardTask = ({task}) => {
  return (
    <View style={styles.container} key={task.id}>
        <Text>{task.id}</Text>
        <Text style={styles.text}>{task.name}</Text>
    </View>
  )
}

export default CardTask

const styles = StyleSheet.create({
    container:{
        width:"80%",
        backgroundColor:"red",
        marginHorizontal:"10%",
        marginVertical:10,
        padding:20,
        borderRadius:5
    },
    text:{
        color:"white",
        fontWeight:"bold"
    }
})