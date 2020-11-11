// Iteration 1: Names and Input
const hacker1 = 'Calypso';
console.log(`The driver name is ${hacker1}`);

const hacker2 = 'Diego';
console.log(`The navigator's name is ${hacker2} `);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    } else if (hacker1.length = hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
    } else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    }


// Iteration 3: Loops
// with loop
/* function charactString(hacker1) {
    let charactHacker = '';
    for (let i = 0; i >= hacker1.length; i++) {
        charactHacker += hacker1[i];
    }
    return charactHacker; 
}
charactString(hacker1);*/

// without loop
const character1 = hacker1.split('').join(' ').toUpperCase();
console.log(character1);


// with loop
function reverseString(hacker2) {
    let reverseHacker = '';
    for (let i = hacker2.length - 1; i >= 0; i--) {
        reverseHacker += hacker2[i];
    }
    return reverseHacker;
}
reverseString(hacker2);

// without loop
const character2 = hacker2.split('').reverse().join('');
console.log(character2);


// let general = character1 + character2;
// let array = general.split(', ');

// array.sort(function(character1, character2) {
//     let order = character1.name > character2.name;
//     return order ? 1 : -1;
// });