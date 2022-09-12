// Iteration 1: Names and Input
const hacker1 = "against";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "check";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1 < hacker2) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let newHacker1 = "";
for (let i = 0; i < hacker1.length; i++) {
  newHacker1 += hacker1[i].toUpperCase() + " ";
}
console.log(`The characters of the driver's name in capital are ${newHacker1}`);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let newHacker2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  newHacker2 += hacker2[i];
}
console.log(
  `The characters of the navigator's name in reverse order are ${newHacker2}`
);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

let driver = hacker1.toLowerCase();

let passenger = hacker2.toLowerCase();

let carRider = driver.localeCompare(passenger);

console.log(`testing: ${carRider}`);
// negative value --> driver before passenger
if (carRider < 0) {
  console.log(`The driver's name goes first.`);
  // positive value --> driver after passenger
} else if (carRider > 0) {
  console.log(`The navigator's name goes second definitely.`);
  // 0 value --> driver === passenger
} else {
  console.log(`What?! You both have the same name?`);
}

// Bonus 1:
// Go to lorem ipsum generator and:

// a. Generate 3 paragraphs. Store the text in a variable type of string.
// b. Make your program count the number of words in the string.
// c. Make your program count the number of times the Latin word et appears.

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum rutrum nibh, ac efficitur augue consequat eu. Curabitur et luctus libero. Phasellus sit amet facilisis arcu. Sed auctor orci libero, in ultricies justo consequat vitae. Suspendisse vel lectus sit amet lacus aliquet laoreet. Vivamus justo elit, convallis quis accumsan facilisis, gravida vitae tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sed scelerisque ligula. Duis id ex sed diam convallis porttitor id sit amet magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis ut massa aliquet, auctor sapien nec, semper eros.

Etiam condimentum rutrum arcu a sagittis. Quisque auctor mi sit amet nunc ornare fermentum. Mauris consequat ultrices volutpat. Donec nec finibus eros. Sed vel accumsan nulla. Nullam vitae elit commodo, mattis arcu id, tincidunt mi. Sed volutpat nulla a bibendum pretium.

Suspendisse eleifend, quam in lobortis vestibulum, odio augue facilisis lectus, ut semper elit neque ac sapien. Maecenas a est placerat augue consectetur tincidunt. Praesent auctor, tortor non varius ultrices, risus magna gravida nulla, vitae suscipit purus turpis et elit. Nam mauris est, hendrerit vitae euismod sit amet, egestas sit amet justo. Vivamus dapibus a leo ac sollicitudin. Donec fringilla ac arcu eu molestie. Aliquam bibendum venenatis gravida. Integer dapibus placerat sapien vulputate auctor. Nulla tincidunt vestibulum elit. Ut at malesuada leo, sit amet fermentum est. Duis sit amet libero quis mi fringilla condimentum. Maecenas fringilla tellus ac enim finibus viverra. Proin a posuere ex.`;

let totalWords = 0;
let totalEtWordsCount = 0;

let splittedParagraph = paragraph.split(" ");

for (let i = 0; i < splittedParagraph.length; i++) {
  if (splittedParagraph[i].includes(" ")) {
    totalWords++;
  } else if (splittedParagraph[i] === "et" || splittedParagraph[i] === "et.") {
    totalEtWordsCount++;
  }
  totalWords++;
}
console.log("total words -->", totalWords);
console.log("total et words -->", totalEtWordsCount);

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome.

let stringToCheck = "step on no pets";
stringToCheck = stringToCheck.replace(/[ ,!.]/g, "").toLowerCase();

let reversedString = stringToCheck.split("").reverse().join("");

if (stringToCheck === reversedString) {
  console.log("String is a palindrome");
} else {
  console.log("String is not a palindrome");
}
