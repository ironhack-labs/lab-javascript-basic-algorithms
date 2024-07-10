// Iteration 1: Names and Input

const hacker1 = "Matheus";
const hacker2 = "Prashidhika and David";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

// 3.3 Depending on the lexicographic order of the strings, print:

//     The driver's name goes first.
//     Yo, the navigator goes first, definitely.
//     What?! You both have the same name?

let uppercaseName = "";

for (i = 0; i < hacker1.length; i++) {
  uppercaseName += hacker1[i].toUpperCase() + " ";
}

console.log(uppercaseName);

// console.log(hacker2.split("").reverse().join(""));

let reverseOrder = "";

for (i = hacker2.length; i >= 0; i--) {
  reverseOrder += hacker2[i];
}

console.log(reverseOrder);

if (hacker1.localeCompare(hacker2)) {
  console.log("The driver's name goes first.");
} else if (hacker2.localeCompare(hacker1)) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus 2 because bonus 1 looks boring

const phraseToCheck = "racecar";

function checkPalindrome(txt) {
  if (txt.split("").reverse().join("") === txt) {
    console.log(`'${txt}' is a palindrome!`);
  }
  return true;
}

checkPalindrome(phraseToCheck);

//Bonus 1
const longText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus aliquam eleifend mi in. Donec ac odio tempor orci dapibus. Tristique nulla aliquet enim tortor at. Sed elementum tempus egestas sed sed risus pretium. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Magnis dis parturient montes nascetur ridiculus mus mauris. Facilisi nullam vehicula ipsum a arcu. In aliquam sem fringilla ut morbi tincidunt augue. Purus sit amet luctus venenatis. Mauris augue neque gravida in. Neque vitae tempus quam pellentesque nec. Vivamus at augue eget arcu dictum varius duis at. Vel risus commodo viverra maecenas accumsan.

At lectus urna duis convallis. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Tristique senectus et netus et malesuada fames ac turpis. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Aenean euismod elementum nisi quis eleifend quam adipiscing. Ultricies integer quis auctor elit sed vulputate mi. Sed vulputate odio ut enim blandit volutpat maecenas. Dictum at tempor commodo ullamcorper a lacus vestibulum. Praesent elementum facilisis leo vel fringilla. Varius sit amet mattis vulputate enim nulla aliquet. Arcu non sodales neque sodales. Sed arcu non odio euismod. In nisl nisi scelerisque eu.

Velit laoreet id donec ultrices. Neque gravida in fermentum et sollicitudin ac. Et pharetra pharetra massa massa ultricies. Orci sagittis eu volutpat odio facilisis mauris sit amet. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Tellus orci ac auctor augue. Posuere sollicitudin aliquam ultrices sagittis orci a. Diam volutpat commodo sed egestas. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Blandit cursus risus at ultrices mi.`;
function wordCount() {
  return longText.split(" ").length;
}

let counter = 0;

for (i = 0; i < longText.split(" ").length; i++) {
  if (longText.split(" ")[i] == "et") {
    counter += 1;
  }
}

console.log(wordCount());
console.log(counter);
