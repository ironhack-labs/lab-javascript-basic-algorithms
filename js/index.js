// Iteration 1: Names and Input
let hacker1 = 'Guillermo';
let hacker2 = 'Nicholas';

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let hacker1 = 'Guillermo';
let hacker2 = 'Nicholas';

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length)
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
else if (hacker1.length < hacker2.length)
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
else console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);

// Iteration 3: Loops
let driverNameUpper = '';
for (let i = 0; i < hacker1.length; i++) {
    driverNameUpper += hacker1[i].toUpperCase() + ' ';
}

console.log(driverNameUpper);
driverNameUpper = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
    driverNameUpper += hacker2[i];
}

console.log(driverNameUpper);

for (let i = 0; i < hacker1.length && i < hacker2.length; i++) {
    let result = hacker1[i].localeCompare(hacker2[i]);
    if (result < 0) {
        console.log(`The driver's name goes first.`);
        break;
    }
    else if (result > 0) {
        console.log(`Yo, the navigator goes first definitely`);
        break;
    }
    else if (hacker1.length > hacker2.length) {
        console.log(`Yo, the navigator goes first definitely`);
        break;
    }
    else if (hacker1.length < hacker2.length) {
        console.log(`The driver's name goes first.`);
        break;
    }
    else {
        console.log(`What?! You both have the same name?`);
        break;
    }
}