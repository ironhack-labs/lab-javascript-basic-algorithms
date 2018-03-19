// Names and Input
console.log("I'm Ready!");
var hacker1 = "Leo";
var hacker2 = prompt("What's your name?");
console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

//Conditionals
if (hacker2.length > hacker1.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else if (hacker2.length === hacker1.length) {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters");
} else {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters");
}

// Lorem ipsum generator
var driverName = " ";

for (i=0; i<hacker1.length; i++) {
  driverName += hacker1[i].toUpperCase() + " ";
}

console.log(driverName);

var navigatorName = " ";

for (i=hacker2.length-1; i>= 0; i--) {
  navigatorName += hacker2[i];
}

console.log(navigatorName);