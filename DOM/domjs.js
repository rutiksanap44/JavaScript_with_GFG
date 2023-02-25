// const startbtn = document.getElementsByClassName('start_button');

// const endbtn = document.getElementsByClassName('end_button');

// const submitbtn = document.getElementsByClassName('submit_button');


const startButton = document.querySelector('.start_button');

function clickStart(){
    console.log("Start Button Clicked");
}

startButton.addEventListener("click",clickStart);


// after clicking if you want to change the text of button

const endButton = document.querySelector('.end_button');

endButton.addEventListener("click",() => {
    if(endButton.innerHTML === "End Button"){
        endButton.innerHTML = "Ended";
    }else{
        endButton.innerHTML = "End Button";
    };
});

// how to increase the value of count after clicking the button

const countButton = document.querySelector('.count_button');

var count = 0;

countButton.addEventListener("click", () => {
    count++;
    countButton.innerHTML = count;
});

// change the color of perticular content by changing the class

const colorButton = document.querySelector('.color_button')

colorButton.addEventListener("click", () => {
    // colorButton.innerHTML = "New";
    colorButton.classList.toggle("new-color"); 
});