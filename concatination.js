// we can concat two strings using "+" sign
let firstname = "Rutik ";
let lastname = "Devram Sanap";
let fullname = "My full name is : "+  firstname + lastname;
console.log(fullname);

// concatination is very traditional system
// Template Literal is used now a days mostly
let finalname = `My Full name is ${firstname}${lastname}`;
console.log(finalname);

// we can add linebreaks automatically here
let age = 22;
let multiplelinetext = `My name is ${firstname}
and i am ${age} years old`;
console.log(multiplelinetext);