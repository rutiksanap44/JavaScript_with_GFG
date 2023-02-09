const names = [
    {firstname : "Rahul",lastname : "Sharma",age:"45"},
    {firstname : "Gaurav",lastname : "Jain",age:"33"},
    {firstname : "Hardik",lastname : "Sinha",age:"29"},
    {firstname : "ketan",lastname : "Patil",age:"35"},
];

// print those full names with some criteria`
const filterAge = names.filter(function(names1){
    return names1.age > 30
}).map(function(names2){
    return `${names2.firstname} ${names2.lastname} ${names2.age}` ;
})

console.log(filterAge);