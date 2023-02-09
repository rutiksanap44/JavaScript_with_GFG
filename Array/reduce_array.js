const a = [100,1,2,3,4,5];

// find sum using reduce function
const sumOfNo = a.reduce(function(sum,number){
    return sum += number;
},0);

console.log(sumOfNo);

// find greatest number

const greatest = a.reduce(function(max,curr){
    if(curr>max){
        max = curr;
    }
    return max;
},0);

console.log(greatest);

// find the greatest even number

const gratestEvenNo = a.filter(function(b){
    return b % 2 == 0;
}).reduce(function(max,curr){
    if(max<curr){
        max = curr;
    }
    return max;
},0);

console.log(gratestEvenNo);