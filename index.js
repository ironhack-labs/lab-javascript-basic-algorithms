// Iteration 1: Names and Input

/* This part defines one variable for each hacker and prints a message including their name to the console */

const hackerOne = 'Stefano';

console.log(`The driver's name is ${hackerOne}`);

const hackerTwo = 'Laura';

console.log(`The navigator's name is ${hackerTwo}`);

// Iteration 2: Conditionals

/* console.log(`${hackerOne.length}`);
console.log(`${hackerTwo.length}`); */

const driverLength = hackerOne.length;

const navigatorLength = hackerTwo.length;

/* if (hackerOne.length > hackerTwo.length) {
    console.log(`The driver has the longest name, it has ${hackerOne.length} characters.`);
} else if (hackerOne.length < hackerTwo.length) {
   console.log(`It seems that the navigator has the longest name, it has ${hackerTwo.length} characters.`);
} else if (hackerOne.length === hackerTwo.length) {
    console.log(`Wow, you both have equally long names, ${hackerOne.length} characters!.`);
} */

if (hackerOne.length > hackerTwo.length) {
    console.log(`The driver has the longest name, it has ${hackerOne.length} characters.`);
} else if (hackerOne.length === hackerTwo.length) {
   console.log(`Wow, you both have equally long names, ${hackerOne.length} characters!.`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hackerTwo.length} characters.`);
}

/* let comparison = ""

switch (comparison) {
    case (hackerOne.length > hackerTwo.length):
        console.log(`The driver has the longest name, it has ${hackerOne.length} characters.`);
        break;
    case (hackerOne.length === hackerTwo.length):
        console.log(`Wow, you both have equally long names, ${hackerOne.length} characters!.`);
        break;
    default:
        console.log(`It seems that the navigator has the longest name, it has ${hackerTwo.length} characters.`);
} */

/* switch (comparison) {
    case (hackerOne.length > hackerTwo.length):
        console.log(`The driver has the longest name, it has ${hackerOne.length} characters.`);
        break;
    case (hackerOne.length < hackerTwo.length):
        console.log(`It seems that the navigator has the longest name, it has ${hackerTwo.length} characters.`);
        break;
    default:
        console.log(`Wow, you both have equally long names, ${hackerOne.length} characters!.`);
} */

/* Preguntas:
- Cuando está bien así o habría que convertirlo a string?
- El ejemplo de str.length pone ${}
- Tengo que usar el valor mayor o el valor menor? */

// Iteration 3: Loops

/* 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name? */


/* for (const value of hackerOne) {
    console.log (value.toUpperCase());
}

for (const value of hackerTwo) {
    console.log (value.toUpperCase());
} */

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
} else if (hackerOneInitial = hackerTwoInitial) {
    console.log(`What?! You both have the same name?`);
}

/* for (let i = hackerOne.length; i = 1; hackerOne[i]);
for (let i = hackerTwo.length; i = 1; hackerTwo[i]); */

/* if (hackerOne[i] < hackerTwo[i]) {
    console.log(`The driver's name goes first.`);
}*/