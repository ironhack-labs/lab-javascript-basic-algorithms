// Iteration 1: Names and Input
const hacker1 = "Piero"
const hacker2 = "Piero também"
let hacker1Length = hacker1.length
let hacker2Length = hacker2.length

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
console.log(`${hacker1} has a total of ${hacker1Length} characters.`);
console.log(`${hacker2} has a total of ${hacker2Length} characters.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1Length} characters.`);}
    else if (hacker2Length > hacker1Length) {console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters!`);}
    else {console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`);}


// Iteration 3: Loops

let contadorDriver
let contadorNavigator