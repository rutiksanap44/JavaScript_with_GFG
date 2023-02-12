// function can be assigned to a variable
// it can be passed as a argument to a function
// function cab be returned through another function

// 1st way just declaring the function to a variable
const fun1 = () => "First Type";

// 2nd way temp fun is passed as an argument

const temp = () => "Inner Function"

const fun2= (name,inner) => console.log(name, inner());

fun2("Rutik",temp);

// 3rd way => return a function with the another function

function fun3(){
    function innerFun(){
        var name1 = "Rahul";
        console.log(name1);
    }
    return innerFun;
};

// this is first way
// const newFun = fun3();
// newFun;

// innderFun of fun3 can be called in another way also as follows:
fun3()();
