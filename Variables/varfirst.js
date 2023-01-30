// = is called as an assignment operator
// inside var you can store any type of value
// if you use an inbuilt keyword name as a variable them line comes on that word
// const is used for constant values
// you cannot just declare the const var you must have to initialize it(you must have to asign a value to it).


// lexical environment =>   
// function a(){
//     console.log(b)
// }
// let b = 10;
// a();

console.log(typeof 'b'); // string
console.log(typeof "Rutik"); //string
console.log(typeof 1234); //number
console.log(typeof true); //boolean

let apple = null;
console.log(typeof apple); // object

let a;
var b
console.log(a, b); //undefined undefined

let ebis = {name:"Rutik",age:22};
console.log(typeof ebis); //object

let arr = [1,2,3,4];
console.log(typeof arr); // object