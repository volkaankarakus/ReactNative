import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';

import BookList from '../components/BookList';
const BookScreen = (props) => {
    console.log(props); // stackNavigator ile sarildigi icin icerisinde objeler var,prototype mantigi gibi(ss'i alindi.)
    
    return (
        <View> 
            <BookList /> 
        </View>
    )
};
 
const styles = StyleSheet.create({ //bu sadece css ozelliklerini dogru yazmamiza yardimci bir arac.
    
}); 

export default BookScreen;