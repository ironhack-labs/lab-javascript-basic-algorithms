// Iteration 1: Names and Input

const hacker1 = "Noah";
console.log("The driver's name is " + hacker1);
const hacker2 = "Luc";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1 > hacker2){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
}
if (hacker1 < hacker2){
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
}
if (hacker1 === hacker2) {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}

// Iteration 3: Loops
console.log(hacker1.toUpperCase().split("").join(" "));

console.log(hacker2.split('').reverse().join(''));

const lexiOrder = hacker1.localeCompare(hacker2);

if (lexiOrder < 0) {
  console.log("The driver's name goes first.");
}
if (lexiOrder > 0){
  console.log("Yo, the navigator goes first, definitely.");
}
else {
  console.log("What?! You both have the same name?");
}
