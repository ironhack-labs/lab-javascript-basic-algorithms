// Iteration 1: Names and Input
// Iteration 1: Names and Input
let hacker1 = "helena";
console.log(`The driver,s name is ${hacker1}`);

const hacker2 = "Google";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1} character`)

} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2} characters`)

} else if (hacker1.length === hacker2.length)

    console.log(`Wow, you both have equally long names, ${hacker2} characters!`)


// Iteration 3: Loops


let repeatLetter = ``;
for (let i = 0; i < hacker1.length; i++) {
    let nameUper = hacker1[i].toUpperCase();
    repeatLetter += ` ${nameUper}`;
}
console.log(`${repeatLetter}`)

let reverseName = ``;
for (let i = hacker1.length - 1; i >= 0; i--) {
    let reverse = hacker1[i];
    reverseName += reverse;
}
console.log(`${reverseName}`)

