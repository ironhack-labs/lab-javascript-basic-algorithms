// Exercise Name and Input
var hacker1 = "Fran";
console.log("The driver's name is " + hacker1);
var hacker2 = prompt("Enter the name of Driver 2", "");
console.log("The driver's name is " + hacker2);

// Conditionals
if (hacker1.length < hacker2.length) {
    console.log("he Driver has the longest name, it has " + hacker2.length + " characters!!");
} else if (hacker1.length > hacker2.length) {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters!!");
} else {
    console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
};

// Loops
var arrayHacker1 = Array.from(hacker1);
var capitalised = []
for (var i = 0; i < arrayHacker1.length; i++) {
  capitalised.push(arrayHacker1[i].toUpperCase());
};
console.log(capitalised.join(' '))

var arrayHacker2 = Array.from(hacker2);
var capitalised = []
for (var i = 0; i < arrayHacker2.length; i++) {
  capitalised.push(arrayHacker2[i].toUpperCase());
};
console.log(capitalised.join(' '))

var reversed1 = arrayHacker1.reverse();
console.log(reversed1.join(''))

var reversed2 = arrayHacker2.reverse();
console.log(reversed2.join(''))

var orden = hacker2.localeCompare(hacker1);

if ( orden < 0) {
  console.log("The driver's name goes first")
} else {
  console.log("Yo, the navigator goes first definitely")
}
// Lorem ipsum generator
