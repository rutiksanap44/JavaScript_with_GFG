const form = document.querySelector("#form");
const div = document.querySelector("#div");
const p = document.querySelector("#p");

// bubbling
// p.addEventListener("click",() => {
//     alert("para tag");
// });
// div.addEventListener("click",() => {
//     alert("div tag");
// });
// form.addEventListener("click",() => {
//     alert("form tag");
// });

// capturing => it starts from parent to child
p.addEventListener("click",() => {
    alert("Para tag");
},true);
div.addEventListener("click",() => {
    alert("Div tag");
},true);
form.addEventListener("click",() => {
    alert("Form tag");
},true);