// Iteration 1: Names and Input
const hacker1 = "Thor";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Omar";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
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

// Iteration 3: Loops
let driverName = "";
for (const char of hacker1) {
  driverName += char.toUpperCase() + " ";
}

console.log(driverName);

let navigatorName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorName += hacker2[i];
}

console.log(navigatorName);

// Lexicographic order

const length = Math.max(hacker1.length, hacker2.length);

for (let i = 0; i < length; i++) {
  if (hacker1 === hacker2) {
    console.log("What!? You both have the same name?");
    break;
  } else if (hacker1[i] < hacker2[i] || !hacker1[i]) {
    console.log("The driver's name goes first.");
    break;
  } else if (hacker2[i] < hacker1[i] || !hacker2[i]) {
    console.log("Yo, navigator goes first definitely.");
    break;
  } else {
    continue;
  }
}

// Bonus 1

//Number of words

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat volutpat sem, nec faucibus lorem cursus euismod. Proin eu viverra nibh. Duis consequat nec augue in posuere. Praesent semper eros vitae nulla suscipit feugiat. Pellentesque iaculis quam non leo volutpat, eget imperdiet ex facilisis. Aliquam et dolor quis velit suscipit ultrices non et erat. Mauris at condimentum orci. Cras eget ex suscipit, vestibulum urna ut, interdum metus. Ut tempus dapibus nulla, volutpat scelerisque massa tincidunt tempus. Cras mi ligula, aliquam eu hendrerit sit amet, efficitur a tellus. Phasellus et diam nec arcu elementum rhoncus. Cras tristique ultrices justo convallis scelerisque. Donec a facilisis diam. Maecenas ultricies sagittis velit, ut ultricies ex. Nullam aliquam rhoncus feugiat. Sed dapibus posuere tincidunt.

Nulla cursus lacus eu massa cursus iaculis sit amet pellentesque lorem. Integer vel arcu id lorem posuere ornare eget elementum ex. Aliquam auctor aliquet feugiat. Morbi porta risus eros, sed pharetra magna ornare sed. Nunc et arcu sed odio euismod sollicitudin in aliquet libero. Proin eu elit a est suscipit maximus. Sed volutpat a risus non elementum. Vivamus malesuada orci in ullamcorper mollis. Sed ligula diam, feugiat a vehicula id, egestas et diam. Quisque ullamcorper turpis sit amet felis commodo pretium. Sed sollicitudin mattis risus, vitae fringilla purus euismod in. Aliquam gravida metus metus, nec molestie enim faucibus at. Nulla ut est interdum, congue odio eu, semper quam. Nulla facilisi.

Duis eleifend, magna non faucibus malesuada, est metus commodo eros, nec pulvinar felis turpis id magna. Praesent at volutpat purus. Mauris varius pellentesque enim, lacinia interdum nulla consequat vel. Morbi ac condimentum justo. Vestibulum finibus, urna vel porttitor efficitur, erat nisi feugiat purus, eu gravida libero turpis non quam. Nulla condimentum vitae est non eleifend. Sed eget quam tincidunt, mattis nisi a, elementum augue. Vestibulum eu orci et massa auctor varius non at nulla.`;

const countWords = (sentence) => {
  const trimmedSentence = sentence.trim();

  if (trimmedSentence.length === 0) {
    return "You didn't enter anything...";
  }

  let blankSpaceCounter = 0;

  let lineBreakCounter = 0;

  for (let i = 0; i < trimmedSentence.length; i++) {
    if (trimmedSentence[i] === " ") {
      blankSpaceCounter++;
    } else if (trimmedSentence[i] === "\n") {
      if (trimmedSentence[i + 1] !== "\n") {
        lineBreakCounter++;
      }
    }
  }

  const numberOfWords =
    blankSpaceCounter + lineBreakCounter === 0
      ? 1
      : blankSpaceCounter + lineBreakCounter + 1;

  return `The number of words is ${numberOfWords}`;
};

console.log(countWords(lorem));

//Occurances of 'et'

let occurancesOfEt = 0;

for (let i = 0; i < lorem.length; i++) {
  if ((lorem[i] === "E" || lorem[i] === "e") && lorem[i - 1] === " ") {
    if (
      lorem[i + 1] === "t" &&
      (lorem[i + 2] === " " || lorem[i + 2] === ",")
    ) {
      occurancesOfEt++;
    }
  }
}

console.log(`The number of occurances of "et" is ${occurancesOfEt}`);

// Bonus 2

// Attempt using only what we learned so far

const phrase = "put it up";

let left = 0;
let right = phrase.length - 1;

const phraseToCheck = phrase.toLowerCase();

while (left <= right) {
  while (
    phraseToCheck[left] === " " ||
    phraseToCheck[left] === "," ||
    phraseToCheck[left] === "'"
  ) {
    left++;
  }

  while (
    phraseToCheck[right] === " " ||
    phraseToCheck[right] === "," ||
    phraseToCheck[right] === "'"
  ) {
    right--;
  }

  if (phraseToCheck[left] === phraseToCheck[right] && left < right) {
    left++;
    right--;
  } else if (phraseToCheck[left] === phraseToCheck[right] && left === right) {
    console.log("The word is a palindrome.");
    break;
  } else {
    console.log("The word is not a palindrome.");
    break;
  }
}

// Solution 2

const checkPalindrome = (phrase) => {
  const regEx = /[^a-zA-Z]/g;

  const phraseToCheck = phrase.replace(regEx, "").toLowerCase();

  let left = 0;
  let right = phraseToCheck.length - 1;

  while (left <= right) {
    if (phraseToCheck[left] === phraseToCheck[right]) {
      left++;
      right--;
    } else {
      return "The word is not a palindrome";
    }
  }

  return "The word is a palindrome";
};

console.log(checkPalindrome(phrase));
