function addtwo(x){
    return function(y){
        return x+y;
    };
};

let first = addtwo(5);
let second = first(7);
console.log(second);