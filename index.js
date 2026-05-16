// Iteration 1: Names and Input
const hacker1= "Saddam"; 
console.log (`The driver's name is ${hacker1}`);
const hacker2= "Moises"; 
console.log (`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let spaceCase= " ";

for (let i=0; i < hacker1.length; i++) {
spaceCase += hacker1[i].toUpperCase() + " ";
}
console.log(spaceCase);

let spaceCase2=""

for (let i = hacker2.length - 1; i >= 0; i--) {
    spaceCase2 += hacker2[i];
}
console.log(spaceCase2);

if (hacker1[0] < hacker2[0]) {
    console.log(`The ${hacker1} name goes first`)
}
else if (hacker2[0] > hacker1[0]) {
    console.log(`Yo, the ${hacker2} goes first definitely`);
}
else {
    console.log(`What?! You both have the same name?`);
}