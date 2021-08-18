// REST
const object = {
    a:1,
    b:2,
    c:3,
    d:4
};

const {a,b} = object ;
console.log(a,b); // 1 2
////////////////////////////////////////////////////////////////////////////
// SPREAD
const object2 = {
    e:5,
    ...object
}
console.log(object2); // { e: 5, a: 1, b: 2, c: 3, d: 4 }

const arr = [1,2,3,4,5,6,7];
const arr2 = [...arr,8,9,10];
console.log(...arr); // 1 2 3 4 5 6 7
console.log(arr2); 
/* 
[
    1, 2, 3, 4,  5,
    6, 7, 8, 9, 10
]
*/







