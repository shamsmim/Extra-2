
//..........

"use strict"

// function message(text){
//     console.log(`${text}`);
// }
// message("I love JS ES6");

//............Defult Perameter..........

function message(text = "Hello this is defult perameter"){
    console.log(`${text}`);
}
message();
message("I love JS ES6");

//........rest Perameter........

function printNumbers(x,y, ...z){
    console.log(`x = ${x}, y = ${y}, z = ${z}`);
}

printNumbers(10,20,30,40,50,60);