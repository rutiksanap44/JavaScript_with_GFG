// how to access the text provided from the input field

const input = document.querySelector(".input");

// generally when the space bar is clicked
// input.addEventListener("click", () => {
//     console.log(input.value);
// });

// // change -> whenever the focus is changed then it w'll trigered
// input.addEventListener("change", () => {
//     console.log(input.value);
// });

// // when ever the value is entered
// input.addEventListener("input", () => {
//     console.log(input.value);
// });

// when you click on input field it gets trigerred
// input.addEventListener("focus", () => {
//     console.log(input.value);
// });

// when the key is pressed
input.addEventListener("keyup", () => {
    console.log(input.value);
});