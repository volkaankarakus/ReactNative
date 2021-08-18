const axios = require('axios'); // terminalde npm install axios yaparak yükledik.
console.log(axios);

getData = () => {
    axios.get('https://mertbuldur.com')
    .then( (response) => console.log(response))
    .catch( (error) => console.log(error) )
};

getData();

console.log('Verileri cekmeden burayi gosterme'); // run ettigimizde gosterme dememize ragmen bu satiri once cagirdi.

// bunu async-await ile cozucez.
getData2 = async () => {
    await axios.get('https://mertbuldur.com')
    .then( (response) => console.log(response))
    .catch( (error) => console.log(error) )
};

getShow = async () => {
    await getData2();
    console.log('Verileri cekmeden burasi calismasin');
};

getShow(); // simdi once datayi cekti, daha sonra 'Verileri cekmeden burasi calismasin' i basti.


