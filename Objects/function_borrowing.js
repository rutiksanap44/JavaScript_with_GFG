// function borrowing

function sayHi(pincode,state){
    console.log(this.city,pincode,state);
};

const obj = {
    name : "Rahul",
    city : "Mumbai"
};

// with call keyword function sayHi is get borrowed by obj
sayHi.call(obj);

//we can pass the parameters also with the call
sayHi.call(obj,411033,"MH");

// with apply keyword we have to pass the parameters in the array format
sayHi.apply(obj,[422004,"MH"]);

// call, apply and bind are called as explicit bindings