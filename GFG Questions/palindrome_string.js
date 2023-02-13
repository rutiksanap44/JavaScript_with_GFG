const str = "madam"

// first way by checking with every element
function isPalim(str1){
    var bool = true;
    var lastInd = str1.length-1;
    for(let i=0;i<str1.length/2;i++){
        if(str1[i]!=str1[lastInd]){
            bool = false;
        };
        lastInd = lastInd - 1;
    };
    return bool;
};
const isPalimstr = isPalim(str);
console.log(isPalimstr);

// 2nd way by reversing the string first then compare with the help of array

const revstr = str.split("").reverse().join("");
console.log(str === revstr);


// 3rd way
function reversestr(str2){
    let tempstr = "";
    for(let i=0;i<str2.length;i++){
        tempstr += str2[i];
    }
    return tempstr;
};
const newstr = reversestr(str);
console.log(str === newstr);
