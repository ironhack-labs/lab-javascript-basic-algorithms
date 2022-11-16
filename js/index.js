
// Iteration 1: Names and inputs

const hacker1 = 'Cristian';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Ana';
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals 

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length === hacker2.length) {
    console.log(`wow, you both have equally long names, ${hacker1.length} characters!`);
}



// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let driverSpacedName = '';
for (let i = 0; i < hacker1.length; i++) {
    driverSpacedName += hacker1[i] + ' ';
}
console.log(`${driverSpacedName.toUpperCase()}`);

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let = navigatorsReversedName = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
    navigatorsReversedName += hacker2[i];
}
console.log(`${navigatorsReversedName}`);


/* 3.3 Depending on the lexicographic order of the strings, print: 
- The driver's name goes first. 
- Yo, the navigator goes first definitely. 
- What?! You both have the same name? */

if (hacker1 > hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker2 > hacker1) {
    console.log('Yo, the navigator goes first definitely.');
} else if (hacker1 === hacker2) {
    console.log('What!? You have the same name?');
}
