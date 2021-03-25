// Iteration 1: Names and Input
const hacker1 = "Jaime";

console.log("The driver's name is ", hacker1);

const hacker2 = "Natalia";

console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals
const hacker1 = "Jaime";
const hacker2 = "Natalia";


if (hacker1.length > hacker2.length) {
    console.log("The driver has the longer name, it has", hacker1.length, "characters");
} else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has", hacker2.length, "characters");
} else {
    console.log("Wow, you both have equally long names,", hacker1.length, "characters!");
}

// Iteration 3: Loops

let spelled = "";

for (let i = 0; i < hacker1.length; i++) {
    let letter = hacker1[i];

    spelled += letter.toUpperCase();
    spelled += " ";
}

console.log(spelled);

/*--------------------*/

let letters = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    letters += hacker2[i]
}

console.log(letters);

/*--------------------*/

/* We both spoke with Teo and he told us to make it with a conditional */

if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
    console.log("The driver's name goes first");
} else if (hacker2.toLowerCase() < hacker1.toLowerCase()) {
    console.log("Yo, the navigator goes first definitely");
} else {
    console.log("What?! You both hace the same name?");
}