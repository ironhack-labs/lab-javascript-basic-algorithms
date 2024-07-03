// Iteration 1: Names and Input
let hacker1 = 'Celestial'
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Trash"

console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}

else  if (hacker2.length > hacker1.length ) {
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

else {
    console.log("Wow, you both have equally long names, XX characters!");
}

// Iteration 3: Loops
let driversName = "Celestial"
let upperDriversName = ' '


for (i=0;i < driversName.length; i++) {
    upperDriversName += driversName[i].toUpperCase() + ' ';
}
console.log(upperDriversName)

let hacker2Reversed = ''

for (let i = hacker2.length - 1; i >= 0; i--){ 
    hacker2Reversed += hacker2[i]; 
}
console.log(hacker2Reversed);



const string1 = "Celestial";
const string2 = "Trash";

if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`);
} else if (hacker1 > hacker2) {
    console.log(`Yo, the navigator goes first, definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}