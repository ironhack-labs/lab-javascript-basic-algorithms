// Iteration 1: Names and Input
let hacker1 = 'Nostradamus';
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = 'Picasso';
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    return `The driver has the longest name, it has ${hacker1.length} characters.`
} else if (hacker1.length < hacker2.lenght) {
    return `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
} else {
    return `Wow, you both have equally long names, ${hacker1.length} characters!`
}

// Iteration 3: Loops

for (let name of hacker1) {
    console.log(hacker1.toUpperCase());
}