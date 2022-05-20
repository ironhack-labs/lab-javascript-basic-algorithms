// Iteration 1: Names and Input

/*
const hacker1 = 'Marina';

console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Agustina';

console.log(`The navigator's name is ${hacker2}`)
*/

// Iteration 2: Conditionals

/*
const hacker1 = 'Marina';

const hacker2 = 'Agustina';

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
*/

// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals 
/*
const hacker1 = 'Marina';

const hacker1UpperCased = hacker1.toUpperCase();

let arrHacker1 = [];

for (let i = 0; i < hacker1UpperCased.length; i++) {  
    arrHacker1.push(hacker1UpperCased[i].split(''));    
}

console.log(arrHacker1.join(' '));
*/

// 3.2 Print all the characters of the navigator's name, in reverse order. 

/*
const hacker2 = 'Agustina';

let arrHacker2 = [];

for (let i = 0; i < hacker2.length; i++) {  
    arrHacker2.unshift(hacker2[i].split(''));    
}

console.log(arrHacker2.join(' '));
*/

// 3.3 Depending on the lexicographic order of the strings, print:

/*
const hacker1 = 'Marina';

const hacker2 = 'Agustina';

if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`)
    } else if (hacker1.localeCompare(hacker2) === 1) {
        console.log(`Yo, the navigator's name goes first definitely.`)
        } else {
        console.log(`What?! You both have the same name?`)}
*/

// Bonus 1
/*
 let loremIpsumOriginal = textLoremIpsum;
 let loremIpsumWithoutCommas = loremIpsumOriginal.replaceAll(',',''); 
 let loremIpsumFullCleaned = loremIpsumWithoutCommas.replaceAll('.',''); 

 let arrLoremIpsum = loremIpsumFullCleaned.split(' '); 
 console.log(arrLoremIpsum.length);

 let countEtWord = 0;

 for (let i = 0; i < arrLoremIpsum.length; i++){    
     if (arrLoremIpsum[i] === "et"){
         countEtWord++}
 }

 console.log(countEtWord);
*/

// Bonus 2

/*
let phraseToCheckOriginal = "A man, a plan, a canal, Panama!";
let phraseToCheckLowerCase = phraseToCheckOriginal.toLocaleLowerCase();
let phraseToCheckWithoutComma = phraseToCheckLowerCase.replaceAll(',','');
let phraseToCheckWithoutSymbols = phraseToCheckWithoutComma.replaceAll('!','');
let phraseToCheckFullCleaned = phraseToCheckWithoutSymbols.replaceAll(' ','');

let phraseToCheck2 = phraseToCheckFullCleaned.split('');
let phraseToCheckReverse = phraseToCheck2.reverse();
let phraseToCheckReverseToString = phraseToCheckReverse.join('');


let wordToCheck = "amarillo";

let wordToCheck2 = wordToCheck.split('');
let wordToCheckReverse = wordToCheck2.reverse();
let wordToCheckReverseToString = wordToCheckReverse.join('');


if (phraseToCheckFullCleaned === phraseToCheckReverseToString) { 
    console.log("This string is a Palindrome")
    } else if (wordToCheck !== wordToCheckReverseToString) {
        console.log("This string isn't a Palindrome")}
*/