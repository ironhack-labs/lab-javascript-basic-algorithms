// Names and Input
var hacker1 = "Harry";
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("What is the navigator's name?");
console.log("The navigator's name is " + hacker2);

//Conditionals
if(hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has "+ hacker1.length + " characters");
 } else if(hacker1.length < hacker2.length) {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
 } else {
   console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
 }

 var driversCharacters = "",
    i = 0;
while(i < hacker1.length) {
  if(i === hacker1.length -1) {
    driversCharacters += hacker1[i];
    i++;
    continue;
  }
  driversCharacters += hacker1[i] + " ";
  i++;
}
console.log(driversCharacters.toUpperCase());

var navigatorsCharacters = "";
for(var j = hacker2.length; j > 0; j--) {
  navigatorsCharacters += hacker2[j-1];
}

console.log(navigatorsCharacters);

var n = hacker1.localeCompare(hacker2);
switch(n) {
  case -1:
    console.log("The driver's name goes first");
    break;
  case 1:
    console.log("Yo, the navigator goes first definitely");
    break;
  case 0:
    console.log("What?! You both got the same name?");
    break;
}

// Lorem ipsum generator
