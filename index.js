// Iteration 1: Names and Input
const hacker1 = "Kumar";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Malu";
console.log(`The navigator's name is ${hacker2}`);
console.log("");
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}
console.log("");

// Iteration 3: Loops
let capsHacker1Name = hacker1.toUpperCase();
//console.log(capsHacker1Name);
let newHacker1Name = ''
for (let i = 0; i<hacker1.length; i++) {
    newHacker1Name += capsHacker1Name[i];
    newHacker1Name += ' ';
}
//console.log(newHacker1Name);

let newHacker2Name = '';
for (let i = hacker2.length-1;i >= 0; i--) {
    newHacker2Name += hacker2[i];
}
console.log(newHacker1Name);
console.log(newHacker2Name);

//console.log(newHacker1Name.localeCompare(newHacker2Name));

//const nameOrder = newHacker1Name.localeCompare(newHacker2Name);
const nameOrder = hacker1.localeCompare(hacker2);
console.log(nameOrder)

if (nameOrder === -1) {
    console.log("The driver's name goes first.") 
} else if (nameOrder === 1) {
    console.log("The navigator goes first, definitely.")  
} else {
    console.log("What?! You both have the same name?");
}