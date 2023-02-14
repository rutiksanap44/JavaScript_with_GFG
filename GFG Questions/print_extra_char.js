const extraChar = (s1,s2) => {
    const findSumofCharCodes = (str1) => {
        let arr = str1.split("");
        return arr.reduce(function(sum,curr){
            return sum+=curr.charCodeAt(0);
        },0);
    };
    const findSumofCharCodes1 = (str1) => {
        let arr = str1.split("");
        return arr.reduce(function(sum,curr){
            return sum+=curr.charCodeAt(0);
        },0);
    };
    const l1 = findSumofCharCodes(s1);
    const l2 = findSumofCharCodes(s2);
    const diff = l1-l2;
    const ans = String.fromCharCode(diff);
    return ans;
    // return String.fromCharCode(diff);
};
console.log(extraChar("aaaz","aaaz"));
