import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SearchBar from '../Components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen =()=> {
const[term, setTerm] = useState('');

const [results, setResults] = useState('');

const searchApi = async ()=> {
 const response = await yelp.get("/search", {
     param : {
         limit: 50,
         term,
         location : "Berlin"
     }
 });
setResults(response.data.businesses)
}


    return (
        <View>
            <SearchBar
             term={term} 
            onTermChange={setTerm}
            onTermSubmit={searchApi}
            />
            <Text>we have found {results.length} results</Text>
        </View>
    )
}
const styles = StyleSheet.create({

});
export default SearchScreen;