//How to create an object
// How to print the value of an object
// Adding a Constractor 
// Adding functoion inside a constructor ######## Now. . . .. 

var name = "Ash Shams Mim";
var age = 26;
var cgpa = 3.93;
var lang = ["Bengali", "Hindi", "English"];

// console.log(age); 


  function Student (name,age,cgpa,lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }
  }

  var student1 = new Student ("Shams",27,3.92,["Bengali","hindi","English"]);
  var student2 = new Student ("Rakib",20,3.13,["Bengali", "Nepali", "English"]);
  var student3 = new Student ("Mahi",22,2.13,["Bengali", "Turkish", "English"]);

  student1.display();
  student2.display();
  student3.display();



//   console.log(student1.name);
//   console.log(student1.age);
//   console.log(student1.cgpa);
//   console.log(student1.lang);


// var student1 = {
//     name : "Rakib Islam",
//     age : 27,
//     cgpa : 3.33,
//     lang : ["Bengali", "Nepali", "English"]
// }

// var student2 = {
//     name : "Tahmid Islam",
//     age : 27,
//     cgpa : 3.13,
//     lang : ["Bengali", "Turkish", "English"]
// }

// var student3  = {
//     name : "Ash Shams Mim",
//     age : 27,
//     cgpa : 3.93,
//     lang : ["Bengali", "Hindi", "English"]
// }

// console.log(student2.lang);