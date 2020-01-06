// Iteration 1: Names and Input
console.log("I'm Ready!")
let hacker1 = "Johnny";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Kiyo";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name. It has ${hacker1.length} characters.`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

// Iteration 3: Loops
let driverNameCaps = ""

for (let i = 0; i < hacker1.length; i++) {
    driverNameCaps += hacker1[i].toUpperCase() + " "
}
console.log(driverNameCaps);

let navNameReverse = ""

for (let i = hacker2.length - 1; i >= 0; i--) {
    navNameReverse += hacker2[i]
}

console.log(navNameReverse);

if (hacker1.localeCompare(hacker2)) {
    console.log("The driver's name goes first.")
} else if (hacker.localeCompare(hacker1)) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}