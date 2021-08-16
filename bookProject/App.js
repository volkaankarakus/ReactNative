import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as React from 'react';

import BookScreen from './src/screens/BookScreen';
import BookDetailScreen from './src/screens/BookDetailScreen';

/*
stackNavigator bize farkli ekranlari otomatik olarak gosterecek olan tool.
ve her ekranin uzerinde de bir Header gostericek.
suanda herhangi bir component ya da screen yok, bu yuzden ne zaman bir stackNavigator olusturmak istesek 
oncelikle bir screen'e ihtiyac var.
*/
const navigator = createStackNavigator( // ekran tanimlari, hangi ekranin ne zaman gosterilecegi
    {
        Book : BookScreen, // artik BookScreen'i bu objemizin icine gecirebiliriz.(ilk ekran)
        BookDetail : BookDetailScreen // (ikinci ekran)
    },
    {
        initialRouteName : 'Book', // app basladiginda ilk gosterilecek ekran
        defaultNavigationOptions : { // genellikle her farkli ekranin ust kismindaki Header'i ozellestirmek icin  
            title : 'Book', // Header'daki metin
        },
    }
);

export default createAppContainer(navigator); 
/*
Projedeki bu App.js dosyasi ozel bir dosyadir.
Bu dosyadan export edilen herhangi birsey otomatik olarak ekranda gosteriliyor.
O yuzden bu dosyadan her zaman bir React Component export etmemiz gerekiyor. ama suan burada bir component yok.

"createAppContainer" component'i gercek bir react componenti olusturur. Buna bir obje gecerek react component olusturuyoruz.
*/






