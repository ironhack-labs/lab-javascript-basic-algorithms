// Iteration 1: Names and Input
const hacker1= "Stephan"; //driver
const hacker2= "Robert"; //navigator

console.log(`The navigator's name is ${hacker1}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    
    } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    
    } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
    
    }

// Iteration 3: Loops
let caps = '';
for (let i = 0; i < hacker1.length; i++) {     
    caps += `${hacker1[i].toUpperCase()} `;    
}
console.log(`${caps.trim()}`);

let reverseName='';
for (let i = hacker2.length-1; i >= 0; i--) {
    reverseName += hacker2[i];
} 
console.log(reverseName);

if (hacker1[0] > hacker2[0]) {
    console.log(`The driver's name goes first.`);

} else if (hacker1[0] < hacker2[0]) {
    console.log(`Yo, the navigator goes first, definitely.`); 

} else {
    console.log(`What?! You both have the same name?`);    
}
   
let longText =`bett mett etc et et set dett te et.` //3 'et' to count
 
let etCount = 0;
for (let i = 0; i < longText.length; i++) {   
    if (longText[i-1] === ' ' && longText[i] === 'e' && longText[i+1] === 't'  && /\W/.test(longText[i+2])) {
        etCount += 1;
        }    
}
//console.log(etCount);


//palindrome

let phraseToCheck = 'Amor, Roma'
//reverse the whole string
let revString = '';
    for (let i = phraseToCheck.length - 1; i >= 0; i--) {
        revString += phraseToCheck[i];
}
//remove white spaces
let original = phraseToCheck.replace(/\s+/g, '').toLowerCase();
let reverseString = revString.replace(/\s+/g, '').toLowerCase();

//check if reversed and original strings are the same without whitespace
if (reverseString === original) {
        console.log('It is a palidrome phrase');
    } else {
        console.log('Not a palidrome phrase');
    }
    