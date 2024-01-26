// Iteration 1: Names and Input

const hacker1 = 'Stefano';

console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Laura';

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

/* console.log(`${hacker1.length}`);
console.log(`${hacker2.length}`); */

const driverLength = hacker1.length;

const navigatorLength = hacker2.length;

/* if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
} */

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length === hacker2.length) {
   console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

/* let comparison = ""

switch (comparison) {
    case (hacker1.length > hacker2.length):
        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
        break;
    case (hacker1.length === hacker2.length):
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
        break;
    default:
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} */

/* switch (comparison) {
    case (hacker1.length > hacker2.length):
        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
        break;
    case (hacker1.length < hacker2.length):
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
        break;
    default:
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
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


/* for (const value of hacker1) {
    console.log (value.toUpperCase());
}

for (const value of hacker2) {
    console.log (value.toUpperCase());
} */

const mayuscDriver = hacker1.toUpperCase();

let spacedMayuscDriver = "";

for (let i = 0; i < hacker1.length; i++) {
    spacedMayuscDriver += mayuscDriver[i];
    if (i !== hacker1.length - 1) {
        spacedMayuscDriver += " ";
    }
}

console.log(`${spacedMayuscDriver}`);

/* for (let i = 0; i < mayuscDriver.length; i++) {
    console.log(str[1]);
}*/

/* preguntas: is it more correct to use hacker1 or mayuscDriver here? */

let reverseNavigator = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseNavigator += hacker2[i];
}

console.log(`${reverseNavigator}`);



/* for (let i = hacker1.length; i = 1; hacker1[i]);
for (let i = hacker2.length; i = 1; hacker2[i]); */

/* if (hacker1[i] < hacker2[i]) {
    console.log(`The driver's name goes first.`);
}*/