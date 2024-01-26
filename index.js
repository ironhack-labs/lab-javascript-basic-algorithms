// Iteration 1: Names and Input

const hackerOne = 'Stefano';

console.log(`The driver's name is ${hackerOne}`);

const hacker2 = 'Waura';

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

/* console.log(`${hackerOne.length}`);
console.log(`${hacker2.length}`); */

const driverLength = hackerOne.length;

const navigatorLength = hacker2.length;

/* if (hackerOne.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hackerOne.length} characters.`);
} else if (hackerOne.length < hacker2.length) {
   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hackerOne.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hackerOne.length} characters!.`);
} */

if (hackerOne.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hackerOne.length} characters.`);
} else if (hackerOne.length === hacker2.length) {
   console.log(`Wow, you both have equally long names, ${hackerOne.length} characters!.`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

/* let comparison = ""

switch (comparison) {
    case (hackerOne.length > hacker2.length):
        console.log(`The driver has the longest name, it has ${hackerOne.length} characters.`);
        break;
    case (hackerOne.length === hacker2.length):
        console.log(`Wow, you both have equally long names, ${hackerOne.length} characters!.`);
        break;
    default:
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} */

/* switch (comparison) {
    case (hackerOne.length > hacker2.length):
        console.log(`The driver has the longest name, it has ${hackerOne.length} characters.`);
        break;
    case (hackerOne.length < hacker2.length):
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
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

for (const value of hacker2) {
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

for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseNavigator += hacker2[i];
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

for (let i = hacker2.length; i <= hacker2.length; i = hackerOne[0]) {
    hackerTwoInitial = hacker2[0];
}

if (hackerOneInitial > hackerTwoInitial) {
    console.log(`The driver's name goes first.`);
} else if (hackerOneInitial < hackerTwoInitial) {
    console.log(`Yo, the navigator goes first, definitely.`); 
} else if (hackerOneInitial = hackerTwoInitial) {
    console.log(`What?! You both have the same name?`);
}

/* for (let i = hackerOne.length; i = 1; hackerOne[i]);
for (let i = hacker2.length; i = 1; hacker2[i]); */

/* if (hackerOne[i] < hacker2[i]) {
    console.log(`The driver's name goes first.`);
}*/