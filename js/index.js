// Iteration 1: Names and Input
const hacker1 = "Julien";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Olga";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(
        `The driver has the longest name, it has ${hacker1.length} characters.`
    );
} else if (hacker2.length > hacker1.length) {
    console.log(
        `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );
} else if (hacker1.length === hacker2.length) {
    console.log(
        `Wow, you both have equally long names, ${hacker1.length} characters!`
    );
}

// Iteration 3: Loops

let driverName = hacker1.toUpperCase();
let newDriverName = "";

for (let i = 0; i < driverName.length; i++) {
    newDriverName += driverName[i] + " ";
}

console.log(newDriverName);

let navigatorName = hacker2;
let newNavigator = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    newNavigator += navigatorName[i];
}

console.log(newNavigator);

// Locale compare
const arr = [newDriverName, newNavigator];
const sorted = arr.sort((a, b) => a.localeCompare(b));

console.log(sorted);

if (sorted[0] < sorted[1]) {
    console.log("The driver's name goes first.");
} else if (sorted[0] > sorted[1]) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}