// Iteration 1: Names and Input
// 1.1
let hacker1 = "Felix";
// 1.2
console.log(`The driver´s name is ${hacker1}.`);
// 1.3
let hacker2 = "Jon";
// 1.4
console.log(`The navigator´s name is ${hacker2}.`);

// Iteration 2: Conditionals
// 2.1
let hacker1Length;
let hacker2Length;
let combinedLength;

hacker1Length = hacker1.length;
hacker2Length = hacker2.length;
combinedLength = hacker1Length + hacker2Length;

/* - Just checking my code -
console.log(hacker1Length);
console.log(hacker2Length); 
console.log(combinedLength);*/

if (hacker1Length > hacker2Length) {
  console.log(
    `The driver has the longest name, it has ${hacker1Length} characters.`
  );
} else if (hacker1Length < hacker2Length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2Length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${combinedLength} characters!`
  );
}

// Iteration 3: Loops
// 3.1

let hacker1LettersUpperCase = hacker1.toUpperCase();

console.log(
  `${hacker1LettersUpperCase.charAt(0)} ${hacker1LettersUpperCase.charAt(
    1
  )} ${hacker1LettersUpperCase.charAt(2)} ${hacker1LettersUpperCase.charAt(
    3
  )} ${hacker1LettersUpperCase.charAt(4)}`
);

// 3.2.
let hacker2Reverse = hacker2.split("").reverse().join("");

console.log(hacker2Reverse);

//3.3.

let hacker1LowerCase = hacker1.toLowerCase();
let hacker2LowerCase = hacker2.toLowerCase();

console.log(hacker1LowerCase);
console.log(hacker2LowerCase);

if (hacker1LowerCase > hacker2LowerCase) {
  console.log("The driver's name goes first.");
} else if (hacker1LowerCase < hacker2LowerCase) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}
