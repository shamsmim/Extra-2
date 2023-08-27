// ..... Find......

// let numbers = [5, 55, 14, 19, 78];
// let firstEvenNumber = numbers.find(x => x % 2===0)
// console.log(firstEvenNumber);

// let numbers = [5, 55, 14, 19, 78];

// const evenNumber = (value, index, array) => {
//     if(value%2===0)
//     return value;
// }

// let firstEvenNumber = numbers.find(evenNumber);
// let firstEvenNumberIndex = numbers.findIndex(evenNumber);

// console.log(firstEvenNumber);
// console.log(firstEvenNumberIndex);


// Find method for object...

const students = [{
    id : 101,
    gpa : 2.5
},
{
    id : 102,
    gpa : 3.5
},
{
    id : 103,
    gpa : 4.5
},
{
    id : 104,
    gpa : 4.75
}]

console.log(students.find(x => x.gpa>4));