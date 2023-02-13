const employees = [
    {
        name : "Rahul",
        yearOfExperience : 3
    },
    {
        name : "Sagar",
        yearOfExperience : 6
    },
    {
        name : "Hardik",
        yearOfExperience : 9
    },
    {
        name : "Ganesh",
        yearOfExperience : 2
    }
];

const ans = employees.filter(employee => employee.yearOfExperience>5).map(employee => employee.name);
console.log(ans);