// Iteration 1: Names and Input

const hacker1 = "Yaqut";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Theo";
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
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}


// Bonus 1

const longText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Et harum quidem rerum facilis est et expedita distinctio. 
Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
`;



const words = longText.split(" ");
console.log(`Number of words: ${words.length}`);




let etCount = 0;

for (let i = 0; i < words.length; i++) {
  if (words[i].toLowerCase().replace(/[^a-z]/g, "") === "et") {
    etCount++;
  }
}

console.log(`Number of times "et" appears: ${etCount}`);




const phraseToCheck = "A man, a plan, a canal, Panama!";

let cleanedPhrase = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  const char = phraseToCheck[i].toLowerCase();

  if (
    (char >= "a" && char <= "z") ||
    (char >= "0" && char <= "9")
  ) {
    cleanedPhrase += char;
  }
}

let reversedPhrase = "";

for (let i = cleanedPhrase.length - 1; i >= 0; i--) {
  reversedPhrase += cleanedPhrase[i];
}


if (cleanedPhrase === reversedPhrase) {
  console.log("It is a palindrome!");
} else {
  console.log("It is not a palindrome.");
}