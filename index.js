// Iteration 1: Names and Input *********************************

const hacker1 = "Antionio";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Siri";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals *********************************
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops *********************************

//3.1 *********************************

let newName = "";
for (let i = 0; i < hacker1.length; i++) {
  newName += hacker1[i].toUpperCase() + " ";
}
console.log(newName);
//3.2

let newName2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  newName2 += hacker2[i];
}
console.log(newName2);

//3.3 *********************************

// The localeCompare() method of String values
// returns a number indicating whether this string comes before, or after, or is the same as the given string in sort order.
// returns -1 if first string `driver` occurs alphabetically before `navigator`
// returns 1 if first string `driver` occurs alphabetically after `navigator`
// returns 0 if both string `driver` and `navigator` are the same

let comparison = hacker1.localeCompare(hacker2);

//to see the result of localeCompare
// console.log(comparison, "comparison");

if (comparison < 0) {
  console.log(`${hacker1}'s name goes first`);
} else if (comparison > 0) {
  console.log(`${hacker2}'s name goest first, definitely`);
} else {
  console.log(`What ?! You both have the same name`);
}

//Bonus1

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla nisl nunc, sit amet condimentum nulla hendrerit in. Praesent enim lorem, aliquet sed orci id, vulputate euismod urna. Fusce metus est, feugiat ac sagittis non, iaculis ut lorem. Vestibulum posuere, augue nec commodo scelerisque, erat nulla ultrices sapien, a pretium velit turpis nec mauris. Nam vulputate fermentum lectus. Nulla porta aliquam eros non efficitur. Mauris finibus, tortor sit amet ullamcorper faucibus, neque elit pharetra elit, vitae lacinia dui eros sagittis elit. Quisque ut suscipit est, et porttitor ligula. Quisque in quam rhoncus, ultricies velit a, vulputate neque. Maecenas commodo augue nibh, eleifend fringilla arcu elementum sit amet,Sed et maximus nibh. Maecenas hendrerit consequat libero sed aliquam. Morbi fringilla, velit sed tristique tristique, magna ligula venenatis tellus, id vulputate lectus quam et libero. In egestas consectetur pellentesque. Curabitur massa odio, venenatis sit amet felis nec, facilisis sollicitudin nisl. Praesent non elit pretium, ultrices mauris eu, dapibus metus. Curabitur facilisis posuere massa, ut placerat velit lacinia ut. Maecenas aliquet ultrices neque. Nam id neque dictum, placerat leo eget, porttitor nulla. Aliquam sit amet turpis auctor, iaculis quam vel, condimentum lectus. Etiam dolor nunc, fringilla sed magna at, dictum varius mi. Nam at risus a sapien dignissim rhoncus. Phasellus convallis ut libero et gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis molestie, est vitae placerat blandit, dui elit sodales elit, nec mattis nisl velit auctor est. Donec a magna non lectus porttitor bibendum ac elementum enim. Pellentesque sit amet sodales lectus. Praesent consequat nisl eget ornare tempus. Proin dictum neque id suscipit dapibus. Sed in mauris non orci commodo porta at nec ligula. Maecenas ut consequat ante. Phasellus lobortis imperdiet imperdiet.";

//Make your program count the number of words in the string.
console.log(`the length of the text : ${longText.split(" ").length}`);

console.log(longText.split(" "));

//Make your program count the number of times the Latin word et appears.
let words = 1;
let etCount = 0;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " " || longText[i] === "\n") {
    words++;
  } else if (
    longText[i - 1] === " " &&
    longText[i] === "e" &&
    longText[i + 1] === "t" &&
    (longText[i + 2] === " " || longText[i + 2] === ",")
  ) {
    etCount++;
  }
}

console.log(
  `this is how much et you've seen: ${etCount} , and number of word ${words}`
);

//Bonus 2

/* solution 1 */
// const phraseToCheck = "put it up";

// const checkPalindrome = (phraseToCheck) => {
//   let word1 = "";
//   for (let i = phraseToCheck.length - 1; i >= 0; i--) {
//     word1 += phraseToCheck[i].toLowerCase();
//   }
//   console.log(word1, phraseToCheck);
//   if (word1 === phraseToCheck) {
//     console.log("we have Palindrome");
//   } else {
//     console.log("not a palindrome");
//   }
//   console.log(word1);
// };

// console.log(checkPalindrome(phraseToCheck));

//**Another solution */

const phraseToCheck = "step on no pets";
const reverseString = phraseToCheck.toLowerCase().split("").reverse().join("");
if (reverseString === phraseToCheck) {
  console.log("you have Palindrome");
} else {
  console.log("no palindrome");
}
// console.log(phraseToCheck.split("").reverse("").join(""));
