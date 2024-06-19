// Iteration 1: Names and Input
const hacker1 = "Ole";
console.log("The drivers name is" + " " + hacker1);
const hacker2 = "Son-Goku";
console.log("The navigators name is" + " " + hacker2);
// Iteration 2: Conditionals
const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;
if (hacker1Length > hacker2Length) {
  console.log(
    "The driver has the longer name , it has" +
      " " +
      hacker1.length +
      " " +
      "characters."
  );
} else if (hacker1Length < hacker2Length) {
  console.log(
    "It seems that the navigator has the longest name, it has" +
      " " +
      hacker2.length +
      " " +
      "characters."
  );
} else if ((hacker1Length = hacker2Length)) {
  console.log(
    "Wow, you both have equally long names," +
      " " +
      hacker1.length +
      " " +
      "characters!"
  );
}
// Iteration 3: Loops
const driversNameInCaps = hacker1.toUpperCase().split("").join(" ");
console.log(driversNameInCaps);
const navigatorsNameReversed = hacker2.split("").reverse().join("");
console.log(navigatorsNameReversed);
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1:
const longText = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam. 
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.`;
console.log(longText);

const wordsArray = longText.split(/\s+/);
const wordCount = wordsArray.filter((word) => word.length > 0).length;
console.log("Number of words:", wordCount);

let etCount = 0;
for (let i = 0; i < wordsArray.length; i++) {
  if (wordsArray[i] === "et") {
    etCount++;
  }
}
console.log("Number of times word et appears:", etCount);

const phraseToCheck = "A man, a plan, a canal, Panama!";
const cleannedPhrase = phraseToCheck.replace(/[^a-zA-Z]/g, "").toLowerCase;
let isAPalindrome = true;
for (let i = 0; (j = cleannedPhrase.length - 1); i < j, i++, j--) {
  if (cleannedPhrase[i] !== cleannedPhrase[j]) {
    isAPalindrome = false;
    break;
  }
}
if (isAPalindrome) {
  console.log("This phrase is a Palindrome.");
} else {
  console.log("This phrase is not a Palindrome.");
}
