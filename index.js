// Iteration 1: Names and Input
const hacker1 = "Britta";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Greta";
console.log(`The navigator's name is ${hacker2}`);

function longestName(hacker1, hacker2) {
    if (hacker1.length < hacker2.length) {
        return `The driver has the longest name, it has ${hacker1.length} characters.`;
    } else if (hacker1.length > hacker2.length) {
        return `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`;
    } else {
        return `Wow, you both have equally long names, ${hacker1.length} characters!`;
    }
}
console.log(longestName(hacker1, hacker2));


// Iteration 3: Loops

// 3.1
const withSpaces = hacker1.split('').join(' '); 
console.log(withSpaces.toUpperCase(withSpaces))

// 3.2
let reversedHacker2 = [...hacker2].reverse().join('');
console.log(reversedHacker2);

// 3.3
const lexiOrder = hacker1.localeCompare(hacker2);
    if (lexiOrder < 0) {
        console.log("The driver's name goes first.");
    } else if (lexiOrder > 0) {
        console.log("Yo, the navigator goes first, definitely.");
    } else {
        console.log("What?! You both have the same name?");
    }

