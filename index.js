// Iteration 1: Names and Input
let hacker1 = "John";
console.log("The driver's name is " + hacker1);

let hacker2 = "Nina";
console.log("The navigator's name is " + hacker2);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!.");
}


// Iteration 3: Loops

let driverSpaced = "";
for (let i = 0; i < hacker1.length; i++) {
    driverSpaced += hacker1[i].toUpperCase() + " ";
}
console.log(driverSpaced.trim());

let navigatorReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    navigatorReversed += hacker2[i];
}
console.log(navigatorReversed);

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}


// Bonus :
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";

let wordCount = 0;
if (longText.length > 0) {
    let words = longText.split(/\s+/);
    wordCount = words.filter(word => word.length > 0).length;
}
console.log("Total words: " + wordCount);

let etCount = 0;
let textWords = longText.split(/[^a-zA-Z]+/); 
for (let i = 0; i < textWords.length; i++) {
    if (textWords[i].toLowerCase() === "et") {
        etCount++;
    }
}
console.log("Number of times 'et' appears: " + etCount);


let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanStr = "";

for (let i = 0; i < phraseToCheck.length; i++) {
    let char = phraseToCheck[i].toLowerCase();
    if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
        cleanStr += char;
    }
}

let isPalindrome = true;
let left = 0;
let right = cleanStr.length - 1;

while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
        isPalindrome = false;
        break;
    }
    left++;
    right--;
}

if (isPalindrome) {
    console.log('"' + phraseToCheck + '" is a palindrome!');
} else {
    console.log('"' + phraseToCheck + '" is NOT a palindrome.');
}