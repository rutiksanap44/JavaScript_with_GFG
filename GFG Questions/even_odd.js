let arr = [1,2,3,4,5,6,7,8,9,10];
function even_odd(arr){
    for(let i in arr){
        if(arr[i]%2==0){
            arr[i] -= 1;
        }else{
            arr[i] += 1;
        }
    };
    return arr;
};
console.log(even_odd(arr));