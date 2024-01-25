// Iteration 1: Names and Input

const hacker1 = 'Stefano';

console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Stefano';

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
} else if (hacker1.length = hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
} */

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length === hacker2.length) {
   console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}


/* Preguntas:
- Cuando está bien así o habría que convertirlo a string?
- El ejemplo de str.length pone ${}
- Tengo que usar el valor mayor o el valor menor? */

// Iteration 3: Loops
