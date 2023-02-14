var arr1 = [1, 2, 3, 4];
var arr2 = arr1;
// here when you do changes to arr 2 it will get reflected in arr1
// this happens because both the arrays are referencing same location, this is called as derefercing

arr2.push(3);
// we have pushed an element in only arr2 but the change will be visible in arr1 also
// this type of copying is also called as Shallow Copying 

console.log(arr1);
console.log(arr2);

// to solution to this problem is Spred Operator
var arr3 = [...arr1];
arr3.push(5);
// we have used here Spread Operator therefor arr1 will not get changed 
console.log(arr1);
console.log(arr3);

// with using for loop also this problem can be solved
// if you copy string with a Spread Operator then that string will be copied as a Array like "Hello" => 'H','e','l','l','o'.
