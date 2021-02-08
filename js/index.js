// Iteration 1: Names and Input
let hacker1 = 'Aline'
let hacker2 = 'Aline2'

const sentenceHack1 = 'The driver\'s name is' + ' ' + hacker1 ;
const sentenceHack2 = 'The driver\'s name is ${hackers2}'  ;
console.log(sentenceHack1);
console.log(sentenceHack2);

// Iteration 2: Conditionals
const sizeOfName = hacker1.length;
const sizeOfName2 = hacker2.length;

if (hacker1.length > hacker2.length){
    console.log ('The driver has the longest name , it has ${sizeOfName} characteres.')
}
else if (hacker2.length > hacker1.length){
    console log('It seems that the navigator has the longest name, it has ${sizeOfName2} caracters.')
}
else {
    console.log ('Wow, you both have equally long names, ${sizeOfName} characteres')
}

// Iteration 3: Loops

let hackerCapitalized = '';

for (let i = 0; i < hacker1.length; i += 1){
hackerCapitalized += `${hacker1[i].toUpperCase()}`;
}

console.log(hackerCapitalized.trim().length)