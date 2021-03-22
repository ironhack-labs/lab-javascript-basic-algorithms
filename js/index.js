console.log('I am ready!');

// Iteration 1: Names and Input
let hacker1 = 'Joao';
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = 'Maria';
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
} else if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

/* Iteration 3: Loops
3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/
let upperCaseName = '';
for (let i=0; i<hacker1.length; i++){
    upperCaseName += `${hacker1[i]} `;
};
console.log(upperCaseName.toUpperCase());

let reversedName = hacker2.split('').reverse().join('');
console.log(reversedName);

let alphabet = 'abcdefghijklmnopqrstuvxwyz';

