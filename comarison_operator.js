console.log("abc" < "dbc");

console.log("01" == 1);

// comparing "01" with 1 is not correct comparison
// therefor we have to use strict equality operator here
console.log("01" === 1);

console.log(null == undefined); // true
console.log(null === undefined); //false


// when you compares null with any number then null becomes a 0(zero). but for == 0 it is not zero
console.log(null > 0); // false;
console.log(null < 1); // true;