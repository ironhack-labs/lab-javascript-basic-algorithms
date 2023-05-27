// Iteration 1: Names and Input
const hacker1 = 'jason'
console.log(`The driver's name is ${hacker1}`)
const hacker2 = 'Michael'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
const nuevoHacker1 = hacker1.split("").join(" ").toUpperCase();
console.log(nuevoHacker1)
let reverso = "";
for(let i = hacker1.length -1; i >= 0; i--) {
  reverso += hacker1[i];
}
console.log(reverso);
const newHacker1 = hacker1.split("").sort().join("");
const newHacker2 = hacker2.split("").sort().join("");
if (newHacker1 > newHacker2) {
    console.log("The driver's name goes first.")
} else if (newHacker1 < newHacker2) {
    console.log('Yo, the navigator goes first, definitely.')
} else {
    console.log('What?! You both have the same name?')
}
