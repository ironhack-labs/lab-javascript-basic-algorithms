// Iteration 1: Names and Input

let hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Sarah";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops

// 3.1 Driver's name in uppercase with spaces

let spacedName = "";

for (let i = 0; i < hacker1.length; i++) {
  spacedName += hacker1[i].toUpperCase() + " ";
}

console.log(spacedName.trim());


// 3.2 Navigator's name reversed

let reversedName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}

console.log(reversedName);


// 3.3 Lexicographic order

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}


// Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Et harum quidem rerum facilis est et expedita distinctio. 
Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. 
Et totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt et.`;


// Count words

let words = longText.split(" ");
console.log(`Number of words: ${words.length}`);


// Count occurrences of "et"

let etCount = 0;

for (let i = 0; i < words.length; i++) {
  let cleanWord = words[i].toLowerCase().replace(/[^a-z]/g, "");

  if (cleanWord === "et") {
    etCount++;
  }
}

console.log(`Number of times "et" appears: ${etCount}`);


// Bonus 2: Palindrome Checker

let phraseToCheck = "A man, a plan, a canal, Panama!";


// Clean the string

let cleanedPhrase = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  let char = phraseToCheck[i].toLowerCase();

  if (
    (char >= "a" && char <= "z") ||
    (char >= "0" && char <= "9")
  ) {
    cleanedPhrase += char;
  }
}


// Check palindrome

let isPalindrome = true;

for (let i = 0; i < cleanedPhrase.length / 2; i++) {
  if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("It is a palindrome.");
} else {
  console.log("It is not a palindrome.");
}