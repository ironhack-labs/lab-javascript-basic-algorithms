// Iteration 1: Names and Input

const hacker1 = "Cristina";
console.log("The driver's name is " + hacker1);

const hacker2 = "Achraf";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

let hacker1chars = hacker1.length
let hacker2chars = hacker2.length

if (hacker1chars > hacker2chars) {
  console.log("The driver has the longest name, it has " + hacker1chars + " characters.")
}

else if (hacker2chars > hacker1chars) {
  console.log("The driver has the longest name, it has " + hacker2chars + " characters.")
}

else {
  console.log(" Wow, you both have equally long names, " + hacker1chars + " characters!.")
}


// Iteration 3: Loops

// 3.1.

let upperCaseName = "";

for (i = 0; i < hacker1chars; i++) {
  upperCaseName += hacker1[i].toUpperCase() + " ";
}

console.log(upperCaseName);

// 3.2.
let reversedName = "";

for (let i = hacker2chars - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}

console.log(reversedName);

// 3.3.
const alphaOrder = hacker1.localeCompare(hacker2);

console.log(alphaOrder);

if (alphaOrder === 0) {
  console.log("What?! You both have the same name?");
}
else if (alphaOrder === -1) {
  console.log("The driver's name goes first.");
}
else {
  console.log("Yo, the navigator goes first, definitely.");
}

// Bonus 1 (we weren't able to finish it)

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel lorem lectus. Nulla luctus lectus ac tellus interdum, ut commodo orci rutrum. Proin dictum tellus nec rutrum finibus. Curabitur porttitor, magna condimentum fringilla condimentum, tellus diam dapibus ipsum, id sollicitudin quam orci et augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia enim sit amet augue viverra porttitor. Nam imperdiet justo et metus fermentum euismod. Morbi feugiat porttitor nulla eu volutpat. Suspendisse potenti. Suspendisse pellentesque, leo eu euismod ullamcorper, dui quam pulvinar ex, sed scelerisque sapien lacus vel dolor. Ut ac ante nec tellus sollicitudin maximus.Nam pellentesque vitae nunc et molestie. Nunc scelerisque dolor in velit vestibulum ultrices. Nullam fermentum odio dui, et elementum nisl euismod id. Etiam sed justo sit amet nisi imperdiet condimentum at sed ante. Nam congue ante in dolor posuere, vel egestas enim rutrum. Donec a metus ex. Integer blandit ante magna, vel placerat massa pharetra in. Sed ut urna eget dolor ornare porta ut a ante. In sed sollicitudin orci. Morbi ut elementum tortor, eget dictum mi. Integer vitae efficitur magna. Ut pulvinar, neque in eleifend tincidunt, dolor arcu dapibus dolor, eget consectetur elit nulla at ipsum. Nam nec arcu ac tellus laoreet finibus et in leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum nulla ac tortor condimentum commodo.Curabitur vulputate cursus semper. Fusce egestas justo vitae eleifend tempus. Sed vel molestie odio. Pellentesque pulvinar turpis sed mauris aliquet, nec facilisis sem scelerisque. Phasellus euismod ullamcorper est non elementum. Suspendisse potenti. Nulla dignissim sapien ac turpis bibendum, at dictum massa rutrum."


// 1. Divide in paragraphs
const words = longText.split(" ");
// console.log(words);

const wordsPerParagraph = words.length / 3;
// console.log(wordsPerParagraph);

const par1 = words.slice(0, wordsPerParagraph).join(" ");
const par2 = words.slice(wordsPerParagraph, wordsPerParagraph * 2).join(" ");
const par3 = words.slice(wordsPerParagraph * 2, wordsPerParagraph * 3).join(" ");

console.log(par1);
console.log(" ");
console.log(par2);
console.log(" ");
console.log(par3);

// 2. Count the words:
const countWords = longText.split(" ");
console.log(countWords.length);

// 3. Count the "et":
let count = 0;
let position = 0;
const wordToFind = "et";

while ((position = longText.indexOf(wordToFind, position)) !== -1) {
    count++;
    position += wordToFind.length;
  }
  console.log(count);

// Bonus 2:

phraseToCheck = "racecar";

let reversedPhrase = "";
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  reversedPhrase += phraseToCheck[i];
  
  if (phraseToCheck.length !== reversedPhrase.length) {
    continue;
  }
    
  else if (phraseToCheck === reversedPhrase) {
    console.log("This is a palindrome.");
  }

  else {
    console.log("This is not a palindrome.");
  }
}

