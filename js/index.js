// Iteration 1: Names and Input

// 1.1.
let hacker1 = "Stephan";

// 1.2.
console.log(`The driver's name is ${hacker1}`);

// 1.3.
let hacker2 = "Zena";
let hacker3 = "Denise";

// 1.4.
console.log(`The navigators' names are ${hacker2} and ${hacker3}`);


// Iteration 2: Conditionals

// 2.1.
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

// 3.1. 
let lettersToPrint = "";
for (let i = 0; i < hacker1.length; i++) {
  capLetter = hacker1[i].toUpperCase();
  lettersToPrint = lettersToPrint.concat(capLetter, " ");
}
console.log(lettersToPrint);

// 3.2.
let lettersReversed = "";
for (i = hacker2.length - 1; i >= 0; i--) {
    lettersReversed = lettersReversed.concat(hacker1[i], " ");
}
console.log(lettersReversed)


// Bonus 1:

