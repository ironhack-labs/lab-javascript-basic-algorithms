// Iteration 1: Names and Input
let hacker1 = "John";
console.log("The driver's name is " + hacker1);

let hacker2 = "Chris";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;
/* console.log(hacker1Length);
console.log(hacker2Length); */

if (hacker1Length === hacker2Length) {
  console.log(
    "Wow, you both have equally long names, " + hacker1Length + " characters!"
  );
} else if (hacker1Length > hacker2Length) {
  console.log(
    "The driver has the longest name, it has " + hacker1Length + " characters."
  );
} else {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2Length +
      " characters."
  );
}

// Iteration 3: Loops

//3.1 Print the characters of the driver's name, separated by space, and in capital letters
let hacker1Spaced = "";
for (const i of hacker1) {
  hacker1Spaced += i + " ";
}
/* console.log(hacker1Spaced); */
let hacker1SpacedUpperCase = hacker1Spaced.toUpperCase();
console.log(hacker1SpacedUpperCase);

//3.2 Print all the characters of the navigator's name in reverse order
let hacker2Reversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reversed += hacker2[i];
}
console.log(hacker2Reversed);

//3.3 Depending on the lexicographic order
const lexicalCompare = hacker1.localeCompare(hacker2);
if (lexicalCompare == 1) {
  console.log("Yo, the navigator goes first, definitely.");
} else if (lexicalCompare == -1) {
  console.log("The driver's name goes first.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1:

const longText =
  "Lorem ipsum dolor sit amet et consectetur adipisicing elit. Nisi iste, rem est, incidunt nam a assumenda tempore, aperiam cum magni eum earum accusamus minima! Molestiae, ullam sapiente quisquam minus porro neque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus cum, debitis aut placeat consequuntur deleniti necessitatibus inventore laborum quod cum, et corcumporis, libero adipisci ut? Provident delectus quia et modi non et, tempore? Lorem cum ipsum dolor sit, amet consectetur adipisicing elit. Praesentium harum quaerat eos assumenda voluptatibus temporibus, at dolorum tempore recusandae rem impedit, corrupti hic commodi sapiente? Deserunt quos quas eveniet vitae?";

  //Program count the number of words in the string and count the number of times the Latin word et appears
text = longText.toLowerCase().replace(/[.,?!]/g, "");
targetWord = "et".toLowerCase();
let count = 0;
let currentWord = "";
let longTextWords = 0;
for (var i = 0; i < text.length; i++) {
  let currentChar = text[i];
  if (currentChar === " " || i === text.length - 1) {
    longTextWords++;
    if (currentWord === targetWord) {
      count++;
    }
    currentWord = "";
  } else {
    currentWord += currentChar;
  }
}
console.log(longTextWords);
console.log(count);

//Bonus 2:

//code to check if the value assigned to phraseToCheck is a Palindrome.
let phraseToCheck = "No 'x' in Nixon".replace(/[.,?!' ]/g, "");
let phraseToCheckReversed = "";
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  phraseToCheckReversed += phraseToCheck[i];
}
let isPalindrome = "";
if (phraseToCheck.toLowerCase() == phraseToCheckReversed.toLowerCase()) {
  isPalindrome = true;
} else {
  isPalindrome = false;
}
console.log(isPalindrome);