// Iteration 1: Names and Input

// Iteration 1: Names and Input
const hacker1 = "Andrii";
console.log(`Drivers name is ${hacker1}`);
const hacker2 = "Jacob";
console.log(`Navigators name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has a longer name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length}`);
} else {
  console.log(
    `It seems that the navigator has a longer name, it has ${hacker2.length} characters`
  );
}
// Iteration 3: Loops
let newString = "";
for (let i = 0; i < hacker1.length; i++) {
  newString += hacker1[i].toUpperCase() + " ";
  //   console.log(hacker1[i].toUpperCase());
}
// console.log(newString);
let newStringHacker2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  // console.log(hacker2[i]);
  newStringHacker2 += hacker2[i];
}
// console.log(newStringHacker2);
// Sorting out which name comes first in alphabetical order
let hackers = [hacker1, hacker2];
console.log(hackers.sort());
if (hacker1 === hacker2) {
  console.log(`What?! You both have the same name?`);
} else if (hackers[0] === hacker1) {
  console.log(`The driver's name goes first.`);
} else if (hackers[0] === hacker2) {
  console.log(`Yo, the navigator goes first definitely.`);
}
// Bonus 1
const paragraphs =
  "et Lorem ipsum dolor sit amet et consectetur adipisicing elit et. Molestiae, facilis aliquid laudantium et perspiciatis cupiditate illum.";
let counter = 1;
if (paragraphs.length === 0) {
  console.log("The string is empty");
} else {
  for (let i = 0; i < paragraphs.length; i++) {
    if (paragraphs[i] === " ") {
      counter++;
    }
  }
}
console.log(counter);
let etCount = 0;
for (let i = 0; i < paragraphs.length; i++) {
  if (
    (paragraphs[i] === " " &&
      paragraphs[i + 1] === "e" &&
      paragraphs[i + 2] === "t" &&
      paragraphs[i + 3] === " ") ||
    (paragraphs[i] === " " &&
      paragraphs[i + 1] === "e" &&
      paragraphs[i + 2] === "t" &&
      paragraphs[i + 3] === ".") ||
    (paragraphs[i] === "e" &&
      i === 0 &&
      paragraphs[i + 1] === "t" &&
      paragraphs[i + 2] === " ")
  ) {
    etCount++;
  }
}
console.log(etCount);
/* // Bonus 2
Work in progress
let palindrome = "Amor, Roma";
let lowPalindrome = "";
for (let i = 0; i < palindrome.length; i++) {
  lowPalindrome += palindrome[i].toLowerCase();
}
let lettersP = "";
for (let i = 0; i < lowPalindrome.length; i++) {
  if (lowPalindrome[i] !== "," || lowPalindrome[i] !== " ") {
    lettersP += lowPalindrome[i];
  }
}
console.log(lettersP); */


// Iteration 2: Conditionals


// Iteration 3: Loops
