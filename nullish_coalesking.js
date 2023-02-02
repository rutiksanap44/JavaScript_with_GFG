// nullish coalesking => ?? will give you the second value when first value is undefined or null

//since value1 is undefined therefor second value is printed
let value1;
console.log(value1 ?? "hidden value1");


// since value2 is null therefor second value is printed.
let value2 = null;
console.log(value2 ?? "hidden value2");

// => || will give you second output to printed when first is falsy value

var var1 = false;
console.log(var1 || "first value");

var var2 = 0;
console.log(var2 || "second value");

var var3 = 12;
console.log(var3 || "third value");


// ??(nullish coalesking) is preffered as compared to ||(or)
