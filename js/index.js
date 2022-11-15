
console.log("I'm ready!");

const hacker1 = "Edu";
const hacker2 = "Google";
let driverName = '';
let driverNameReverse = '';

// Iteration 1: Names and Input
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}


// Itenoderation 3: Loops
for (char of hacker1) {
    if (driverName.length > 0) {
        driverName += " " + char.toUpperCase()
        continue;
    }
    driverName += char
}

console.log(driverName);

for (let charIndex = driverName.length - 1; charIndex >= 0; charIndex--) {
    driverNameReverse += driverName[charIndex]
}

console.log(driverNameReverse)
