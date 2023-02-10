const readlinesync = require('readline-sync');
const input = readlinesync.question("Which key you want to print ?");

const Obj = {
    name : "Akash",
    course : "Android"
}

console.log(Obj[input]);