import React from 'react';
import View from 'react-native';

const ItemSection = (props) => {

    return <View style = {styles.viewStyle} >
        {props.children}
    </View>;
}

const styles = {
    viewStyle : {
        borderBottomWidth : 1,
        borderColor : "gainsboro",
        flexDirection : 'row', // ana eksen artik yatay oldu.
        justifyContent : 'flex-start',
        padding : 5
    }
}

export default ItemSection;