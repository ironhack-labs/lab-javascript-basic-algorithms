// Iteration 1: Names and Input
const hacker1 = "Aderemi";
console.log("the drivers name is " + hacker1);

const hacker2 = "Tommy";
console.log("the navigators name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log("Yo, the navigator goes first definetely");
} else {
    console.log("What?! You both have the same name");
}

// Iteration 3: Loops
let singleLetters = "";
for (let i = 0; i < hacker1.length; i++) {
    singleLetters += hacker1[i] + " ";
}
console.log(singleLetters.toUpperCase());

let nameBackwards = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    nameBackwards += hacker2[i];
}
console.log(nameBackwards);

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}