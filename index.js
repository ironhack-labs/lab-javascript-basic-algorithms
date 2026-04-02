// Iteration 1: Names and Input
const hacker1 = "Jordi"
const hacker2 = "Jordi"

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

const hacker1Lenght = hacker1.length;
const hacker2Lenght = hacker2.length;

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1Lenght} characters.`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker2Lenght} characters.`)
}
else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1Lenght} characters!`)
}

// Iteration 3: Loops

const result = hacker1.toUpperCase().split("").join(" ");
console.log(result);

let reversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    reversed += hacker2[i];
}

console.log(reversed);

if (hacker1 > hacker2){
    console.log(`The driver's name goes first.`)
}
else if (hacker1 < hacker2){
    console.log(`Yo, the navigator goes first, definitely.`)
}
else if (hacker1 === hacker2){
    console.log(`What?! You both have the same name?`)
}