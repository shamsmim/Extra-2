function display1(){
    console.log("This is normal function");
}
display1();

const display2 = () => {
    console.log("This is arrow function");
}
display2();

//.......Return with Arrow Function

function message3(){
    return "This is normal return function"
}

const message4 = () => "This is without return function"

console.log(message3());
console.log(message4());

//......Pass with perameter....

function add1(num1, num2){
    return num1+num2;
}
console.log(add1(10,20));

const add2 = (num1, num2) => num1+num2;
console.log(add2(10,20));