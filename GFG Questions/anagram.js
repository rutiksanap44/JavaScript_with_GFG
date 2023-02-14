function anagram(a,b) {
    let s1 = a.split("").sort().join("");
    let s2 = b.split("").sort().join("");
    if(s1 === s2){
        console.log("YES");
    }
    else{
        console.log("NO");
    }
};
// console.log(anagram("hello","hello"));
anagram("geeksforgeeks", "forgeeksgeeks");

// let str = "bca";
// console.log(str.split("").sort());