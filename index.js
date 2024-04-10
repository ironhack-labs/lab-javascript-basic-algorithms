// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
const hacker1 = "Nuno";

// 1.2 Print "The driver's name is XXXX".
console.log("The driver's name is " + hacker1);

// 1.3 Create a variable hacker2 with the navigator's name.
const hacker2 = "Steelhacker";

// 1.4 Print "The navigator's name is YYYY".
console.log("The navigator's name is " + hacker2);



// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name is " + hacker1.length + " characters");
}
else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters");
}
else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters")
}



// Iteration 3: Loops
// 3.1
let spacedName = "";

for (let i = 0; i < hacker1.length; i++) {
    spacedName += hacker1[i].toUpperCase() + " ";
}
console.log(spacedName);

// 3.2

let reversedName = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
    reversedName += hacker1[i];
}
console.log(reversedName);

// 3.3
const comparasionResult = hacker1.localeCompare(hacker2);

if (comparasionResult < 0) {
    console.log("The driver's name goes first.");
}
else if (comparasionResult > 0) {
    console.log("Yo, the navigator goes first, definitely.");
}
else {
    console.log("What?! You both have the same name?");
}
