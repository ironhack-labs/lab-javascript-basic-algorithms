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
