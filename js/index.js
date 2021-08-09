// Iteration 1: Names and Input

const hacker1 = "Hugo";

console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Ana";

console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters
`);
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

// Iteration 3: Loops

let driverName = "";
let reverseName = "";

for (let i = 0; i <= hacker1.length; i++) {
  driverName += hacker1.charAt(i).toUpperCase() + " ";
}

for (let i = 0; i <= hacker2.length; i++) {
  reverseName = hacker2.charAt(i) + reverseName;
}

console.log(driverName);
console.log(reverseName);

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
}

// Bonus 1

let myParagraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
   Mattis nunc sed blandit libero volutpat sed. Dui ut ornare lectus sit amet est placerat in. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. \
   Neque aliquam vestibulum morbi blandit cursus. Egestas sed tempus urna et pharetra pharetra massa massa.";

function countWords(str) {
  str = str.replace(/(^\s*)|(\s*$)/gi, "");
  str = str.replace(/[ ]{2,}/gi, " ");
  str = str.replace(/\n /, "\n");
  return str.split(" ").length;
}

console.log(countWords(myParagraph));

// Another solution - WIP
function wordCounter(str) {
  let wordCount = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str.charAt(i) === " ") {
      wordCount += 1;
    }
  }
}

console.log(wordCounter(myParagraph));

// Bonus 2 -WIP

let phraseToCheck = "Some string value";

function palindromeCheck(str) {
  for (let i = 0; i <= str.length; i++) {}
}
