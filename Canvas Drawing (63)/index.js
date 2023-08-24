
var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");

//Border width ektu mota dekhabe
ctx.lineWidth = 3;

// Border er color bujhay
ctx.strokeStyle = "black"

// Rectangle er border ta ki size er hbe 
ctx.strokeRect(10,10,380,280);

// puro body ta color krbe
ctx.fillStyle = "green"

//Rectangle ta ki size er hbe 
ctx.fillRect(12,12,376,276);

//Center find & making with canvas
var centerX = c.width / 2;
var centerY = c.height / 2;

ctx.beginPath();
ctx.arc(centerX,centerY,80,0,2*Math.PI,false);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();