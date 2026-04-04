// Iteration 1: Names and Input


// Iteration 2: Conditionals


// Iteration 3: Loops
const hacker1 = "Alice";
console.log("The driver's name is " + hacker1);
const hacker2 = "Bob";
console.log("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}

let spacedName = "";

for (let i = 0; i < hacker1.length; i++) {
    spacedName += hacker1[i].toUpperCase() + " ";
}

console.log(spacedName);

let reversedName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    reversedName += hacker2[i];
}

console.log(reversedName);

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}

const longText = "Lorem ipsum dolor sit amet et consectetur adipiscing elit et sed do eiusmod tempor incididunt ut labore et dolore magna aliqua et";

let words = longText.split(" ");
console.log("Number of words: " + words.length);

let countEt = 0;

for (let i = 0; i < words.length; i++) {
    if (words[i] === "et") {
        countEt++;
    }
}

console.log("Number of 'et': " + countEt);

const phraseToCheck = "race car";

let cleaned = "";

for (let i = 0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i] !== " ") {
        cleaned += phraseToCheck[i].toLowerCase();
    }
}

let isPalindrome = true;

for (let i = 0; i < cleaned.length / 2; i++) {
    if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log("It is a palindrome");
} else {
    console.log("It is not a palindrome");
}