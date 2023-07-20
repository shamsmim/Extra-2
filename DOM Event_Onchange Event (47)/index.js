

console.clear();

const input = document.querySelector("input[name=name");
input.addEventListener('change', changeHandler)

function changeHandler(event){
    
    // console.log(event);
    // console.log(event.type);
    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.value);
    
}