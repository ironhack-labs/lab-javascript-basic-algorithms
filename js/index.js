// Iteration 1: Names and Input
const hacker1 = 'Guillermo';
const hacker2 = "Diego";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let driver = '';
for (let i = 0; i < hacker1.length; i++) {
    driver += hacker1[i].toUpperCase() + ' ';
}
console.log(driver);

let navigator = '';
for (let i = hacker2.length-1; i >= 0; i--) {
    navigator += hacker2[i];
}
console.log(navigator);

let firstLetterHacker1 = hacker1.substring(0,1).toLowerCase();
let firstLetterHacker2 = hacker2.substring(0,1).toLowerCase();

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let indexHacker1 = alphabet.indexOf(firstLetterHacker1)+1;
let indexHacker2 = alphabet.indexOf(firstLetterHacker2)+1;

if (indexHacker1 < indexHacker2) {
    console.log(`The driver's name goes first.`);
} else if (indexHacker1 > indexHacker2) {
    console.log(`Yo, the navigator goes first definitely`);
} else {
    console.log(`What?! You both have the same name?`);
}

// Bonus 1
const lorem = `Vel, ipsam ducimus. Perspiciatis, atque! Delectus odio voluptate et deserunt pariatur magnam.
Eius ad tempora et laudantium maiores repudiandae eaque accusantium sequi nisi quod. Porro 
atque quod dicta voluptas totam explicabo corrupti. et Ea ipsam ad delectus iste 
laboriosam doloremque. Dolorum est velit excepturi, itaque inventore ullam. 
Labore voluptatem veniam consequuntur et harum sint assumenda vitae fugit et non quia rem quas a 
maxime reprehenderit, alias ad quo earum fuga corporis?`

console.log(lorem.split(' ').length);

let counter = 0;
let arrayLorem = lorem.split(' ');

for (let i = 0; i < arrayLorem.length; i++) {
    if (arrayLorem[i] === 'et') {
        counter += 1;
    }
}

console.log(counter);

// // Bonus 2
const phraseToCheck = 'Ama';

let phraseReverse = '';

for (let i = phraseToCheck.length-1; i >= 0; i--) {
    phraseReverse += phraseToCheck[i];
}
console.log(phraseToCheck);
console.log(phraseReverse);

for (let i = 0; i < phraseToCheck.length; i++) {
    for (let j = 0; j < phraseReverse.length; j++) {
        if (phraseToCheck[i] != phraseReverse[j]) {
            console.log('No son palíndromos');
        } else {
            console.log('Son Palíndromos');
        }
    }
}