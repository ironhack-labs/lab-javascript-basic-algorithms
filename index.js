// Iteration 1: Names and Input
let hacker1 = prompt("What is your name?");
alert("The driver's name is " + hacker1);
let hacker2 = navigator.userAgent;
alert("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  alert("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker1.length < hacker2.length) {
    alert("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {hacker1.length === hacker2.length;
  alert("Wow, you both have equally long names, " + hacker1.length +" characters!");
}
// Iteration 3: Loops
alert(hacker1.toUpperCase().split("").join(" "));
alert(hacker2.split("").reverse().join(""));

if (hacker1 < hacker2) {
  alert("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  alert("Yo, the navigator's name goes first.");
} else {
  alert("What?! You both have the same name?");
}

