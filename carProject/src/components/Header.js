// bu componentin amaci sadece CARS yazan bir header olusturmak

//import libraries
import React from 'react';
import {Text,ReactNative, View} from 'react-native';


//create component
const Header = (props) => {

    const { textStyling,viewStyle } = styles; // const textStyling = styles.textStyling ; demekle ayni sey. (destructuring)
    // view tag'i HTML'deki div'le ayni isi yapar.
    return (
        <View style={viewStyle}> 
            <Text style={textStyling}> {props.title} </Text>
        </View>
    );
}

const styles = {
    textStyling : {
        fontSize : 22
    },

    viewStyle : {
        backgroudColor : 'gainsboro',
        height : 70,
        justifyContent : 'center',
        alignItems : 'center',
        paddingTop : 25
    }
};





//make component available to other components
export default Header; // bu sayede diger dosyalarda bunu import edebiliriz


