let arrowf = (x,y) => x*y;
console.log(arrowf(2,3));

let calcSub = (x,y) => {
    if(x>y){
        return x-y;
    }else{
        return y-x;
    }
}
console.log(calcSub(22,34));

// above function in short lines
let calcSubShort = (x,y) => x>y ? x-y : y-x;
console.log(calcSubShort(11,15));