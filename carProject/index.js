// bir componenti diger bir dosyada kullanma( Header dosyasini kullanalim )

import React from 'react';
import { AppRegistry,View } from 'react-native';

import Header from './src/components/Header';
import CarList  from './src/components/CarList';
// hem Header hem de CarList'i tek returnde donmek icin View icinde yaziyoruz.

//create component
const App = () => {
     return ( // iki component'i tek return'de donmek icin View tag'i ile saricaz.
                // ekranin scroll edilebilmesi icin carList'teki scroll ozelligiyle beraber buranin View style'ina da flex:1 veriyoruz.
         <View style = {{flex : 1}}> 
             <Header title={'Cars'} />;
             <CarList />
         </View>
     );
 }; 
// render component to screen
AppRegistry.registerComponent('cars', () => App);
