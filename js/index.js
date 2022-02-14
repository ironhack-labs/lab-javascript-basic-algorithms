// Iteration 1: Names and Input
let hacker1 = "Luiz";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Felipe";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let message = "";
const lengthName1 = hacker1.length;
const lengthName2 = hacker2.length;

if (lengthName1 > lengthName2) {
    message = `The driver has the longest name, it has ${lengthName1} characters.`;
} else if (lengthName1 < lengthName2) {
    message = `It seems that the navigator has the longest name, it has ${lengthName2} characters.`;
} else {
    message = `Wow, you both have equally long names, ${lengthName1} characters!`;
}
console.log(message);

// Iteration 3: Loops
const hacker1UpperCase = hacker1.toUpperCase();
const hacker2UpperCase = hacker2.toUpperCase();

let newHacker1Name = "";
for (let i = 0; i < hacker1.length; i++){
    newHacker1Name += hacker1UpperCase[i];
    if (i < hacker1.length - 1) {
        newHacker1Name += " ";
    }
}
console.log(`Driver's name, separated by a space and in capitals: ${newHacker1Name}`);

let newHacker2Name = "";
for (i = hacker2.length - 1; i >= 0; i--) {
    newHacker2Name += hacker2[i];
}
console.log(`Navigator's name, in reverse order: ${newHacker2Name}`);

const minLength = Math.min(lengthName1, lengthName2);
message = "";

if (hacker1UpperCase === hacker2UpperCase) {
    message = "What?! You both have the same name?";
} else {
    for (i = 0; i < minLength; i++){
        if (hacker1UpperCase[i] < hacker2UpperCase[i]){
            message = "The driver's name goes first.";
            break;
        } else if (hacker2UpperCase[i] < hacker1UpperCase[i]) {
            message = "Yo, the navigator goes first definitely.";
            break;
        }
    }
    if (message === "") {
        if (lengthName1 < lengthName2) {
            message = "The driver's name goes first.";
        } else {
            message = "Yo, the navigator goes first definitely.";
        }
    }
}
console.log(message);