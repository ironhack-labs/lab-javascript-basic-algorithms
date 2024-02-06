// Iteration 1: Names and Input

let hacker1 = "Carlos";

console.log("The driver's name is ", hacker1);

let hacker2 = "Joan";

console.log("The navigator's name is ", hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has ", hacker1.length, " characters.");
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has ", hacker2.length, " characters.");
} else {
    console.log("Wow, you both have equally long names, XX characters!");
}

// Iteration 3: Loops

let resultString = "";

for (let i=0; i<hacker1.length; i++) {
    resultString += hacker1[i].toUpperCase() + " ";
}
console.log(resultString);

resultString = "";
for (let i=hacker2.length-1; i>=0; i--) {
    resultString += hacker2[i];
}
console.log(resultString);

let order = hacker1.localeCompare(hacker2);
if (order < 0) {
    console.log("The driver's name goes first.");
} else if (order > 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}