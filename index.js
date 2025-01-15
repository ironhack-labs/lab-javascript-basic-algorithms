// Iteration 1: Names and Input
const hacker1 = "Airam";
console.log(`The driver's name is ${hacker1}.`);
const hacker2 = "Johana";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`)
}

// Iteration 3: Loops

//3.1
let capitalLetters = "";
if (hacker1) {
    for (let i = 0; i < hacker1.length; i++) {
        capitalLetters += hacker1[i].toUpperCase() + " ";
    }
    console.log(capitalLetters);
}

//3.2
let reverseName = "";
if (hacker1) {
    for (let i = hacker1.length - 1; i >= 0; i--) {
        reverseName += hacker1[i];
    }
    console.log(reverseName);
}

//3.3
let lexicOrder = hacker1.localeCompare(hacker2);

if (lexicOrder < 0) {
    console.log("The driver's name goes first.");
} else if (lexicOrder > 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else if (lexicOrder === 0) {
    console.log("What?! You both have the same name?");
}