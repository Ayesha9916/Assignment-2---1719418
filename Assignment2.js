var position = [0,0];
var snake1 = 15;
var fallposition1 = 5;
var snake2 = 23;
var fallposition2 = 13;
var ladder1 = 2;
var climbposition1 = 12;
var ladder2 = 10;
var climbposition2 = 20;

function Roll(user){
out = document.getElementById("output");
diceRoll = Math.floor(Math.random() * 6) + 1;
position[user-1] += diceRoll;
var command = "";
switch(position[user-1]){
case snake1:
position[user-1] = fallposition1;
command = ", You fell on a snake, fall to position ";
break;
case snake2:
position[user-1] = fallposition2;
command = ", You fell on a snake, fall to position ";
break;
case ladder1:
position[user-1] = climbposition1;
command = ", You stumble on a ladder, climb to postion ";
break;
case ladder2:
position[user-1] = climbposition2;
command = ", You stumble on a ladder, climb to postion ";
break;
default :
command = ", move to position ";
break;
}
if(position[user-1] > 25){
out.textContent += "Player "+user+" WON!!!\n Congratulations Player "+user;
turn = document.getElementById("plyr1");
turn.disabled = true;
turn = document.getElementById("plyr2");
turn.disabled = true;
}
else
out.textContent += "Player "+ user + " rolls...Die: " + diceRoll + command + position[user-1] + "\n";
}
