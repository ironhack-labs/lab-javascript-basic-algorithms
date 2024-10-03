// Iteration 1: Names and Input
const hacker1 = 'Carla'; 
console.log (`The driver's name is ${hacker1}`); 

const hacker2 = 'Maria'; 
console.log (`The navigator's name is  ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver ${hacker1} has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker2.length > hacker1.length){
    console.log(`The navigator ${hacker2} has the longest name, it has ${hacker2.length} characters.`);
}
else { 
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)

}

// Iteration 3: Loops
let spaceCapital='';
for (let i = 0; i < hacker1.length; i++){
    const char = hacker1[i].toUpperCase();
    spaceCapital += char; 
    if (i < hacker1.length-1){
        spaceCapital += ' '; 
    }
}
console.log(spaceCapital); 

//Reversed
let upsideDown='';
for ( let j = hacker2.length-1; j >= 0; j--){
    const char2 = hacker2[j];
    upsideDown += char2;
}
     
console.log(upsideDown);

//Lexicographical

let stopper = 0;
let equal; 
if (hacker1.length === 0|| hacker2 === 0) {
    console.log('Input error: not enough arguments.'); 
} else {
    for (let k = 0; stopper === 0 && k < hacker1.length && k < hacker2.length; k++) {
        
        let letter1 = hacker1[k];
        let letter2 = hacker2[k];

        equal = letter1.localeCompare(letter2, 'en', { sensitivity: 'case' });
        
        if (equal > 0) {
            console.log('Yo, the navigator goes first, definitely.');
            stopper = 1;
        } else if (equal < 0) {
            console.log("The driver's name goes first.");
            stopper = 1;
        }
    }
    
    if (stopper === 0) {
        if (hacker1.length === hacker2.length) {
            console.log('What?! You both have the same name?');
        } else if (hacker1.length < hacker2.length) {
            console.log('Yo, the navigator goes first, definitely.'); 
            console.log("The driver's name goes first."); 
        }
    }
}

// Palindrome
function isLetter(char) {
    return /^[a-zA-Z]$/.test(char);
}

function checkPalindrome (phraseToCheck){
    const phrase = phraseToCheck.toLowerCase();
    let cleanphrase = '';
    for (let s = 0; s < phrase.length; s++){
        const letter = phrase[s];
        if (isLetter(letter)){
            cleanphrase += letter; 
        }
    }
    let reversed = '';
    for (let a = cleanphrase.length-1; a >= 0; a--){
        const letter3 = cleanphrase[a]; 
        reversed += letter3;
    }
    if (reversed === cleanphrase){
        return ("It is a palindrome")
    }
    else {
        return ("It is not a palindrome")
    }
}
console.log(checkPalindrome("Was it a car or a cat I saw?"));