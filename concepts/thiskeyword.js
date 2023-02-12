// const obj = {
//     city : "Nashik",
//     state : "Mahatashtra",
//     getCity(){
//         console.log(city);
//     }
// };
// console.log(obj.getCity()); // error => city is not defined

const obj1 = {
    city1: "Nashik",
    state1: "Mahatashtra",
    getCity1() {
        console.log(this.city1);  // => this is called as an implicit binding
    }
};
obj1.getCity1();