// s = "Hello"
// p = "llo"

// 2

var s = "Hello";
var p = "llo";


let pattern = (s,p) => {
    for (let i = 0; i < s.length; i++) {
        if (p[0] == s[i]) {
            return i;
        }
    }
    return -1;
}
console.log(pattern("Hello","aa"));