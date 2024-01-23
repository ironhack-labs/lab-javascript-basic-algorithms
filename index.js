// Iteration 1: Names and Input
let hacker1 = "John";
console.log("The driver's name is " + hacker1);

let hacker2 = "Chris";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;
console.log(hacker1Length);
console.log(hacker2Length);

if (hacker1Length === hacker2Length) {
    console.log("Wow, you both have equally long names, " + hacker1Length + " characters!");
} else if (hacker1Length > hacker2Length ) {
    console.log("The driver has the longest name, it has " + hacker1Length + " characters.");
} else {
    console.log("It seems that the navigator has the longest name, it has " + hacker2Length + " characters.");
}

// Iteration 3: Loops

/* for (const i of hacker1) {
    console.log(i + "space");
} */

const hacker1SpacesUpperCase = hacker1.split("").join(" ").toUpperCase();
console.log(hacker1SpacesUpperCase);

const hacker2Reverse = hacker2.split("").reverse().join("");
console.log(hacker2Reverse);

const lexicalCompare = hacker1.localeCompare(hacker2);

if (lexicalCompare == 1) {
    console.log("Yo, the navigator goes first, definitely.");
} else if (lexicalCompare == -1 ) {
    console.log("The driver's name goes first.");
} else {
    console.log("What?! You both have the same name?");
}