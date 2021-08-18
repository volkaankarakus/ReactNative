const IslemKontrol = new Promise( function (resolve, reject){
    const islem = 0;
    if(islem){
        resolve();
    }
    else{
        reject();
    }
})
.then( () => {
    console.log('Islem basarili');
})
.catch( () => {
    console.log('Hata var');
})

// islem =1 icin : Islem basarili
// islem = 0 icin : Hata var

/*
ya da
IslemKontrol
.then( () => console.log('Basarili'))
.catch( () => console.log('Hatali'))
*/


