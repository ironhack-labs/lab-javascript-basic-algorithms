// Iteration 1: Names and Input

const hacker1 = "Ernesto";
console.log(`The driver\`s name is ${hacker1}`);

const hacker2 = "Rodolfin";
console.log(`The navigator\'s name is ${hacker2}`);


// Iteration 2:

if (hacker1.length > hacker2.length) {
    console.log(`The driver ${hacker1} has the longest name, it has ${hacker1.length} characters`);

} else if (hacker1.length < hacker2.length) {
    console.log(`The navigator ${hacker2} has the longest name, it has ${hacker2.length} characters`);
}


// Iteration 3: Loops

const nana = `John`;
const nanaUpper = nana.toUpperCase();
let nameSpaced = ``;
for (let i = 0; i < nanaUpper.length; i++) {
    nameSpaced += nanaUpper[i] + ` `;
}
console.log(nameSpaced);


