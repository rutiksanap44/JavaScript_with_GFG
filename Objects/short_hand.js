// if you want to create object using the function and if argument and keys are same then
// short hand property will be used 

function getObject(college,city){
    return{
        college,
        city
    };
};
const obj1 = getObject("DYPCOE","Pune");
console.log(obj1);