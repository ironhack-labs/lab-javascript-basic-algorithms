// Iteration 1: Names and Input
let hacker1 = 'Rodrigo';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Iva';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`Seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
}

// Ition 3: s
let nameSpaced = "";
for (let i = 0; i < hacker1.length; i++) {
    nameSpaced += hacker1[i].toUpperCase() + " ";
};
console.log(nameSpaced);

let reversedName = hacker1.split('').reverse().join('');
console.log(reversedName);

let h1 = hacker1.charAt(0);
let h2 = hacker2.charAt(0);
let comparison = h1.localeCompare(h2);

if(comparison === 1) {
    console.log(`Yo, the navigator goes first definitely`);
} else if (comparison === -1) {
    console.log(`The driver's name goes first`);
} else {
    console.log('What?! you both have the same name?')
}
