// Iteration 1: Names and Input
let hacker1 = 'Jose';
console.log(`The drivers name is ${hacker1}`)

let hacker2 = 'Cristina'

console.log(`The navigator name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length}`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seem that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both hace equally long names, ${hacker1.length} characters. `)
}



// Iteration 3: Loops

let hackerUpp = hacker1.toUpperCase();


let capHack = hackerUpp.split('').join(' ');

hackerUpp.split('')

let reverseHack = hacker2.split('').reverse().join('');

console.log(capHack);
console.log(reverseHack);

let lexi = hacker1.localeCompare(hacker2);


console.log(lexi);

if (lexi === 1) {
    console.log(`The drivers name goes first`)
} else if (lexi === -1) {
    console.log(`Yo, the navigator goes first definitely`)
} else {
    console.log(`What?! You both have the same name`)
}