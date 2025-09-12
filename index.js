// Iteration 1: Names and Input

const hacker1 = "Kevin"; // driver
const hacker2 = "Maximilian"; // navigator

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
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

// Iteration 3.1: driver's name in capitals with spaces
let spacedUpper = "";
for (let i = 0; i < hacker1.length; i++) {
  spacedUpper += hacker1[i].toUpperCase();
  if (i !== hacker1.length - 1) spacedUpper += " ";
}
console.log(spacedUpper);

// Iteration 3.2: navigator's name reversed
let reversedNavigator = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedNavigator += hacker2[i];
}
console.log(reversedNavigator);

// Iteration 3.3: lexicographic order
if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else {
  console.log("Yo, the navigator goes first, definitely.");
}

// ===== Bonus 1 =====
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.


Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.


Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.`;

const words = longText.split(/\s+/).filter((w) => w.length > 0);
let wordCount = 0;
for (let i = 0; i < words.length; i++) {
  const cleaned = words[i].replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
  if (cleaned.length > 0) wordCount++;
}
console.log(`Bonus 1 - Word count: ${wordCount}`);

let etCount = 0;
for (let i = 0; i < words.length; i++) {
  const cleaned = words[i]
    .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "")
    .toLowerCase();
  if (cleaned === "et") etCount++;
}
console.log(`Bonus 1 - Anzahl von "et": ${etCount}`);

// ===== Bonus 2 =====
function isPalindrome(phrase) {
  let sanitized = "";
  for (let i = 0; i < phrase.length; i++) {
    const ch = phrase[i].toLowerCase();
    if ((ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9")) {
      sanitized += ch;
    }
  }
  let left = 0;
  let right = sanitized.length - 1;
  while (left < right) {
    if (sanitized[left] !== sanitized[right]) return false;
    left++;
    right--;
  }
  return true;
}

const examples = [
  "A man, a plan, a canal, Panama!",
  "Amor, Roma",
  "race car",
  "stack cats",
  "step on no pets",
  "taco cat",
  "put it up",
  "Was it a car or a cat I saw?",
  "No 'x' in Nixon",
  "Not a palindrome",
];

for (let i = 0; i < examples.length; i++) {
  console.log(`"${examples[i]}" -> palindrome? ${isPalindrome(examples[i])}`);
}
