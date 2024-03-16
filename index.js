// Iteration 1: Names and Input
const hacker1 = "Javi";
const hacker2 = "Javier"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let driver = "";
let navigator = "";

for (i = 0; i < hacker1.length; i++) {
    driver += hacker1[i].toUpperCase() + " ";
}

console.log(driver);

for (let i = hacker2.length - 1; i >= 0; i--) {
    navigator += hacker2[i];
}

console.log(navigator);

if (hacker1 < hacker2) {
    console.log(`The driver's name, ${hacker1}, goes first.`);
} else if (hacker1 > hacker2) {
    console.log(`Yo, the navigator, goes first, definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}

// Bonus 1:

const longText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nam fugiat quaerat maiores, similique recusandae voluptates in animi ullam, amet magni consequatur! Quos maiores atque illum culpa nulla quaerat aut quasi. Assumenda maxime dolore et ducimus saepe explicabo esse architecto!"

let wordCount = 0;



let etCount = 0;

for (let i = 0; i < longText.length; i++) {
    const etChars = longText[i] + longText[i + 1] + longText[i + 2] + longText[i + 3];
    if (etChars === " et ") {
        etCount ++;
    }
}

console.log(`The text contains ${etCount} "et"`);