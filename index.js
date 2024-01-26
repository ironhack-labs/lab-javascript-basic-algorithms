// Iteration 1: Names and Input

/* This part defines one variable for each hacker and prints a message including their name to the console */

const hackerOne = 'Stefano';

console.log(`The driver's name is ${hackerOne}`);

const hackerTwo = 'Laura';

console.log(`The navigator's name is ${hackerTwo}`);

// Iteration 2: Conditionals

/* This part uses else if to compare the length of the 2 names and outputs a message to the console about which name is longer */

if (hackerOne.length > hackerTwo.length) {
    console.log(`The driver has the longest name, it has ${hackerOne.length} characters.`);
} else if (hackerOne.length === hackerTwo.length) {
   console.log(`Wow, you both have equally long names, ${hackerOne.length} characters!.`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hackerTwo.length} characters.`);
}

// Iteration 3: Loops

/* This part converts the name of the driver to uppercase, then creates an empty container for the letters, then uses a for loop to iterate through the letters of the */

const mayuscDriver = hackerOne.toUpperCase();

let spacedMayuscDriver = "";

for (let i = 0; i < hackerOne.length; i++) {
    spacedMayuscDriver += mayuscDriver[i];
    if (i !== hackerOne.length - 1) {
        spacedMayuscDriver += " ";
    }
}

console.log(`${spacedMayuscDriver}`);

/* for (let i = 0; i < mayuscDriver.length; i++) {
    console.log(str[1]);
}*/

/* preguntas: is it more correct to use hackerOne or mayuscDriver here? */

let reverseNavigator = "";

for (let i = hackerTwo.length - 1; i >= 0; i--) {
    reverseNavigator += hackerTwo[i];
}

console.log(`${reverseNavigator}`);

let hackerOneInitial = "";

for (let i = 0; i < hackerOne.length; i++) {
    hackerOneInitial = hackerOne[0];
    break;
}

/*for (let i = hackerOne.length; i <= hackerOne.length; i = hackerOne[0]) {
    hackerOneInitial = hackerOne[0];
}*/

let hackerTwoInitial = "";

for (let i = hackerTwo.length; i <= hackerTwo.length; i = hackerOne[0]) {
    hackerTwoInitial = hackerTwo[0];
}

if (hackerOneInitial > hackerTwoInitial) {
    console.log(`The driver's name goes first.`);
} else if (hackerOneInitial < hackerTwoInitial) {
    console.log(`Yo, the navigator goes first, definitely.`); 
} else {
    console.log(`What?! You both have the same name?`);
}

/* for (let i = hackerOne.length; i = 1; hackerOne[i]);
for (let i = hackerTwo.length; i = 1; hackerTwo[i]); */

/* if (hackerOne[i] < hackerTwo[i]) {
    console.log(`The driver's name goes first.`);
}*/