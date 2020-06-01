// Iteration 1: Names and Input

// Iteration 2: Conditionals

// Iteration 3: Loops

// Iteration 1: Names and Input
// 1.1 Create a variable `hacker1` with the driver's name.

// 1.2 Print `"The driver's name is XXXX"`.

// 1.3 Create a variable `hacker2` with the navigator's name.

// 1.4 Print `"The navigator's name is YYYY"`.

let hacker1 = "Leonardo";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Ieva";

console.log(`The navigator's name is ${hacker2}`);
// ###############################################################################

// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// ###############################################################################

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let name1 = '';
for (let i = 0; i < hacker1.length; i++) {
  name1 += hacker1[i].toUpperCase() + " ";
  //console.log(hacker1[i].toUpperCase());
}
console.log(name1);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let name2 = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  name2 += hacker2[i];
  //console.log(hacker1[i].toUpperCase());
}
console.log(name2);
// ###############################################################################

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// let hackers = [hacker1, hacker2].sort();
// console.log(hackers);

// if (hacker1 === hackers[0]) {
//   console.log("The driver's name goes first")
// } else

// console.log(
//   `This is the Reverse of navigator's name ${hacker2
//     .split("")
//     .reverse()
//     .join("")}`
// );

if (hacker1 < hacker2) {
    console.log('The driver´s name goes first')
} else if (hacker1 > hacker2) {
    console.log('The navigator goes first definitely')
} else {
    console.log('What?! You both got the same name?')
}

// ###############################################################################

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:

// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

let program = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it et to make a type specimen book. It has survived not only five centuries, but also the leap into electronic et typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of et Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

let programSplit = program.split(' ');
console.log(programSplit.length);

let counter = 0;
for ( let i = 0; i < programSplit.length; i++) {
  if ( programSplit[i] === 'et') counter += 1;
}
console.log(counter); 

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

let str = prompt('Please enter your text');
let regex = /[\W_]/g
let regexStr = str.toLowerCase().replace(regex, '');
let reversedString = [...regexStr].reverse().join('')
if ( regexStr === reversedString ) console.log(`${str} is a palindrome`)
else console.log(`${str} is not a palindrome`)