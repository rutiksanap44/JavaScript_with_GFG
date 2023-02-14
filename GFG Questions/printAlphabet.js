function printAlphabet(a,b){
    let start = a.charCodeAt(0);
    let end = b.charCodeAt(0);
    let str = "";
    for(let i=start;i<=end;i++){
        str = str + String.fromCharCode(i) + " ";
    }
    return str;
};
console.log(printAlphabet('a','z'));