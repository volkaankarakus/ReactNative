import React from 'react';
import {View, Text} from 'react-native';


// Item'in tek amaci uygulamaya sadece styling eklemek
const Item = (props) => {

    // props.children : herhangi bir component'i baska bir component'a gectigimiz zaman, bu gectigimiz component'a 
                         // props objesi icinde "props.children" olarak ulasabiliyoruz.
    return <View style={styles.viewStyle}>
                {props.children} 
        </View>
}

/*
CarDetail'daki asagidaki kodda Item'in children'i olan Text tagini uzun uzun yazmak yerine; 
    yukarida Item'i props olarak tanimlayip, Text'ini de children olarak verdik.

return <Item>
        <Text> {props.brand.model[0].name} </Text>
    </Item>

*/

const styles = {
    viewStyle : {

        borderWidth : 1,
        borderColor : "gainsboro",
        borderBottomWidth:0, // ItemSection'daki borderla cakismasin diye 0ladik.
        shadowColor : "black", // golge gorunumu 
        shadowOffSet : { width : 1, height : 1},// golge degerleri
        shadowOpacity : 0.1,
        marginLeft : 5,
        marginRight : 5,
        marginTop : 10
    }
};

export default Item;


