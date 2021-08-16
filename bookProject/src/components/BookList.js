import React from 'react';
import {StyleSheet,View,Text,FlatList} from 'react-native';
import book from '../../data/books.json';

const BookList = (props) => {
    return (
        <View>
            <FlatList 
                /* 
                    horizontal //FLATLIST'I YATAY YAPMA
                    showsHorizontalScrollIndicator={false} // YATAY LISTEDE KAYDIRIRKEN SCROLL'U SİLME VE DAHA PROFESYONEL GORUNTU ELDE ETME
                */
                data ={book} 
                /*
                renderItem={(element) => {
                    <Text> 
                        {element.item.title} 
                    </Text>                            diyebilirdik. ES6'daki kisa yol asagida :
                }}
                */ 
               renderItem = {({item}) => {
                   return (
                        <Text style = {styles.textStyle}>{item.title}</Text>
                    );
               }}
               keyExtractor = { (book) => book.title } // keyExtractor'da propa verilen book herbir elemani yine map ve renderItem gibi gezer ve cagirir.
                                                        // key verilmesi gerektigi dosya icinde ss'lerde kayitli.
                                                        // title'a gore key atadik, cunku herbir title birbirinden farkli.
            /> 
        </View>
        );
}

/*
flatList'in olmazsa olmazi 2 tane prop'u var.
ilki : data
ikincisi : renderItem (map fonksiyonu gibi elemanlari teker teker gezer)
            renderItemda, datanin her bir elemani icin Text donucek. O yuzden textte yazdik.
*/


const styles = StyleSheet.create({
    textStyle : {
        marginVertical : 50 // asagiya ve yukariya margin ekler.
    }
});

export default BookList;

