// array methods
// shift(), unshift(), splice(pos,neo,ele1,ele2..), sp..

var names = ["Anis", "Islam", "Shams"];

console.log(names);

// 

// Adding elements using splice 
// names.splice(2,0,"Karim","Rahim");
// console.log(names);

// removing elements 
// names.splice(1,2);
// console.log(names);

// slice 
//  var newArray = names. slice(1)
//  console.log(newArray);
//  console.log(names);
 
var numbers = [20, 5, 16, 25, 45, 1];
numbers.sort(function (a,b){
    return a-b;
})
console.log(numbers);
