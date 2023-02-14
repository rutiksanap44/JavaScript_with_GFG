function primeFact(n){
    let temp = n;
    let str = "";
    while(temp != 1){
        for(let i=2;;i++){
            if(temp%i==0){
                str = str + i+ " ";
                temp/=i;
                break;
            };
        };
    };
    return str;
};
console.log(primeFact(100));