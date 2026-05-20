// Iteration 1: Names and Input
let hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Jane";
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
let hacker1Caps = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1Caps += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1Caps.trim());

let hacker2Rev = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Rev += hacker2[i];
}
console.log(hacker2Rev);

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus, libero id malesuada adipiscing, nisi orci tempor eros, non lacinia quam magna varius risus. Sed non ligula. Nullam dictum vulputate sem. Praesent congue tristique lacus. Morbi diam. Suspendisse nonummy commodo turpis. Nunc non orci. Nulla ornare pellentesque sapien. In tristique, risus nec vulputate adipiscing, velit massa varius libero, non scelerisque diam enim at sem. Sed sed risus vel tellus posuere sollicitudin. Nulla eleifend arcu sit amet odio.`;

let wordCount = 0;
let etCount = 0;
let words = longText.split(/\s+/);
wordCount = words.length;

for (let i = 0; i < words.length; i++) {
  let word = words[i].replace(/[.,]/g, '');
  if (word === "et") {
    etCount++;
  }
}

console.log(`Word count: ${wordCount}`);
console.log(`"et" count: ${etCount}`);

// Bonus 2
let phraseToCheck = "Amor, Roma";
let cleanedPhrase = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  let char = phraseToCheck[i].toLowerCase();
  if (char >= 'a' && char <= 'z') {
    cleanedPhrase += char;
  }
}

let isPalindrome = true;
for (let i = 0; i < cleanedPhrase.length / 2; i++) {
  if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("It is a palindrome!");
} else {
  console.log("It is not a palindrome.");
}
