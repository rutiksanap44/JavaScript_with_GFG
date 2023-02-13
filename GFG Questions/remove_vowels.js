const str = "i love Web Development";
function removeVowels(str){
    const vowels = ['a','e','o','u','i'];
    let newStr = "";
    for(let char of str){
        if(!vowels.includes(char)){
            newStr += char;
        };
    };
    return newStr;
};

console.log(removeVowels(str));