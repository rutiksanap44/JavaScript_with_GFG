// object literal
var Obj = {};

Obj.name = "Ronak";
console.log(Obj);

// key and value pairs
// number as a key can be assigned with only single qoutes
Obj = {
    name : "Ronak",
    age : 44,
    city : "Nagpur",
    "4" : "Lucky Number",
    course : "Web Developer",
    "last name": "Jain"
};
// print the whole Object
console.log(Obj);

// to print the perticular key value
console.log(Obj.course);

// if you want to print the property using the square bracket
console.log(Obj["city"]);

// the purpose of using the square bracket is when the key is having multiple words like last name and numeric values
// to print the property using the numberic key
console.log(Obj["4"]);

console.log(Obj["last name"]);

// basically the key is converted into the form as String
