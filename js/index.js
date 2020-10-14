// Iteration 1: Names and Input

const hacker1 = `Daniela`;
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = `Christian`;
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals

const driver = hacker1;
const navigator = hacker2;

if (driver.length > navigator.length) {
    console.log(`The driver has the longest name, it has ${driver.length} characters.`)
} else if (navigator.length > driver.length) {
    console.log(`The navigator has the longest name, it has ${navigator.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${driver.length}`);
}

// Iteration 3: Loops (UNFINISHED)

let nameUpper = '';
for(let i = 0; i < driver.length; i++) {
    nameUpper += driver[i].toUpperCase() + '';
}
console.log(nameUpper)


console.log(driver.split('').join('').toUpperCase());
console.log(navigator.split('').reverse().join(''))