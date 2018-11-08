console.log("I'm Ready!");
var hacker1 = "Bruno";

console.log("The driver's name is " + hacker1);

var hacker2 = "abcde";

if(hacker1.length > hacker2.length){
  console.log(hacker1 + " has the longest name, it has " + hacker1.length + " characters");
}
else if (hacker1.length < hacker2.length){
  console.log(hacker2 + " has the longest name, it has " + hacker2.length + " characters");
}
else if (hacker1.length == hacker2.length){
  console.log("wow, you both got equally long names, "+ hacker1.length + " characters!!"); 
}

for(var i = 0; i < hacker1.length; i++){
  process.stdout.write(hacker1[i].toUpperCase() + " ");
}
console.log("");


var inverted = "";
for(var i = hacker2.length-1; i >= 0; i--){
  inverted += hacker2[i];
}
console.log(inverted);

switch(hacker1.localeCompare(hacker2)){
  case -1:
    console.log("The driver's name goes first")
    break;
  case 0:
    console.log("What?! You both got the same name?")
    break;
  case 1:
    console.log("Yo, the navigator goes first definitely")
    break;
}

var palindrome = "arara";
var invertedPal = "";
for(var i = palindrome.length-1; i >= 0; i--){
  invertedPal += palindrome[i];
}
console.log(invertedPal);

if(palindrome == invertedPal){
  console.log("Is a palindrome")
}
else{
  console.log("Not a palindrome")
}
