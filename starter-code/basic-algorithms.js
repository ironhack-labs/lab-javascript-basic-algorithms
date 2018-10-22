// Names and Input
var hacker1 = "Messi";

console.log("The driver's name is " + hacker1);

var hacker2;

hacker2 = prompt("What is the navigator's name?");

console.log("The navigator's name is " + hacker2);



// Conditionals
if(hacker2.length < hacker1.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
}else if(hacker2.length > hacker1.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}else{
  console.log("Wow, you both got equally long names, " +  hacker1.length + " characters!!");
}

// Loops
var hacker1Spaced = '';
for (var i=0; i < hacker1.length; i++){
  hacker1Spaced += (hacker1[i].toUpperCase() + ' ');
}

console.log(hacker1Spaced);

var hacker1Reverse = '';
for (var i = hacker1.length - 1; i >= 0; i--){
  hacker1Reverse += hacker1[i];
}

console.log(hacker1Reverse);

if (hacker1.toLowerCase() < hacker2.toLowerCase()){
  console.log("The driver's name goes first");
}else if (hacker2.toLowerCase() < hacker1.toLowerCase()){
  console.log("Yo, the navigator goes first definitely");
}else{
  console.log("What?! You both got the same name?");
}

