import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';
const SearchBar =({ term, onTermChange, onTermSubmit })=> {
    return (
        <View style ={styles.input}>
            <Feather name= 'search' style={styles.iconStyle} />
            <TextInput style ={styles.textinput} 
            autoCapitalize = 'none'
            autoCorrect = {false}
            placeholder = 'Search'
            value = {term} 
            onChangeText={onTermChange}
            onEndEditing = {onTermSubmit}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    input : {
        backgroundColor: '#F0EEEE',
        borderRadius: 5,
        margin: 15,
        height:50,
        flexDirection: 'row',
        }, 

    iconStyle : {
        fontSize : 35,
        alignSelf: 'center',
        marginHorizontal: 15
    },

      textinput :  {
          flex: 1, 
          fontSize: 20, 
     }

});
export default SearchBar;