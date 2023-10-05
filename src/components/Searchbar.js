import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const Searchbar = ({onSearch}) => {
    const [searchText,setSearchText] = useState('');

    const handleSearch = () =>{
        onSearch(searchText)
    }
  return (
    <View style={styles.container}>
     <TextInput 
     style={styles.input}
     placeholder='Search here...'
     onChangeText={(text) => setSearchText(text)}
     value={searchText}
     />
     <Button title='Saerch' onPress={handleSearch} />
    </View>
  )
}

export default Searchbar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
      },
      input: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginRight: 10,
      },
})