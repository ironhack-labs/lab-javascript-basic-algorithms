// Iteration 1: Names and Input

const hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Jane";
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

let hacker1Capitalized = '';
for (let i = 0; i < hacker1.length; i++) {
    hacker1Capitalized += hacker1[i].toLocaleUpperCase();

    if (i !== hacker1.length - 1) {
        hacker1Capitalized += " "
    }
}
console.log(hacker1Capitalized);


if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}
