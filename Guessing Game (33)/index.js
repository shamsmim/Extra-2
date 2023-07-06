 //Gessing Game
 // Guss a number from 1 to 5
 // Generate a random number between 1 to 5
//  If the guess number matches random number : then you will win 
//  Run the game for 5 Time
//  show the number of wons and lots 


 var numOfWon = 0;
 var numOfLost = 0;

for (var i= 1; i<=5; i++){
    var guessNumber = parseInt(prompt("Enter a number from 1 to 5 :"));

var randomNumber = Math.floor(Math.random()*5) + 1;

if(guessNumber==randomNumber){
    console.log("You have won");
    numOfWon++;
}
else{
    console.log("You have lost. random number was : " + randomNumber);
    numOfLost++;
}
}

document.write("Total Number of Won = " + numOfWon + "<br>");

document.write("Total Number of Lost = " + numOfLost + "<br>");

