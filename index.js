// Iteration 1: Names and Input

const hacker1 = "driversName";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "navigatorsName";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters`)
} else console.log(`Wow, you both have equally long names, ${hacker1.length && hacker2.length} characters!`)

// Iteration 3: Loops

/* Print the characters of the driver's name, separated by space, 
and in capital letters, i.e., "J O H N". */

const driversNameWithCapitalsAndSpaces = hacker1.toUpperCase().split('').join(' ');
console.log(driversNameWithCapitalsAndSpaces);

/* Print all the characters of the navigator's 
name in reverse order, i.e., "nhoJ". */

const reversedNavigatorsName = hacker2.split('').reverse().join('');
console.log(reversedNavigatorsName);

/* Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name? */

const comparison = hacker1.localeCompare(hacker2);

if (comparison < 0) {
    console.log("The driver's name goes first.");
} else if (comparison > 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}


