var i = 10;
function x() {
setTimeout(function(){
    console.log(i);
},3000);
};
x();

console.log(window);