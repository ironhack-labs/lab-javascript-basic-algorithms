// Iteration 1: Names and Input
let hacker1 = "Maria";  
console.log("The driver's name is " + hacker1);

let hacker2 = "John";   
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
console.log(hacker1.toUpperCase().split("").join(" "));  
console.log(hacker2.split("").reverse().join(""));       

// 3.3 Lexicographic order
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1:
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Etiam et sapien euismod, et facilisis nunc ultrices. 
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`;

let words = 0;
for(let i = 0; i < longText.length; i++) {
  if (longText[i] === " " || longText[i] === "\n"){
    words++;
  }
}
words += 1;
console.log("Number of words:", words);

let etCount = 0;
let textLower = longText.toLowerCase();

for (let i = 0; i < textLower.length - 1; i++) {
  if (textLower[i] === "e" && textLower[i+1] === "t") {
    let before = (i === 0) ? " " : textLower[i-1];
    let after = (i+2 >= textLower.length) ? " " : textLower[i+2];
    if ((before === " " || before === "\n" || before === "," || before === ".") &&
        (after === " " || after === "\n" || after === "," || after === ".")) {
      etCount++;
    }
  }
}

console.log("Number of 'et' occurrences:", etCount);

// Bonus 2
let phraseToCheck = "A man, a plan, a canal, Panama!";

let normalized = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  let char = phraseToCheck[i].toLowerCase();
  if (char >= "a" && char <= "z") {
    normalized += char;
  }
}

let isPalindrome = true;
for (let i = 0; i < normalized.length / 2; i++) {
  if (normalized[i] !== normalized[normalized.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("The phrase is a palindrome!");
} else {
  console.log("The phrase is NOT a palindrome.");
}