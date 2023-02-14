function binarytoDecimal(n){
    let temp = n;
    let ans = 0;
    for(let i=1;;i*=2){
        if(temp < 1){
            break;
        };
        let last = temp%10;
        ans += last*i;
        temp /= 10;
    };
    return ans;
};

// binarytoDecimal(1001);
console.log(binarytoDecimal(111001));