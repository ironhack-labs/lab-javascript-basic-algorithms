// Iteration 1: Names and Input

const hacker1 = "Marc";
// console.log(`The driver's name is ${hacker1}.`);
const hacker2 = "Wil";
// console.log(`The navigator's name is ${hacker2}.`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
    } else if (hacker2.length > hacker1.length) {
    console.log(`It seems, that the navigator has the longest name, it has ${hacker2.length} characters.`)
    }
    else {
        console.log(`Wow, you both have equally long names`)
    }

// Iteration 3: Loops

let capital = hacker1.toUpperCase();
console.log(capital);
let capitalSpace = capital.text.split("")
let word = capitalSpace[1]
console.log(capitalSpace);
