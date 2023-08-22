// js BOM
// js Timing Event
// stTimeOut (), setInterval () 

// setTimeout(() => {
//     console.log("Hi");
// }, 2000);

// setTimeout(display, 2000);
// function display(){
//     console.log("display function");
// }



//............setTimeout...........


 const saveButton = document.querySelector(".save-btn");
 const message = document.querySelector(".message");

// saveButton.addEventListener('click',saveUser);

// function saveUser(){
//     message.textContent = "user registration successful";

//     setTimeout(() => {
//     message.textContent = "";
//     }, 2000);
// }

saveButton.addEventListener('click', displayCount);
function displayCount(){
    let count = 0;
    message.textContent = count;
    
    setInterval(() => {
        count++;
        message.textContent = count;
    }, 1000);
}



