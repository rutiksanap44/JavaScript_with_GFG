// pure function are those where internal parameters are not influenced bu external values, e.g.;
function getDouble(value){
    return 2 * value;
}
console.log(getDouble(2));

// inpure function example
var extValue = 10;
function getSum(value1){
    return 5 + 10 + value1 + extValue;
}
console.log(getSum(extValue));