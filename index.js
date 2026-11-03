const hacker1 = "Kike";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Alex";
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`,
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`,
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`,
  );
}

let driverCapitalized = "";
for (let i = 0; i < hacker1.length; i++) {
  driverCapitalized += hacker1[i].toUpperCase() + " ";
}
console.log(driverCapitalized.trim());

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
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et vestibulum lacus. 
Sed vitae ex quis mi facilisis lacinia et sed mauris. Phasellus et odio accumsan, elementum dolor sit amet, viverra dui. 
Fusce et ex vehicula, placerat turpis ut, tincidunt eros. Donec et leo sed sem vestibulum semper et nec augue.`;

let wordCount = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " " || longText[i] === "\n") {
    wordCount++;
  }
}
console.log(`El texto tiene ${wordCount + 1} palabras en total.`);

let etCount = 0;
for (let i = 0; i < longText.length; i++) {
  if (
    longText[i] === " " &&
    longText[i + 1] === "e" &&
    longText[i + 2] === "t" &&
    (longText[i + 3] === " " ||
      longText[i + 3] === "." ||
      longText[i + 3] === ",")
  ) {
    etCount++;
  }
}
console.log(`La palabra 'et' aparece ${etCount} veces.`);

const phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanPhrase = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  let char = phraseToCheck[i].toLowerCase();
  if (char >= "a" && char <= "z") {
    cleanPhrase += char;
  }
}

let isPalindrome = true;
for (let i = 0; i < cleanPhrase.length / 2; i++) {
  if (cleanPhrase[i] !== cleanPhrase[cleanPhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(`"${phraseToCheck}" IS a palindrome!`);
} else {
  console.log(`"${phraseToCheck}" IS NOT a palindrome.`);
}
