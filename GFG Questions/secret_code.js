// encode the string by 2 char

function encode(str){
    var newStr = "";
    for(let i=0;i<str.length;i++){
        let currentCharCode = str.charCodeAt(i);
        newStr += String.fromCharCode(currentCharCode+2);
    }
    console.log(newStr);
}

str = "Abc";
encode(str);