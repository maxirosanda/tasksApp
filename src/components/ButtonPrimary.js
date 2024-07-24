import { StyleSheet,Pressable,Text } from 'react-native'

const ButtonPrimary = ({text, onPress}) => {

  return (
            <Pressable onPress={onPress} style={styles.button}>
                <Text style={styles.textButton}>{text}</Text>
            </Pressable>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({
    button:{
        padding:20,
        backgroundColor:"red",
        flex:1,
        margin:10,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5
      },
      textButton:{
        color:"white",
        fontSize:18,
        fontWeight:"bold"
      }
})