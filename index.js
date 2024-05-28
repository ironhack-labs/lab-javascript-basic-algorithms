// Iteration 1: Names and Input
const hacker1 = "Mirko";
const hacker2 = "Partner";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

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
    `Wow, you both have equally long names, ${hacker1.length} characters!.`
  );
}

// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
const hacker1Mod = hacker1.toUpperCase().split("").join(" ");
console.log(hacker1Mod);

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
let hacker2Mod = "";
for (let i = hacker2.length - 1; i >= 0; i -= 1) {
  hacker2Mod += hacker2[i];
}
console.log(hacker2Mod);

// 3.3 Depending on the lexicographic order of the strings, print:
// The driver's name goes first.
// Yo, the navigator goes first, definitely.
// What?! You both have the same name?

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus commodo tortor, tempor lacinia libero iaculis sed. Nam pellentesque maximus auctor. Etiam massa nunc, blandit ut ullamcorper nec, tincidunt vitae dui. Nullam malesuada nec nunc vel faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam mollis dignissim ornare. In eros tellus, blandit quis ante at, blandit egestas diam. Sed in urna aliquam, consectetur felis vitae, rutrum massa.

Donec accumsan mi at ligula eleifend facilisis. Nulla et arcu a ante consectetur tincidunt. Mauris consequat, nisl vitae eleifend sodales, mi tellus fringilla mi, sit amet consectetur enim nisi eu justo. Aenean elit eros, euismod non leo pellentesque, egestas vehicula felis. Nam aliquet maximus nisi vel ornare. Curabitur laoreet scelerisque facilisis. Integer ornare, neque id tincidunt consectetur, mauris ex hendrerit mi, vitae vulputate nulla elit sit amet dui. Etiam blandit porta eros et sodales. Nulla a ornare ex. Etiam viverra arcu ut lorem lacinia, sit amet auctor libero elementum. Etiam malesuada ligula felis. Etiam cursus ultricies purus, non hendrerit est fermentum eget. Integer et sapien sollicitudin, suscipit urna non, cursus elit.

Nunc id sagittis dolor, at efficitur felis. Praesent vitae gravida libero, ut feugiat nulla. Curabitur maximus velit eget sodales semper. Fusce sit amet eros at nulla molestie euismod. Phasellus et turpis vitae enim iaculis commodo. Aliquam interdum luctus nibh, eu scelerisque ex. Vestibulum hendrerit risus vitae sem euismod, eget condimentum urna tempus.`;

// Make your program count the number of words in the string.
const wordsArr = longText.split(/[\s\n]+/);
const wordsCount = wordsArr.length;
console.log(wordsCount);
// Make your program count the number of times the Latin word et appears.
let count = 0;

for (let i = 0; i < longText.length; i += 1) {
  let currentChars = longText[i] + longText[i + 1];
  if (currentChars === "et") {
    count += 1;
  }
}

const countNew = longText.match(/et/g);

console.log(count);
console.log(countNew.length);
// Bonus2

const phraseToCheck = "step on no pets";
const forwardPhrase = phraseToCheck.toLowerCase().split("").join();
const reversedPhrase = phraseToCheck.toLowerCase().split("").reverse().join();

if (forwardPhrase === reversedPhrase) {
  console.log(true);
} else {
  console.log(false);
}
