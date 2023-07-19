
    
for(var i = 0; i <3; i++){

    document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
        var text = this.innerHTML;
        console.log(text);
        audioPlay(text);
        playanimation(text);
})

}


function audioPlay(text){

    switch (text) {
        case "a":
            var audio = new Audio("audio/a.mp3");
            audio.play();
            break;
    
            case "b":
                var audio = new Audio("audio/b.mp3");
                audio.play();
                break;
    
                case "c":
                var audio = new Audio("audio/c.mp3");
                audio.play();
                break;
     }
}


 function playanimation(text){

    var slecetedButton = document.querySelector("."+text)
    slecetedButton.classList.add("anim")


    setTimeout(function() {
        slecetedButton.classList.remove("anim")
    }, 1000);
 }