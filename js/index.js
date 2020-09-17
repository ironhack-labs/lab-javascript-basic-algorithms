// Iteration 1: Names and Input

const hacker1 = "Lewis Hamilton";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Christopher Columbus";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}


// Iteration 3: Loops

const HACKER1 = hacker1.toUpperCase();
let HACKER1byLetter = "";
for (let i = 0; i < HACKER1.length; i++) {
    HACKER1byLetter += HACKER1[i] + " ";
}
console.log(HACKER1byLetter);

let hacker2Reversed = ""
for (let i = hacker2.length - 1; i>=0; i--) {
    hacker2Reversed += hacker2[i];
}
console.log(hacker2Reversed);

switch (hacker1.localeCompare(hacker2)) {
    case -1:
        console.log("The driver's name goes first");
        break;
    case 1:
        console.log("Yo, the navigator goes first definitely");
        break;
    case 0:
        console.log("What?! You both have the same name?");
}