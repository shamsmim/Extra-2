// array Destructure

// let numbers = [10,20,30,40,50]
// let [num1, num2, num3, num4, num5] = numbers
// console.log(num1, num2);
// console.log(num4);



// swap variables

// let a=10, b=20;
// [a,b] = [b,a]
// console.log(a);
// console.log(b);


// object destructure

// const studentInfo = {
//     id : 101,
//     fullName : 'Shams Mim',
//     gpa : 3.81

// }
// const {id, fullName} = studentInfo
// console.log(id, fullName);



// Nested Object Destucturibg



// const studentInfo = {
//     id : 101,
//     fullName : 'Shams Mim',
//     gpa : 3.81,

//     language : {
//         native : 'Bangla',
//         beginer : 'english'
//     }

// }
// const {id, language} = studentInfo
// console.log(language.native);




// destructuring function perameters

const studentInfo = ({id, fullaName}) => {
    console.log(`${id}, ${fullaName}`);
}

const student = {
    fullaName : 'Ash Shams Mim',
    id : 101
}
studentInfo(student);