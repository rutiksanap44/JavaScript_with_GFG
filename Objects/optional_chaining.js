// if you try to print nested property whose parent is undefined then error comes out(Cannot read properties of undefined)
const Obj = {
    name : "Akash",
    course : "Android",
    add : {
        city : "Sirsa",
        state : "Haryana"
    }
//     greetingMessage(){
//         return "Helloooo";
//     }
}
// solution 1
if(Obj.address !== undefined){
    console.log(Obj.address.city);
}else{
    console.log("address not found");
}

// solution 2
// this will print add.city if add is not undefined either it will print undefined
console.log(Obj.add?.city);

// using ? for function
console.log(Obj.greetingMessage?.());