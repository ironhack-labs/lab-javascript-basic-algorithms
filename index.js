// Iteration 1: Names and Input
const hacker1 = 'Lucas';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Maria';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const longHacker1 = hacker1.length;
const longHacker2 = hacker2.length;

if (longHacker1 === longHacker2) {
  console.log(`Wow, you both have equally long names, ${longHacker1} characters!.`);  
} else if (longHacker1 > longHacker2) {
  console.log(`The driver has the longest name, it has ${longHacker1} characters.`);
} else {
  console.log(`It seems that the navigator has the longest name, it has ${longHacker2} characters.`);
}

// Iteration 3: Loops
//3.1
const hacker1Upper = hacker1.toUpperCase();
let stringResultHacker1 = ''
for (let i = 0; i < longHacker1; i++) {
  stringResultHacker1 += hacker1Upper[i];
  if(i < (longHacker1 - 1)) {
    stringResultHacker1 += ' ';
  }
}
console.log(stringResultHacker1);

//3.2
let stringResultHacker2 = ''
for (let i = longHacker2 - 1; i >= 0; i--) {
  stringResultHacker2 += hacker2[i];
}
console.log(stringResultHacker2);

//3.3
let lexicographicResult = 0;


if (hacker1 === hacker2) {
  console.log('What?! You both have the same name?');
} else if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else {
  console.log('Yo, the navigator goes first, definitely.');
}

//Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit maximus ipsum, a fermentum libero pharetra in. Suspendisse quis tincidunt leo. Donec eleifend pulvinar felis et commodo. Fusce hendrerit ornare orci nec iaculis. Proin facilisis massa vitae neque gravida, vitae bibendum ligula sollicitudin. Mauris sagittis est vitae tortor laoreet malesuada. Sed sed tellus velit. Phasellus laoreet nec augue sed lobortis. Phasellus ultricies aliquet orci sit amet dictum. Nullam convallis augue in erat placerat consectetur. Donec ultricies lobortis maximus. Fusce sit amet nibh nec nunc commodo vulputate at quis tortor. Suspendisse tincidunt erat ut turpis finibus blandit. Duis consectetur sit amet sapien non vehicula. Nulla facilisi. Cras non consectetur ligula.
Aliquam non tincidunt orci, sed ultrices erat. Cras elementum venenatis purus ac tincidunt. Praesent quis dolor elementum, sagittis urna ut, hendrerit erat. Sed efficitur interdum placerat. Etiam laoreet auctor auctor. Nullam in pretium quam. Vivamus efficitur condimentum risus, sit amet posuere massa ornare et. Nam volutpat quis metus sed semper.
Duis consectetur neque et nisl condimentum, porttitor volutpat nulla condimentum. Maecenas pretium orci lacus. Sed id nisi sit amet ex porta pharetra eu sit amet ante. Morbi faucibus condimentum eleifend. Nunc nec ultricies tortor. Pellentesque eu dolor sit amet arcu mattis maximus ut vel eros. Aliquam eget ex em.`;


let word = '';
let countWords = 0;
let countEt = 0;
const punctuation = '.,; \n\t';

for (let i = 0; i < longText.length; i++) {
  if (!punctuation.includes(longText[i])) {
    word += longText[i];
  } else {
    if (word){
      countWords++;
      word = '';
    }
  }

  if (longText[i] === 'e' && longText[i + 1] === 't' && (longText[i - 1] === ' ' || longText[i - 1] === '.' || longText[i - 1] === ',')) {
    if (longText[i + 2] === ' ' || longText[i + 2] === '.' || longText[i + 2] === ',' || longText[i + 2] === undefined) {
      countEt += 1;
    }
  }
}

if (word) {
  countWords++;
}

console.log(countWords);
console.log(countEt);

//Bonus 2

const phraseToCheck = "Was it a car or a cat I saw?";
const phraseToCheckLower = phraseToCheck.toLowerCase();
let phraseClean = '';
let newPalindrome = '';

for (let i = 0; i < phraseToCheckLower.length ; i++) {
  if (phraseToCheckLower[i] >= 'a' && phraseToCheckLower[i] <= 'z') {
    phraseClean += phraseToCheckLower[i];
  }
}

for (let i = phraseToCheckLower.length - 1; i >= 0 ; i--) {
  if (phraseToCheckLower[i] >= 'a' && phraseToCheckLower[i] <= 'z') {
    newPalindrome += phraseToCheckLower[i];
  }
}

if (phraseClean === newPalindrome) {
  console.log(`${phraseToCheck} is a palindrome.`);
} else {
  console.log(`${phraseToCheck} is not a palindrome.`);
}
