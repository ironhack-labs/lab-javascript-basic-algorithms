// Iteration 1: Names and Input
const hacker1 = 'popino'
console.log(`The drivers's name is ${hacker1}`)
const hacker2 = 'popino reloaded'
console.log(`The drivers's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
//3.1
console.log(hacker1.toUpperCase().split(""))

//3.2
let wordReverse = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
    wordReverse += hacker2[i];
}
console.log(wordReverse)

//3.3
if (hacker1 > hacker2) {
    console.log(`the driver's name goes first`)
} else if (hacker2 > hacker1) {
    console.log(`Yo, the navigator goes first, definitely`)
} else (hacker1 = hacker2) {
    console.log(`what? You both have the same name?`)
}
