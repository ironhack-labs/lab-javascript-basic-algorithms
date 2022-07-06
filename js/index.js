// Iteration 1: Names and Input
//
let hacker1 = 'Lucas Zaquine';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Luis Coelho';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let nameLenght1 = hacker1.length;
let nameLenght2 = hacker2.length;

if (nameLenght1 > nameLenght2) {
    console.log(`The driver has the longest name, it has ${nameLenght1} characters.`);
} else if (nameLength1 < nameLenght2) {
    console.log(`It seems that the navigator has the longest name, it has ${nameLenght2} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${nameLenght1} characters!`);
} 

// Iteration 3: Loops
let space = '';
for (let i = 0; i < nameLenght1; i++) {
    space += hacker1[i] + ' '
    
} console.log(space.toUpperCase());

let test = '';
for (let i = nameLenght2 -1; i >= 0; i--) {
    test += hacker2[i] 
} console.log(test);


if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`);
} else if (hacker1 > hacker2) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}
