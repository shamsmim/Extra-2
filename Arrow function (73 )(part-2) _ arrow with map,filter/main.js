
var students = [
    {
        id: 101,
        name: 'Shams',
        gpa:3.81
    },
    {
        id: 102,
        name: 'Mim',
        gpa:3.51
    },
    {
        id: 103,
        name: 'Dell',
        gpa: 3.00
    },
    {
        id: 104,
        name: 'DCL',
        gpa:2.81
    }
]


function studentNames1() {
    return students.filter(function(x){
       return x.gpa > 3 
    }).map(function(y){
        return y.name;
    });
        
}

console.log(studentNames1());

//........with arrow function.....

studentNames2 = () => students.filter((x) => x.gpa>3).map((y) => y.name);

console.log(studentNames2());

