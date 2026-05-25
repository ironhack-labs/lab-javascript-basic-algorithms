// Iteration 1: Names and Input

const hacker1 = "Ali";
console.log("The driver's name is " + hacker1);

const hacker2 = "Tural";
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
let result1 = "";
for (let i = 0; i < hacker1.length; i++) {
    if (i === hacker1.length - 1) {
        result1 += hacker1[i].toUpperCase();
    } else {
        result1 += hacker1[i].toUpperCase() + " ";
    }
}
console.log(result1);

// 3.2
let result2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    result2 += hacker2[i];
}
console.log(result2);

// 3.3
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}


// Bonus 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.";

let wordCount = 0;
let inWord = false;
for (let i = 0; i < longText.length; i++) {
    if (longText[i] !== " " && longText[i] !== "\n") {
        if (!inWord) {
            wordCount++;
            inWord = true;
        }
    } else {
        inWord = false;
    }
}
console.log("Number of words: " + wordCount);

let etCount = 0;
for (let i = 0; i < longText.length - 1; i++) {
    if (longText[i] === "e" && longText[i + 1] === "t") {
        const before = i === 0 || longText[i - 1] === " ";
        const after = i + 2 === longText.length || longText[i + 2] === " " || longText[i + 2] === "," || longText[i + 2] === ".";
        if (before && after) {
            etCount++;
        }
    }
}
console.log("Number of times 'et' appears: " + etCount);


// Bonus 2

const phraseToCheck = "A man, a plan, a canal, Panama!";

let cleaned = "";
for (let i = 0; i < phraseToCheck.length; i++) {
    const char = phraseToCheck[i].toLowerCase();
    if (char >= "a" && char <= "z") {
        cleaned += char;
    }
}

let isPalindrome = true;
for (let i = 0; i < Math.floor(cleaned.length / 2); i++) {
    if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log('"' + phraseToCheck + '" is a palindrome!');
} else {
    console.log('"' + phraseToCheck + '" is NOT a palindrome.');
}