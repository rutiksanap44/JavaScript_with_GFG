// mask the last 4 charecters with #

let str = "123456789987654321";

const repeatchar = "#".repeat(4);

const newStr = str.slice(0,str.length-4) + repeatchar;

console.log(newStr);

// another way with for loop

function mask(str){
    let newStr = "";
    const lastIndex = str.length-1;
    for(let i=0;i<str.length;i++){
        if(i<=lastIndex-4){
            newStr += str[i];
        }
        else{
            newStr += "#";
        };
    };
    return newStr;
};

const maskedStr = mask(str);
console.log(maskedStr);