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

/* This part spells the driver's name in capital letters and with spaces between each characters. It converts the name of the driver to uppercase, then creates an empty container for the letters. After that, it uses a for loop to iterate through the characters of the new uppercase variable. The if statement adds empty spaces to the spaced name, except for the last character. Finally, the spaced name is output to the console log. */

const mayuscDriver = hackerOne.toUpperCase();

let spacedMayuscDriver = "";

for (let i = 0; i < hackerOne.length; i++) {
    spacedMayuscDriver += mayuscDriver[i];
    if (i !== hackerOne.length - 1) {
        spacedMayuscDriver += " ";
    }
}

console.log(`${spacedMayuscDriver}`);

/* This part spells the navigator's name backwards. It creates an empty variable to contain the reverse name, then it iterates backwards through the letters of the navigataor until it reaches the last one. Finally, the reverse name is output to the console log. */

let reverseNavigator = "";

for (let i = hackerTwo.length - 1; i >= 0; i--) {
    reverseNavigator += hackerTwo[i];
}

console.log(`${reverseNavigator}`);

/* This part combines various if else statements to compare the initial character of each driver's name and outputs to the console a message about which name comes first in lexicographical order */

if (hackerOne[0] > hackerTwo[0]) {
    console.log(`The driver's name goes first.`);
} else if (hackerOne[0] < hackerTwo[0]) {
    console.log(`Yo, the navigator goes first, definitely.`); 
} else {
    console.log(`What?! You both have the same name?`);
}