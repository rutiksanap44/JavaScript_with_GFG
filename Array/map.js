const a = [1,2,3,4];

// with the help of map here we will double the every value here
const doubleArray = a.map(function(b){
    return b*2;
});

// with the help of arrow function
const doubleA = a.map((numbers) => numbers*2);

// with the help of normal function by passing values
function double(number){
    return number*2;
}
const doubleA1 = a.map(double);

console.log(doubleA1);

console.log(doubleA);

console.log(doubleArray);