// Iteration 1: Names and Input

const hacker1 = "John";
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Jon";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

/* 2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!. */

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${
      hacker1.length || hacker2.length
    } characters!`
  );
}

// Iteration 3: Loops

// 3.1

let uppercaseName = " ";

for (let i = 0; i < hacker1.length; i++) {
  uppercaseName += hacker1[i].toUpperCase() + " ";
}

console.log(uppercaseName);

// 3.2

let reverseString = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  reverseString += hacker1[i];
}

console.log(reverseString);

// 3.3

let driver = "Aohn";
let navigator = "Zohn";

if (driver.localeCompare(navigator) < 0) {
  console.log("The driver's name goes first");
} else if (driver.localeCompare(navigator) > 0) {
  console.log("Yo, the navigator goes first, definitely");
} else {
  console.log("What!? You both have the same name?");
}

// Bonus 1:

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum tempus egestas sed sed risus pretium quam vulputate. Enim sed faucibus turpis in eu. Eget nulla facilisi etiam dignissim diam. Dignissim suspendisse in est ante in nibh. Diam in arcu cursus euismod quis. Erat velit scelerisque in dictum non consectetur. Sagittis id consectetur purus ut. Ut venenatis tellus in metus vulputate eu scelerisque. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Gravida quis blandit turpis cursus. Velit scelerisque in dictum non. Erat imperdiet sed euismod nisi porta. Semper feugiat nibh sed pulvinar proin gravida. Quis eleifend quam adipiscing vitae proin. In hac habitasse platea dictumst quisque sagittis purus. Mattis vulputate enim nulla aliquet porttitor lacus luctus. Vitae auctor eu augue ut lectus arcu. Quis eleifend quam adipiscing vitae proin sagittis nisl. Quam pellentesque nec nam aliquam. Congue nisi vitae suscipit tellus mauris. Nec dui nunc mattis enim ut tellus. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Eu augue ut lectus arcu bibendum. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Duis tristique sollicitudin nibh sit amet. Amet facilisis magna etiam tempor orci eu lobortis. Tristique senectus et netus et malesuada fames. Dignissim convallis aenean et tortor at risus. Sed risus ultricies tristique nulla aliquet. Est ultricies integer quis auctor elit sed vulputate. Convallis posuere morbi leo urna molestie at. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Id donec ultrices tincidunt arcu non. Ut consequat semper viverra nam libero justo. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Vel facilisis volutpat est velit egestas. Porttitor rhoncus dolor purus non enim praesent. Aliquet enim tortor at auctor. Ultrices gravida dictum fusce ut placerat orci. Fames ac turpis egestas maecenas pharetra. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Integer malesuada nunc vel risus. Amet nisl purus in mollis nunc.";

const longTextWordArr = longText.split(" ");

let wordCount = 0;
let etCount = 0;

wordCount = longTextWordArr.length;

for (let i = 0; i < longTextWordArr.length; i++) {
  if (longTextWordArr[i] === "et") {
    etCount++;
  }
}

console.log(wordCount);
console.log(etCount);

// Bonus 2:

const phraseToCheck = "A man, a plan, a canal – Panama."

let lowerCasePhrase = phraseToCheck.toLowerCase()
let normalizedPhrase = ""
let reversedPhrase = ""

for (let i = 0; i < lowerCasePhrase.length; i++) {
    let chars = lowerCasePhrase[i]

// ! Comment for future reference
// Check the string for only alphanumeric values (a-z, 0-9). `chars` represents each character in `lowerCasePhrase`.
// The conditional checks if each character is within the alphanumeric range by comparing its ASCII value.
// For example, 'a' >= 'a' and 'a' <= 'z' are true for letters, ensuring letters are included.
// Similarly, '0' >= '0' and '0' <= '9' are true for numeric digits.
// Spaces (" "), punctuation, and symbols have ASCII values outside these ranges, so they do not satisfy the conditions
// and are skipped. Thus, only alphanumeric characters are added to `normalizedPhrase`.

    if ((chars >= "a" && chars <= "z") || (chars >= "0" && chars <= "9")) {
        normalizedPhrase += chars
    }
}

for (let i = normalizedPhrase.length - 1; i >= 0; i--) {
    reversedPhrase += normalizedPhrase[i]
}

console.log(normalizedPhrase)
console.log(reversedPhrase)

if (normalizedPhrase === reversedPhrase) {
    console.log("This is a Palindrome!")
} else {
    console.log("This is not a Palindrome!")
}
