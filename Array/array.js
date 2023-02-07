// this is the way to traverse an array
let names = ["Akash","Rohit","Kartik","Prakash"];
for(let values of names){
    console.log(values);
}

// to print index
for(let indices in names){
    console.log(indices);
}

// to print values with the indices from above example
for(let indeces1 in names){
    console.log(names[indeces1]);
}
console.log(names.pop());