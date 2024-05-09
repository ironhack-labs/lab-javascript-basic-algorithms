// Iteration 1: Names and Input
console.log("Iteration 1: Names and Input");

const hacker1 = "Joana"; // driver
const hacker2 = "Ana"; // navigator
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
console.log("Iteration 2: Conditionals");

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
console.log("Iteration 3: Loops");

let result = "";
for (let i = 0; i < hacker1.length; i++) {
  result += hacker1[i].toUpperCase() + " ";
}
console.log(result);

let reverseName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i];
}
console.log(reverseName);

if (hacker1 < hacker2) {
  console.log(`The driver's name (${hacker1}) goes first.`);
} else if (hacker1 > hacker2) {
  console.log(`Yo, the navigator (${hacker2}) goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

// Bonus 1
console.log("Bonus 1");

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam massa eget molestie hendrerit. Proin non quam at urna facilisis laoreet at nec ante. Praesent a odio ut ex pharetra commodo vel at velit. Aliquam erat volutpat. Aliquam sed augue nec libero aliquam vestibulum. Curabitur porta a nibh in fringilla. Nullam vitae ante est. Nunc eget tortor eget massa tempus consequat. Ut ultricies ipsum rutrum, lacinia neque nec, porta lacus. Aliquam vel cursus enim. Quisque efficitur lorem vel purus consectetur suscipit.\
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus non scelerisque elit. Mauris a accumsan massa, vitae placerat nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque tortor massa, finibus sit amet justo non, blandit ultricies mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus ante tellus, elementum ut ipsum non, luctus imperdiet magna. Etiam euismod quam in sem congue, eu faucibus eros facilisis.\
Morbi laoreet purus vitae ex suscipit egestas. Curabitur fermentum sagittis pulvinar. Phasellus gravida lorem augue, sed tincidunt ligula convallis vel. Vivamus et massa nec justo dictum sodales. Aenean vel feugiat orci. Morbi mauris nulla, convallis in dolor at, tempor lobortis enim. Sed lacinia enim est, vel vulputate est porttitor at. Vivamus molestie turpis eget felis faucibus eleifend. Quisque eu ultricies tellus. Sed hendrerit, magna ac lacinia iaculis, lacus eros interdum ante, eu vulputate lectus arcu id nisi.";

let counter = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    counter++;
  }
}
console.log(`The long string contains ${counter * 2} words.`); // 472 words

wordsCount = longText.split(" ").length;
console.log(
  `(Using string.split() method) The long string contains ${counter * 2} words.`
); // 472 words.

shortText = "heletlo word et ";

let countEt = 0;
for (let i = 0; i < longText.length; i++) {
  if (
    longText[i - 1] + longText[i] + longText[i + 1] + longText[i + 2] ===
    " et "
  ) {
    countEt++;
  }
}
console.log(`The long string contains the "et" ${countEt} times.`);

// Bonus 2
console.log("Bonus 2");

let phraseToCheck = "put it up";
let reverseCleanWord = "";

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  if (phraseToCheck[i] === " ") {
    continue;
  } else {
    reverseCleanWord += phraseToCheck[i].toLowerCase();
  }
}

// console.log(reverseCleanWord)

let phraseToCheckClean = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i] === " ") {
    continue;
  } else {
    phraseToCheckClean += phraseToCheck[i].toLowerCase();
  }
}

if (phraseToCheckClean === reverseCleanWord) {
  console.log(`'${phraseToCheck}' is a palindrome!`);
} else {
  console.log(`'${phraseToCheck}' is NOT a palindrome...`);
}
