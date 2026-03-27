// Iteration 1: Names and Input

let hacker1 = "Maria";
console.log("The driver's name is " + hacker1);
 
// 1.3 & 1.4
let hacker2 = "Carlos";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker2.length > hacker1.length) {
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
  console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}

// Iteration 3: Loops
// 3.1
let driverUpperSpaced = "";
for (let i = 0; i < hacker1.length; i++) {
  if (i === hacker1.length - 1) {
    driverUpperSpaced += hacker1[i].toUpperCase();
  } else {
    driverUpperSpaced += hacker1[i].toUpperCase() + " ";
  }
}
console.log(driverUpperSpaced);

//3.2
let navigatorReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorReversed += hacker2[i];
}
console.log(navigatorReversed);
 
// 3.3
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// BONUS
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Et harum quidem rerum facilis est et expedita distinctio. Et iusto odio dignissimos ducimus qui blanditiis praesentium.";

// Count words

let wordCount = 0;
let insideWord = false;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] !== " " && longText[i] !== "\n" && longText[i] !== "\t") {
    if (insideWord === false) {
      wordCount++;
      insideWord = true;
    }
  } else {
    insideWord = false;
  }
}

console.log("Number of words: " + wordCount);


// Contar "et"
let etCount = 0;
for (let i = 0; i < longText.length - 1; i++) {
  let currentChar = longText[i].toLowerCase();
  let nextChar = longText[i + 1].toLowerCase();
  let prevChar = i > 0 ? longText[i - 1] : " ";
  let afterNext = i < longText.length - 2 ? longText[i + 2] : " ";

  