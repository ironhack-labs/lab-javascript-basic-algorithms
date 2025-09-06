// Iteration 1: Names and Input

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

// Bonus 1 - JavaScript


let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. 
Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.`;


let wordCount = longText.split(/\s+/).filter(word => word.length > 0).length;


let etCount = (longText.match(/\bet\b/g) || []).length;


console.log("Total words in longText:", wordCount);
console.log("Occurrences of 'et':", etCount);



let phraseToCheck = "A man, a plan, a canal, Panama!";


let cleaned = phraseToCheck.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();


let reversed = cleaned.split("").reverse().join("");


let isPalindrome = cleaned === reversed;


console.log("Original phrase:", phraseToCheck);
console.log("Cleaned phrase:", cleaned);
console.log("Is it a palindrome?", isPalindrome);

