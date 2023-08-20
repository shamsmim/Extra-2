console.clear();

const div = document.querySelector("div");

// div.addEventListener("click", function(){

//     console.log("click is occured");
// })


div.addEventListener("click", function(e){

    console.log(e.target.id);
})







// div.addEventListener("dblclick", function(){

//     console.log("dblclick is occured");
// })

// div.addEventListener("mousedown", function(){

//     console.log("mouse down is occured");
// })

// div.addEventListener("mouseup", function(){

//     console.log("mouse up is occured");
// })

// div.addEventListener("mouseenter", function(){

//     console.log("mouseenter is occured");
// })

// div.addEventListener("mouseleave", function(){

//     console.log("mouseleave is occured");
// })

// div.addEventListener("mousemove", function(){

//     console.log("mousemove is occured");
// })

// div.addEventListener("mouseover", function(e){

//     //console.log("mouseover is occured");
//     // console.log("clientX = " + e.clientX + ",clientY = " + e.clientY);

//     console.log("offsetX = " + e.offsetX + ",offsetY = " + e.offsetY);
// })







const buttons = document.querySelectorAll('.btn');
console.log(buttons);