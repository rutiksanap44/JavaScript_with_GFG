// destructuring
const Obj = {
    name : "Akash",
    course : "Web Dev",
    add : {
        city : "Sirsa",
        state : "Haryana"
    },
    courses : ["HTML", "CSS", "JS", "ReactJS"]
};

// this is one way of destructuring
// let {course, add, courses} = Obj;

// console.log(`${course} ${courses}`);

// second way
// let {course, ...rest} = Obj;

// console.log(rest);

// third way with changing the names(userd for shortening the names of object variables)
let{name :username, courses: mycourses} = Obj;

console.log(username, mycourses);

// fourth way