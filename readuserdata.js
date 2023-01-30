// read the data from the user
// you cannot use the functionality of readline sync outside the terminal

const readlineSync = require('readline-sync');

// now the below user name will store the answer given for this question
const userName = readlineSync.question("May i know your name ? ");

console.log(`User's name is : ${userName}`);
