// Iteration 1: Names and Input
let hacker1 = "Blanca";
// console.log("The drive's name is Blanca");
let hacker2 = "Berta";
//console.log("The navigator's name is Berta")
let result = ""; 

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    result = console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

} else if (hacker2.length > hacker1.length) {
        result = console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    
} else if (hacker1.length === hacker2.length) {
            result = console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
        }


//console.log(result);

// Iteration 3: Loops

// Print the characters of the driver's name, separated by space, and in capital letters

let newWord1 = "";

for (i = 0; i < hacker1.length; i++) {
    newWord1 += hacker1[i] + " ";
}

console.log(newWord1.toUpperCase());

/* Other solutions FOR OF

let newWord1 = "";

for (letter of myName) {
  newWord1 += `${letter.toUpperCase()} `;
}

console.log(newWord);
*/

// Print all the characters of the navigator's name in reverse order

let wordReversed = "";

for (y = hacker1.length -1; y >= 0; y--) {
    wordReversed += hacker1[y];
}

console.log(wordReversed);

/* Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name? */

let PrintByOrder = ""

if (hacker1 > hacker2) {
    PrintByOrder = console.log("The driver's name goes first.")
  }
  else if (hacker1 < hacker2) {
    PrintByOrder = console.log("Yo, the navigator goes first definitely.")
  }
  else {
    PrintByOrder = console.log("What?! You both have the same name?")
  } 

  console.log(PrintByOrder);

/* Other solutions localeCompare

const myName = "John";
const name2 = "Adrian";

if (name2.localeCompare(myName) === 1) {
  console.log(`${myName} va antes`);
  else if (name2.localeCompare(myName) === -1) {
    console.log(`${name2} va antes`);
  } else {
    console.log("Son iguales"),
  }
}

Bonus 1: Go to the lorem ipsum generator website and:

- Generate 3 paragraphs. Store the text in a new string variable named 'longText'.
- Make your program count the number of words in the string.
- Make your program count the number of times the Latin word 'et' appears

*/

const longText = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus expedita exercitationem magnam vero rem unde animi tempora aut suscipit. Ut fugiat ea officia perspiciatis architecto ab vitae libero assumenda animi.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi neque commodi voluptas optio laborum necessitatibus vitae voluptate quo! Expedita, animi! Alias reiciendis expedita a accusantium optio, aliquam porro doloribus voluptatibus?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis architecto illum, vero excepturi, quo enim quisquam cumque expedita fugit pariatur adipisci corporis natus, porro rem maxime vitae. Esse, labore accusamus?
`

/* Option 1 - FOR LOOP

let wordCount = 0;

for (let i = 0; i < longText.length; i++) {
  if (longText [i] === ' ' || longText[i] === '\n' || longText[i] === '\t') {
    wordCount++;
  }
}

console.log(`The text contains ${wordCount += 1} words`);

let etCount = 0;

for (let i = 0; i < longText.length; i++) {
  const etChars = longText[i] + longText[i + 1] + longText [i + 2] + longText[i + 3];
  if (etChars === " et "){
    etCount ++;
  }
}

console.log(`The text contains "et" ${etCount} times.`);
*/

// Option 2 - FOR OF + SPLIT method to create array with words

/*
const textArray = longText.split(" ");
console.log(textArray);


let count = 0;

for (word of textArray) {
  if (word === 'amet' || word === 'amet,' || word === "amet.") {
    count++;
  }
}

console.log(`Amet appears ${count} times`);
*/

// Option 3 - .match REGULAR EXPRESSION
// count ya es cero 
//.match crea array con la palabra que buscas, así que length cuenta el nº de palabras que salen en ese array

let count = 0;
let matches = longText.match(/amet/g);

if (matches !== null) {
  count = matches.length;
}

console.log(`Text contains amet ${count} times.`);
console.log(matches);