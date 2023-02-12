// higher Order Functions
// in higher order function we pass the function as an argument or returns the function or do both

function inner(){
    return "Welcome";
};

// here fun1 is higher order function because it is accepting function as an argument
function fun1(inner1){
    console.log("Hello",inner1());
}

fun1(inner);

// second way because it is return function
function fun2(){
    return function(){
        console.log("Hello, Good Morning");
    }
};

fun2()();