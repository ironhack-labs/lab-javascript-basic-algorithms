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
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

// Iteration 3: Loops
// 3.1
let driverName = "";

for (let i = 0; i <= hacker1.length; i++) {
  driverName += hacker1.charAt(i).toUpperCase() + " ";
}

console.log(driverName.trim()); 

// 3.2
let reverseName = "";

for (let j = hacker2.length - 1;  j >= 0; j--) {
  reverseName += hacker2[j];
}

console.log(reverseName);

// Another solution

for (let i = 0; i <= hacker2.length; i++) {
  reverseName = hacker2.charAt(i) + reverseName;
}

console.log(reverseName);

// 3.3
if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
}

// Bonus 1

let myParagraph =
  "Lorem ipsum dolor sit amet, et consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
   Mattis nunc sed blandit libero volutpat sed. Dui ut ornare lectus sit amet est placerat in. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. \
   Neque aliquam vestibulum morbi blandit et cursus. Et Egestas sed tempus urna et pharetra pharetra massa massa.";

function countWords(str) {
  str = str.replace(/(^\s*)|(\s*$)/gi, "");
  str = str.replace(/[ ]{2,}/gi, " ");
  str = str.replace(/\n /, "\n");
  return str.split(" ").length;
}

console.log(countWords(myParagraph));

// Another solution - WIP

let wordCount = 1;

function wordCounter(str) {
  //str = str.replace(/(^\s*)|(\s*$)/gi, "");
  str = str.replace(/[ ]{2,}/gi, " ");
  //str = str.replace(/\n /, "\n");
  //str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === " ") {
      wordCount += 1;
    }
  }
  console.log(wordCount);
}

wordCounter(myParagraph);

let lowerCaseStr = myParagraph.toLowerCase();

let etCount = 0;

for(let i = 0; i < lowerCaseStr.length; i++) {
  if (lowerCaseStr[i] === "e" && lowerCaseStr[i + 1] === "t") {
    etCount ++;
  }
}

console.log(`Number of et's: ${etCount}`);


// Bonus 2 -WIP

let phrase = "Amor, Roma";
let cleanString = ""
let reverseString = ""

function stringCleaner(str) {
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  str = str.replace(/\s/g, "");
  str = str.toLowerCase();
  return str;
  }

cleanString = stringCleaner(phrase);

for (let i = 0; i <= cleanString.length; i++) {
  reverseString = cleanString.charAt(i) + reverseString;
   }

 if (cleanString === reverseString) {
      console.log(`${phrase} is a palindrome!`);
    } else {
      console.log(`${phrase} is not a palindrome!`);
    }
