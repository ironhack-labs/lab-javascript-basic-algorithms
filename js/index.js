// Iteration 1: Names and Input
const hacker1 = "Gaston";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Leandro";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}

// Iteration 3: Loops
// 3.1

let spacedCapStr = "";
for (let i = 0; i < hacker1.length; i++) {
  spacedCapStr += hacker1[i].toUpperCase() + " ";
}

console.log(`"${spacedCapStr.slice(0, -1)}"`);

// 3.2

let reverseStr = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseStr += hacker2[i];
}
console.log(`"${reverseStr}"`);

// 3.3

let newArr = [hacker1, hacker2];
let sorted = [];

for (let i = 0; i < newArr.length; i++) {
  sorted.push(newArr[i]);
}

sorted.sort();

if (sorted[0] === sorted[1]) {
  console.log("What?! You both have the same name?");
} else if (sorted[0] === hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("The driver's name goes first.");
}

// BONUS

const paragraphs =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at diam vel elit efficitur efficitur. Cras scelerisque mollis vulputate. Pellentesque interdum libero quis felis egestas venenatis. Nulla eu pulvinar ex. Nam sit amet euismod lorem. Sed maximus quam in bibendum rhoncus. Aenean sagittis et est ut efficitur. Nullam viverra nibh vitae velit fringilla, non blandit quam tristique. Vestibulum et lacus magna. Sed dignissim aliquam felis, quis varius felis volutpat non. Mauris porta sed metus ut aliquam. Morbi euismod convallis lectus. Nam vel urna lorem. Mauris hendrerit tincidunt lorem, eget fermentum metus sagittis quis. Ut eget blandit neque. Curabitur scelerisque lectus sed magna tristique consequat. Nulla facilisi. Phasellus dictum porta nunc, eu egestas justo tristique nec. Proin vitae metus sit amet nibh laoreet lobortis. Suspendisse id consectetur libero. Suspendisse sed varius mi, eget interdum risus. Sed congue ante sit amet ante tristique ullamcorper. Donec erat nunc, sollicitudin ac elementum quis, auctor id felis. Sed suscipit gravida nisl non hendrerit. Vestibulum vel diam volutpat, lacinia quam ac, finibus nunc. Nulla id sollicitudin ex. Nulla et euismod purus, a egestas purus. Suspendisse potenti.";

function wordCounter(str) {
  return str.split(" ").length;
}

console.log(wordCounter(paragraphs));

function etCounter(str) {
  let splitEt = str.split(" ");
  let count = 0;

  for (let i = 0; i < splitEt.length; i++) {
    if (splitEt[i] === "et") {
      count++;
    }
  }

  return count;
}

console.log(etCounter(paragraphs));

// BONUS 2

const phraseToCheck = "Was it a car or a cat I saw?";

function palindromeChecker(phrase) {
  let phraseWithoutSymbols = phrase
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ")
    .join("");

  let reversePhrase = phraseWithoutSymbols.split("").reverse().join("");

  return reversePhrase === phraseWithoutSymbols;
}

console.log(palindromeChecker(phraseToCheck));
