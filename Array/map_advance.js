const names = [
    {firstname : "Rahul",lastname : "Sharma"},
    {firstname : "Gaurav",lastname : "Jain"},
    {firstname : "Hardik",lastname : "Sinha"},
    {firstname : "ketan",lastname : "Patil"},
];

const fullNames = names.map(function(fullnames){
    return `${fullnames.firstname} ${fullnames.lastname}`;
});

console.log(fullNames);