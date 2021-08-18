// MAP
const arr = [1,2,3,4,5,6,7];

arr.map( x => console.log(x));
/////////////////////////////////////////////////////////////////////////////////////////
//SOME
// array icinde vericegimiz kosula uyan tek bir eleman dahi bulsa true doner
const result = arr.some( (number) => {
    return number > 5   
});
console.log(result); // true
/////////////////////////////////////////////////////////////////////////////////////////
//EVERY
// tum elemanlarin uyup uymadigina gore true ya da false doner
const result2 = arr.every( (number) => {
    return number > 2
});
console.log(result2); //false
/////////////////////////////////////////////////////////////////////////////////////////
// findIndex
const result3 = arr.findIndex( (number) => {
    return number == 3 
});
console.log(result3); // 2. yani 2.index(3. eleman 0-1-2)

const result4 = arr.findIndex( (number) => {
    return number > 3 
});
console.log(result4); // 3. index yani. 3ten buyuk ilk eleman olan 4u getirdi.
/////////////////////////////////////////////////////////////////////////////////////////
// filter
const result5 = arr.filter( (number) => number > 3);
console.log(result5); //[ 4, 5, 6, 7 ]






