let firstname = "Prakash";

try{
    console.log(username);
    console.log("trying");
}catch(error){
    console.log("Printing error name : "+error.name);
    console.log("Printing error message : "+error.message);
    console.log("Printing error stack : "+error.stack);
    console.log("catching");
}finally{
    console.log("finally block will get executed every time");
}
// since here username variable is not defined therefor code will access the catch block.
// if you want to know the type of error you can just do console.log(error.name);.
// for error message you can do console.log(error.message);.
// and for error stack => console.log(error.stack);.
// after try block and catch block there is a finally block also which get executed in the both cases.
// finally is mostly not used block.