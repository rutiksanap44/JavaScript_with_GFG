function factorial(n){
    let ans = 1;
    while(n>0){
        ans*=n;
        n--;
    }
    return ans;
};

console.log(factorial(5));