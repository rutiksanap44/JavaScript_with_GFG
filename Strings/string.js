// iterating over the string

let str = "I am Programmer";

for(let char of str){
    // console.log(char);
}

console.log(str[3]);
console.log(str.charAt(3));

// asci code

console.log(str.charCodeAt(2));

// finding index

console.log(str.indexOf("P"));

// if not present then indexOf returns -1
console.log(str.indexOf("p"));

// if you want to find index of char after some position
console.log(str.indexOf("m",6));