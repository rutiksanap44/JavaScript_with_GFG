// destructuring
const Obj = {
    name : "Akash",
    course : "Web Dev",
    add : {
        city : "Sirsa",
        state : {
            first : "MH",
            second: "BR",
            third : "GA",
            sevenSister:{
                firstss : "Mizoram",
                secondss : "Nagaland"
            }
        }
    },
    courses : ["HTML", "CSS", "JS", "ReactJS"]
};

// this is one way of destructuring
// let {course, add, courses} = Obj;

// console.log(`${course} ${courses}`);

// second way
// let {course, ...rest} = Obj;

// console.log(rest);

// third way with changing the names(used for shortening the names of object variables)
// let{name :username, courses: mycourses} = Obj;

// console.log(username, mycourses);

// fourth way to destructure the nested objects
// let{add: {city,state}} = Obj;
// console.log(city, state);

// fifth way multiple nesting destructuring
let{ add:{state:{sevenSister:{firstss,secondss}} } } = Obj;
console.log(`${firstss} ${secondss}`);