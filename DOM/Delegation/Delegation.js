const buttonContainer = document.querySelector(".buttons");

// to print the whole tag
// buttonContainer.addEventListener("click", (event) => {
//     console.log(event.target);
// });

// to print the inner HTML
buttonContainer.addEventListener("click", (event) => {
    console.log(event.target.innerText);
});