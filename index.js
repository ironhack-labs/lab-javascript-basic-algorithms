// Iteration 1: Names and Input

const hacker1 = "Luana";
const hacker2 = "Andres";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
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

// 3.1
const hacker1Upper = hacker1.toUpperCase();
let result = "";

for (let i = 0; i < hacker1Upper.length; i++) {
  if (hacker1Upper[i] !== "") {
    result += hacker1Upper[i] + " ";
  }
}

console.log(result);

// 3.2
let reverseName = "";
for (let j = hacker2.length; j > 0; j--) {
  reverseName += hacker2[j - 1];
}

console.log(reverseName);

// 3.3
// -1 -> hacker 2
const alphaName = hacker2.localeCompare(hacker1);
if (alphaName === 1) {
  console.log(`The driver's name goes first.`);
} else if (alphaName === -1) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

/*******/
//BONUS
// 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum, felis nec aliquam dictum, quam odio molestie est, imperdiet vulputate mi dui id justo. Sed quis sem diam. Cras dictum mollis faucibus. Nulla eget laoreet lectus. Ut tortor velit, eleifend ut volutpat ac, fringilla in augue. Praesent tristique eros eros, sodales mollis enim convallis vel. Suspendisse sodales eros id enim gravida, id vestibulum dolor dapibus. Maecenas varius ipsum vel blandit posuere. Etiam sollicitudin accumsan nunc id ultrices. Integer feugiat et enim quis imperdiet. Duis placerat semper sapien, in placerat magna aliquam non. Nunc ac velit at mi dapibus tempor eu ac ex. Sed a dignissim libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

Cras sit amet mauris mollis, laoreet tellus et, porttitor nisi. Nunc lacinia, arcu a congue vehicula, lacus quam mattis est, iaculis finibus nibh massa vel turpis. Suspendisse quis lobortis felis, ac dignissim mi. Phasellus semper elit enim, sit amet sodales tortor imperdiet ac. Donec maximus nibh sit amet nunc accumsan, placerat convallis velit vulputate. Aenean nisl augue, euismod sit amet dignissim ac, laoreet non elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent eros ipsum, venenatis sed magna a, maximus malesuada quam. Nunc vulputate orci id ipsum viverra, ut accumsan nisl interdum. Cras faucibus, dui in mollis tristique, mi metus egestas metus, a mattis massa purus vitae leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras consectetur mollis velit, id tincidunt nisl.

Sed sagittis finibus arcu, vitae cursus ligula molestie id. Sed id dictum dolor. In sagittis aliquet est, non feugiat ligula semper et. Praesent in eros dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis eu magna pharetra quam fringilla tempor vitae sed metus. Phasellus arcu est, finibus sit amet porttitor mollis, tristique eget lorem. Sed aliquam urna a mi hendrerit tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus et turpis erat.`;

const words = longText.split(" ");
console.log(words.length);
let etWordCount = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "et") {
    etWordCount++;
  }
}

console.log(etWordCount);

//2

const phraseToCheck = "Anna Anna";
const lowerCase = phraseToCheck.toLowerCase();
let reversedWord = "";

for (let i = lowerCase.length - 1; i >= 0; i--) {
  reversedWord += lowerCase[i];
}

// console.log(lowerCase);
// console.log(reversedWord);

if (lowerCase === reversedWord) {
  console.log("Its a palindrome");
} else {
  console.log("its not a palindrome");
}
