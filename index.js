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