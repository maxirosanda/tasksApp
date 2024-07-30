import { StyleSheet, FlatList } from 'react-native'
import CardTask from './CardTask'

const index = ({tasks,handleVisibleModal}) => {
  return (
    <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item})=> <CardTask 
                                    task={item} 
                                    handleVisibleModal={handleVisibleModal}
        />}
    />
  )
}

export default index

const styles = StyleSheet.create({

})