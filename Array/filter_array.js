// filter
const a = [1,2,3,4,5,6];

// numbers greater than 5
const greater = a.filter(function(b){
    return b>5;
});
console.log(greater);

// numbers which are even
const even = a.filter(function(n){
    return n%2 == 0;
});

console.log(even);