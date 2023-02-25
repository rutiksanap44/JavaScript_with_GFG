const input = document.querySelector(".input");

// to get which mouse button you have clicked
// input.addEventListener("mousedown", (event) => {
//     console.log(event.button);
// });

// to get the cordinates
input.addEventListener("mousedown", (event) => {
    let xCor = event.pageX;
    let yCor = event.pageY;
    let coOrdinates = `(${xCor}),(${yCor})`;
    console.log(coOrdinates);
});

// to get the coordinates of the whole body
document.body.addEventListener("mousedown",(event)=>{
    console.log(`${event.pageX},${event.pageY}`);
});