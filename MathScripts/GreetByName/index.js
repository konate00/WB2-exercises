// From screenshot oct 21 - left for daughter appointment...

"use strict";
console.log("start index.js");

window.onload = init;

function init(){
    // console.log("start init");
    // this code will run when the browser has loaded the webpage.

    // Here we need to wire up our event handler! For this project, that means the 
    // greetTheUserBtn buuton's click event: 
    
    const greetTheUserBtn = document.getElementById("greetTheUserBtn");
    greetTheUserBtn.click = greetTheUserBtnClicked;
    console.log("end init");
}

// function greetTheUserBtnClicked(){
//     //this code will run when the button is clicked...
//     console.log("button clicked");
//     const nameTextbox = document.getElementById("nameTextbox");
//     let nameValue = nameTextbox.value;
//     let message = "Hello" + nameValue;

//     const outputH1 = document.getElementById("outputH1");
//     outputH1.innerHTML = message;

//     alert(message);
// }
// console.log(nameTextbox);