// function addNumbers(x, y, z){
//     return x + y +z;
// }
// let numbers = [1,2,3]
// //console.log(addNumbers(...numbers));

// let number1 = [5,...numbers,6];
// console.log(number1);

// let number1 = [1,2,3]
// let number2 = [4,5,6]
// let numbers = [...number1, ...number2];
// console.log(numbers);

// ......2 obj concatinate with spread operator ....

let p1 = {
    name : "Shams",
    age : 20
}

let p2 = {
    nationality : 'bangladeshi',
    language : 'bangeli'
}

let p = {...p1, ...p2}
console.log(p);