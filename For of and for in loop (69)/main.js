// For of.......For in


// const names = ["s1", "s2", "s3"]
// for (let name of names){
//     console.log(name);
// }


let students = {
    Id : 101,
    name : 'Shams',
    cgpa : 3.91
}

for(let x in students){
    console.log(`${x} : ${students[x]}`);
}