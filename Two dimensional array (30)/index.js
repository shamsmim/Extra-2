// 2D Array
// Create a function called highestRunScore that WebGLUniformLocation
// Receive a 2d array called playersInfo
// Based on highest ScreenOrientation, return the name of the player

function highestRunScore(playersInfo) {
    var  highestRunScore = playersInfo[0][0];
    var  highestRunScore = playersInfo[0][1];

    for(var x=1; x<playersInfo.length; x++){

        if(highestRunScore < playersInfo[x] [1]){
            highestRunScore = playersInfo[x] [1];
            highestRunScore = playersInfo[x] [0];
        }
    }

    return highestRunScore; 
}



 var playersInfo = [
    ["Ashraful", 95],
    ["Mizan", 25],
    ["Rakib", 45],
    ["Itra", 105],
];

var name = highestRunScore(playersInfo);
console.log(name);