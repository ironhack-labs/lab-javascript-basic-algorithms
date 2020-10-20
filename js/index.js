// Iteration 1: Names and Input

const hacker1 = "Enrique";

console.log("The driver's name is " + hacker1);

const hacker2 = "Eca";

console.log("The navigator's name is " + hacker2);


// Iteration 2: Conditionals

let hacker1Length = hacker1.length
let hacker2Length = hacker2.length

if (hacker1Length > hacker2Length) {
    console.log('The driver has the longest name, it has ' + (hacker1.length) + ' characters.');
}
else if (hacker1Length === hacker2Length) {
    console.log('Wow, you both have equally long names, ' + (hacker2.length) + ' characters!');
}
else if (hacker1Length < hacker2Length) {
    console.log('It seems that the navigator has the longest name, it has ' + (hacker2.length) + ' characters!');
};


// Iteration 3: Loops
// 1.

let upHack1 = [];
for (let i = 0; i < hacker1.length; i++) {
  upHack1 += hacker1[i].toUpperCase() + " ";
}

// 2.

let navRev = [];
for (let i = hacker2.length - 1; i >= 0; i--) {
  navRev += hacker2[i];
}

// 3.

if (hacker1.localeCompare(hacker2)) {
    console.log("The driver's name goes first.");
}
else if (hacker2.localeCompare(hacker1)) {
    console.log("Yo, the navigator goes first definitely.");
}
else if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
};