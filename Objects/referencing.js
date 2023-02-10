// referencing like we have seen in array implies here also
// if you create another obj ref and if you change the second obj then change will takes place in first obj also
// it is called as shallow copying
// "Objects are Copies by Reference that is memory location"

const Obj = {
    name : "Akash",
    course : "Android",
    add : {
        city : "Sirsa",
        state : "Haryana"
    }
}

// this is shallow copying
const Obj2 = Obj;

Obj2.name = "Adarsh";

// console.log(Obj);

// this still not a deep copy , beacuse if you change the nested propertie's value here then change will takes place at the both Objects
const Obj3 = Object.assign({},Obj);

Obj3.name = "Amol";
Obj3.add.city = "Kota"

// console.log(Obj);
// console.log(Obj3);

// this is also not a deep copy
const Obj4 = {...Obj};
Obj4.add.state = "Punjab";
console.log(Obj);
console.log(Obj4);

// deep copy
const obj5 = {...Obj,add: {...Obj.add}};
obj5.add.state = "RJ";
console.log(Obj);
console.log(obj5)