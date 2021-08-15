import React from 'react';
import {Text,View,Image} from 'react-native';

import Item from './Item'; // bu Item component'i sadece styling icerir ve bunu View tag'i yerine asagida kullanicaz.
import ItemSection from './ItemSection';


// component sadece kullaniciya bazi detaylar gosterecegi icin (resim,url gibi)
   // herhangi bir http requesti yapmadigi icin functional component olmasi yeterli.

// functional component'larin ilk argumanlari her zaman "props" objesidir. 
/*
const CarDetail = (props) => {
    return <Item>
        <ItemSection>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{props.brand.brand}</Text> 
                <Text style={styles.headerText}>{props.brand.model[0].name} </Text>
            </View>
        </ItemSection>

        <ItemSection>
            <Image 
                style={styles.imageStyle} // imageStyle'daki degisiklikler enine tum ekrani kaplamasi icin
                source={ {uri : props.brand.model[0].image }} />
        </ItemSection> 
    </Item>
}
*/


// YALIN KODU
const CarDetail = ({brand}) => {

    const {headerContainer,headerText,imageStyle} = styles; 
    return <Item>
        <ItemSection>
            <View style={headerContainer}>
                <Text style={headerText}>{brand.brand}</Text> 
                <Text style={headerText}>{brand.model[0].name} </Text>
            </View>
        </ItemSection>

        <ItemSection>
            <Image 
                style={imageStyle} // imageStyle'daki degisiklikler enine tum ekrani kaplamasi icin
                source={ {uri : brand.model[0].image }} />
        </ItemSection> 
    </Item>
}




// propslarin herbirine CarList'te map edince "brand" demistik. brand herbir elemanin brandi var. o yuzden props.brand.brand oldu.
// carList'in her modelinin icinde "image" propertysinin altinda bir url oldugunu goruyoruz.

const styles = { // marka ve model isimleri asagi-yukari ve aralari bosluklu olsun.
    headerContainer : {
        flexDirection : 'column',
        justifyContent : 'space-between'
    },
    headerText : {
        fontSize : 18,
        fontWeight : 500,
        textTransform : 'uppercase'
    },
    imageStyle : {
        height : 300,
        flex : 1,
        width : 0
    }
}


export default CarDetail;