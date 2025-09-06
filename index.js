// Iteration 1: Names and Input
let hacker1 = "Vincent";  // 1.1
console.log("The driver's name is " + hacker1);  // 1.2

let hacker2 = "Alvaro";  // 1.3
console.log("The navigator's name is " + hacker2); 

// Iteration 2: Conditionals
let driverLength = hacker1.length;
let navigatorLength = hacker2.length;

if (driverLength > navigatorLength) {
    console.log("The driver has the longest name, it has " + driverLength + " characters.");
} else if (driverLength < navigatorLength) {
    console.log("It seems that the navigator has the longest name, it has " + navigatorLength + " characters.");
} else {
    console.log("Wow, you both have equally long names, " + driverLength + " characters!");
}

// Iteration 3: Loops

let driverUpperCase = "";
for (let i = 0; i < hacker1.length; i++) {
    driverUpperCase += hacker1[i].toUpperCase() + " ";
}
console.log(driverUpperCase.trim());


let navigatorReverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    navigatorReverse += hacker2[i];
}
console.log(navigatorReverse);


if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}
//BONUS
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`;

let wordCount = 0;
let inWord = false;


for (let i = 0; i < longText.length; i++) {
    if (longText[i] !== ' ' && longText[i] !== '\n' && longText[i] !== '\t') {
        if (!inWord) {
            wordCount++;
            inWord = true;
        }
    } else {
        inWord = false;
    }
}

console.log("Number of words: " + wordCount);


//BONUS 2

let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanPhrase = "";


for (let i = 0; i < phraseToCheck.length; i++) {
    let char = phraseToCheck[i].toLowerCase();
    if (char >= 'a' && char <= 'z') {
        cleanPhrase += char;
    }
}


let isPalindrome = true;
let length = cleanPhrase.length;

for (let i = 0; i < Math.floor(length / 2); i++) {
    if (cleanPhrase[i] !== cleanPhrase[length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log(`"${phraseToCheck}" is a palindrome!`);
} else {
    console.log(`"${phraseToCheck}" is NOT a palindrome.`);
}

