// Iteration 1: Names and Input
const hacker1 = "Pol";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Jorge";
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

// 3.1
let capitalLetterWithSpaces = hacker1[0].toLocaleUpperCase();
for (let i = 1; i < hacker1.length; i++) {
  let letter = hacker1[i];
  capitalLetterWithSpaces += " " + letter.toLocaleUpperCase();
}
console.log(capitalLetterWithSpaces);

// 3.2 Otra manera de inicializar la variable
let reverseName;
for (let i = hacker2.length - 1; i >= 0; i--) {
  let letter = hacker2[i];
  if (i === hacker2.length - 1) {
    reverseName = letter;
  } else {
    reverseName += letter;
  }
}
console.log(reverseName);

// 3.3

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 > hacker1) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// BONUS

/*Go to the lorem ipsum generator website and:

Generate 3 paragraphs. Store the text in a new string variable named longText.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.*/

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris urna quam, condimentum id lacus tempus, accumsan ullamcorper est. Morbi eleifend placerat posuere. Etiam interdum consectetur dui et dignissim. Nulla consequat dui sit amet est ornare malesuada. Morbi facilisis augue a aliquet hendrerit. In vel dui ac mauris suscipit ullamcorper. Donec vitae eleifend felis. Donec aliquet, ipsum nec ultricies accumsan, magna justo pulvinar tellus, eu hendrerit sem nibh sit amet sapien. Curabitur volutpat sapien et neque bibendum efficitur. Vivamus posuere semper eleifend. Sed placerat suscipit tellus, quis rutrum sem. Curabitur blandit venenatis augue, vitae faucibus elit finibus a. Maecenas varius condimentum sapien sed interdum. Vivamus interdum condimentum suscipit. Cras dignissim nunc vitae fringilla congue. Maecenas sit amet feugiat elit. Aenean at eros cursus, dignissim nulla fermentum, condimentum nulla. Donec vel risus facilisis, finibus ante euismod, pellentesque quam. Sed sodales dapibus dui quis fermentum. Praesent nec purus ipsum. Duis eu leo in eros cursus semper. Etiam eget imperdiet turpis. Vestibulum tincidunt tincidunt rhoncus. Aenean molestie nulla vitae eros facilisis ultrices. Praesent finibus vulputate purus non ultrices. Duis tristique lectus vitae risus condimentum, ac aliquam risus eleifend. Vestibulum vehicula nisi mi, et gravida lorem pharetra accumsan. Duis augue ligula, dictum ut ornare sit amet, accumsan mollis felis. Etiam dictum porta massa, vitae molestie purus vulputate id. Maecenas eget nulla ac elit vestibulum fermentum. Fusce magna lorem, laoreet vel blandit eu, gravida sit amet ante. Proin viverra lacus sit amet sodales porta. Aenean ac sapien eu est tristique sodales. Maecenas hendrerit lacinia justo, sed malesuada orci dapibus dignissim. Quisque malesuada egestas arcu ac dignissim.";
const words = longText.split(" ");
console.log(words.length);

const latinWord = "et";
let counter = 0;
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  if (word.includes(latinWord)) {
    counter++;
  }
}
console.log(counter);

// BONUS 2

function deleteSpecialCharacters(text) {
  return text.replaceAll(/[^a-zA-Z0-9 ]/g, "");
}

function isPalindrome(text) {
  let reverseText = "";
  for (let i = text.length - 1; i >= 0; i--) {
    let letter = text[i];
    if (i === text.length - 1) {
      reverseText = letter;
    } else {
      reverseText += letter;
    }
  }
  return (
    deleteSpecialCharacters(text).toLocaleUpperCase() ===
    deleteSpecialCharacters(reverseText).toLocaleUpperCase()
  );
}

console.log(isPalindrome("Amor, Roma"));
