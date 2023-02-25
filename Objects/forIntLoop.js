const Obj = {
    name : "Akash",
    course : "Android"
};

// to check weather the property is available or not

const isPropertyAvailable = "name" in Obj;

console.log(isPropertyAvailable); // true

// to print property and values of objects

for(let properties in Obj){
    console.log(properties," : ",Obj[properties]);
}