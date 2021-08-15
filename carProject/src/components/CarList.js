import React, {Component}  from 'react';
import {View, ScrollView} from 'react-native';
import axios from 'axios';
import CarDetail  from './CarDetail';

//create component
// const CarList = (params) => {
//     return (
//         <View>
//             <Text> Car List </Text>
//         </View>
//     );
// }

// API'den data alabilmek icin "Class Based Component" kullanmamiz gerekir.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// functional componenti, class-based component yapmak icin "react"tan {Component} import ettik.
//   daha sonra create componenttaki degisiklikler asagidaki gibi :
//      ne zaman class-based bir component yazarsak, kesinlikle tanimlanmasi gereken sey "RENDER"
//      RENDER : ekranda gosterebilmek icin gerekli ( functional'da return oldugu icin buna gerek yoktu ama class-based'de var)

// data almak icin request gondermemiz gerekiyor, ama datayi ne zaman alicagimiz ve bu requesti neyin tetikledigi de cok onemli
//    ekran acildiginda requestin gonderilmesi ve cevabin gelmesi gerekiyor(lifecycle methodlar)
//  class-based componentlar daha cok bilgiye sahiptir : ekranda ne zaman gosterileceklerini bilirler,
//                                                         ne zaman kaldirilacaklarini bilirler.

// component ekranda gorulur gozukmez cok kisa bir sure icinde once "componentDidMount" cagirilir.
// daha sonra "componentDidUpdate" methodu cagirilir.(yeni "props" seti geldiginde ya da "state" degistiginde)

class CarList extends Component {
    // 1) component icin default baslangic statei durumu belirle.
    // 2) verileri aldiktan sonra state'i guncelle.     
    // 3) component'in icinde state'i kullan.

    constructor(){ // constructor, state baslatmak icin uygun bir yer.
        super();
        this.state = {carList : []}; // bos bir baslangic state'i.
    }

    componentDidMount(){ // bir kere cagirilir.
        // HTTTP istek atmak icin "axios" kutuphanesini kullanicaz.
        // terminalden dosya klasorune gelip "npm install --save axios"
        axios.get('https://givecars.herokuapp.com') // http istegi asenkron bir islem oldugu icin direk cevabı donmez, cevabi nasil dondugunu dondurur.
        .then((response) => {
            this.setState({carList : response.data});  // 2. renderda sadece setState edilen component calisicak,Header calismaz.
        })

    }

    // araba modellerini iceren objelerin herbirini carDetail component'ina donusturmek istiyoruz.
    renderList = () => {

        return ( this.state.carList.map((brand) => { // map, butun array'i tek tek gezicek. forEach gibi.
            return <CarDetail key={brand.model[0].name} brand={brand} />
            // Text yerine CarDetail yazma sebebimiz, artik detay da gostermek istedigim icin CarDetail component'ina ihtiyac var.
            // sadece carList componentinin markalar hakkinda bilgisi var. 
            // "carList" componentinin bilgilerini child componenti olan "CarDetail" component ile paylasmasina izin veriyoruz.
            // listenin her bir child'ina her zaman "key" adinda bir property vermemiz gerekir. 
            // react bir listeyi render ettiginde, daha sonra liste guncellemek icin "key" property'sine bakar ve 
                    // butun liste yerine sadece degisen parcayi gunceller. 
            // brand bilgilerini CarDetail componentina bir prop olarak gectik.
        }))

    }

    render(){
        console.log(this.state);

        return ( // scrollview, icindeki herseyi kaydirilabilir hale getirir.
            <ScrollView> 
                {this.renderList()}
            </ScrollView> 
        );
    };
}

export default CarList;

// STATE
// state tek bir componentla alakali bir miktar veri iceren JS objesidir.
// state, bir component olusturuldugu anda baslatilmalidir.
// state sadece ve sadece "setState" fonksiyonu ile guncellestirilir.


