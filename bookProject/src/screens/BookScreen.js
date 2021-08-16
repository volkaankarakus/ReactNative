import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';

import BookList from '../components/BookList';
const BookScreen = (props) => {
    console.log(props); // stackNavigator ile sarildigi icin icerisinde objeler var(ss'i alindi.)
    
    return (
        <View>
            <TouchableOpacity 
            style = {styles.buttonStyle}
            onPress={ () => {
                props.navigation.navigate('BookDetail'); // click oldugunda BookDetailScreen'inin key'i : BookDetail
            }}
            >
                <Text>Go To Book Detail Screen</Text>
            </TouchableOpacity>
            <BookList/>
        </View>
    )
};

const styles = StyleSheet.create({ //bu sadece css ozelliklerini dogru yazmamiza yardimci bir arac.
    buttonStyle: {
        backgroundColor : 'white',
        borderRadius : 4,
        padding : 5,
        marginHorizontal : 7
    }
}); 

export default BookScreen;