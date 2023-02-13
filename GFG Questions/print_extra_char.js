function extra(s1,s2){
    const strArr1 = s1.split("").sort();
    const strArr2 = s2.split("").sort();
    let diffChar = "";
    for(let i=0;i<strArr1.length;i++){
        for(let j=0;j<strArr2.length;j++){
            if(strArr1[i]===strArr2[j]){
                break;
            }
        }
    }
}

console.log(extra("aty","faty"));