// deep copying using spread operator is also not desirable for multiple nested objects
// So, we have to use functions
// Object.key(Obj) => this will return all the keys present in that Obj

const Obj = {
    name : "Akash",
    course : "Android",
    add : {
        city : "Sirsa",
        state : "Haryana"
    }
}

function getObject(source){
    let newObj = {};
    let keys = Object.keys(source);
    for(let key of keys){
        if(typeof source[key] === "object"){
            newObj[key] = getObject(source[key]);
        }
        else{
            newObj[key] = source[key];
        }
        newObj[key] = source[key];
    }
    return newObj;
};
console.log(getObject(Obj));