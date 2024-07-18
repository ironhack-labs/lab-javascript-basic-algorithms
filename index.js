// Iteration 1: Names and Input

const hacker1 = "Amrata";
console.log(`"The driver's name is ${hacker1}"`);

const hacker2 = "Amrata";
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals

let driverName = "Amrata";
let navigatorName = "Amrata";

if (driverName.length > navigatorName.length) {
    console.log(`The driver has the longest name, it has ${driverName.length} characters.`);

} else if (driverName.length < navigatorName.length) {
    console.log(`The navigator has the longest name, it has ${navigatorName.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${driverName.length} characters!`);
}

// Iteration 3: Loops

let driverNewName = "A m r a t a";
console.log(driverNewName.toUpperCase());

let navigatorNewName = "amrata";
let reversed = "";

for (let i = navigatorNewName.length - 1; i >= 0; i--) {
  reversed += navigatorNewName[i];
}

console.log(reversed); 