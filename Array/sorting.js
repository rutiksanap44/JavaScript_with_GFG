var arr1 = [1,2,3,4,5,6,7,0];
function sortinAscending(a,b){
    return a-b;
}
function sortinDescending(a,b){
    return b-a;
}
arr1.sort(sortinAscending);
console.log(arr1);

arr1.sort(sortinDescending);
console.log(arr1);