// Names and Input
var hacker1 = "jason";
console.log("the drivers name is " + hacker1);

var hacker2 = prompt("what is the navigators name?");
console.log("The navigators name is " + hacker2)

//Conditionals

if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1.length < hacker2.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else if (hacker1.length === hacker2.length) {
  console.log("wow, you both got equally long names, " + hacker2.length + " characters!!");
}

// loops

for (var i = 0; i < hacker1.length; i++) {
  var driversName = hacker1.toUpperCase().split('').join(' '); 
  console.log(driversName);
}

for (var i = 0; i < hacker1.length; i++) {
  var reverseName = hacker1.split('').reverse().join(''); 
  console.log(reverseName);
}

// Lorem ipsum generator
