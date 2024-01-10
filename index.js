// Iteration 1: Names and Input

let hacker1 = "Natalia";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Juanito";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters! `);
} else {
    console.log("Something went wrong");
};

// Iteration 3: Loops

// 3.1

let spacedAndCapitalized = "";

for (let i=0; i < hacker1.length; i++) {
    let upperChar = hacker1[i].toUpperCase() + " ";
    spacedAndCapitalized += upperChar;
}

console.log (spacedAndCapitalized);


// 3.2

let reversedName = "";

for (let i=hacker2.length-1; i >= 0; i--) {
    reversedName += hacker2[i];
}

console.log (reversedName);

// 3.3

/*let hacker1 = "Natalia";
let hacker2 = "Juanito";*/

if ('hacker1'.localeCompare('hacker2') === 1) {
    console.log("The driver's name goes first.")
} else if ('hacker1'.localeCompare('hacker2') === -1) {
    console.log("Yo, the navigator goes first, definitely.")
} else if ('hacker1'.localeCompare('hacker2') === 0) {
    console.log("What?! You both have the same name?")
} else {
    console.log("Something went wrong")
}