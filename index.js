// Iteration 1: Names and Input
const hacker1 = "Mohammad";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Ali";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}



// Iteration 3: Loops
let upperName = "";
for (let i = 0; i < hacker1.length; i++) {
  upperName += hacker1[i].toUpperCase() + " ";
}
console.log(upperName.trim());

// reversedNAme
let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);
// navi
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}
// count
const longText = `Lorem ipsum dolor sit amet, et consectetur adipiscing elit. Etiam et magna.`;

const words = longText.split(" ");
console.log("Number of words:", words.length);

let etCount = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "et") {
    etCount++;
  }
}
console.log("Occurrences of 'et':", etCount);

//check

const phraseToCheck = "A man, a plan, a canal, Panama!";

let cleaned = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  const char = phraseToCheck[i].toLowerCase();
  if (char >= "a" && char <= "z") {
    cleaned += char;
  }
}

let reversed = "";
for (let i = cleaned.length - 1; i >= 0; i--) {
  reversed += cleaned[i];
}

if (cleaned === reversed) {
  console.log("It's a palindrome!");
} else {
  console.log("Not a palindrome.");
}


