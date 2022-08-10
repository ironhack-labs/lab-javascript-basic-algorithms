console.log("I'm ready!");

// Iteration 1: Names and Input
const hacker1 = 'ken'
console.log(`The driver's name is ${hacker1}`)

// or console.log(`The driver's name is + hacker1 +'.')

const hacker2 = 'paul'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name,
    it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest
    name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let output = "";

for (let i = 0; i < hacker1.length; i++) {
    output += hacker1[i].toUpperCase() + ' ';
}

console.log(output.trim());


// let revHacker2 = "";
for (let i = hacker2.length - 1; i >= 0 ; i--) {
   	console.log(hacker2[i]);
}

// 3.3


if (hacker1.localeCompare(hacker2) == -1) {
  console.log("The driver's name goes first")
} else if (hacker1.localeCompare(hacker2) == 1) {
  console.log("Yo, the navigator goes first definitely")
} else {
  console.log("What?! You both have the same name?")
}

// Bonus Solution

let wordCount = 1;
for (let i = 0; i < lorem.length - 1; i++) {
  if (lorem[i] === ' ') {
    wordCount++;
  }
}

console.log(wordCount);

let foundEt = 0;
for (let i = 0; i < lorem.length; i++) {
  if (lorem[i] === 'e' && lorem[i + 1] === 't' && lorem[i + 2] === ' ' && lorem[i - 1] === ' ') {
    foundEt += 1
  }
}

console.log(foundEt);

// Ask the user for a new string and check if it's a *palindrome*. Examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "otto"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw" and "No x in Nixon".

let palindrome = 'tacocat';

function isPalindrome(str) {
  const length = str.length;
  for (let i = 0; i < length / 2; i++) {
    if (str[i] !== str[length -1 - i]) {
      console.log('not a palindrome');
    }
  }
  console.log('it is a palindrome');
}

function isPalindrome(str) {
  let reversed = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]
  }
  if (reversed === str) {
    console.log('it is a palindrome');
  } else {
    console.log('not a palindrome');
  }
}