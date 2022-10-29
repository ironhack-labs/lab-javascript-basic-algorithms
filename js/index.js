// Iteration 1: Names and Input
const hacker1 = "DriverName";
console.log( `"The driver's name is ${hacker1}"`);

const hacker2 = "NavigatorName";
console.log( `"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length) {
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else {
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops - Parte 1
let resultP1 = ""
for (let i = 0; i < hacker1.length; i++) {
    resultP1 += hacker1[i].toLocaleUpperCase() + " ";
    }

console.log(resultP1.trim());

// Iteration 3: Loops - Parte 2
let resultP2 = ""
for (let i = hacker2.length-1; i >= 0 ; i--) {
    resultP2 += hacker2[i];
}

console.log (resultP2)

// Iteration 3: Loops - Parte 3

if (hacker1.localeCompare(hacker2) === 1) {
console.log (`The driver's name goes first`);
} else if (hacker1.localeCompare(hacker2) === -1) {
console.log (`Yo, the navigator goes first definitely`);
} else {
console.log (`What?! You both have the same name?`);
}
