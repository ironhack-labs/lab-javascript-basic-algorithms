// Iteration 1: Names and Input
//1.1
hacker1 = "Pacman";
//1.2
console.log(hacker1);
//1.3
hacker2 = "Cupcake";
//1.4
console.log(hacker2);

// Iteration 2: Conditionals
//2.1
if (hacker1.length == hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
} else if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
}

// Iteration 3: Loops
//3.1
hacker1Spaced = "";
for (value of hacker1) {
  hacker1Spaced += value + " ";
}
hacker1Spaced = hacker1Spaced.slice(0, hacker1Spaced.length - 1); //remove extra space at end
console.log(hacker1Spaced.toUpperCase());

//3.2
hacker2Inversed = "";
for (let i = 0; i <= hacker2.length; i++) {
  hacker2Inversed += hacker2.charAt(hacker2.length - i);
}
console.log(hacker2Inversed);

//3.3
switch (
  hacker1.toUpperCase().localeCompare(hacker2.toUpperCase()) //toUpperCase in both strings to avoid casing errors, ie john!=John
) {
  case 1:
    console.log("Yo, the navigator goes first definitely.");
    break;
  case -1:
    console.log("The driver's name goes first.");
    break;
  default:
    console.log("What?! You both have the same name?");
}

//Bonus 1
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel accumsan erat. Aenean sodales orci massa, nec facilisis tellus venenatis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sapien lacus, rutrum pulvinar tincidunt quis, convallis ac sem. Pellentesque pulvinar, nisl ut egestas eleifend, velit tellus lobortis dui, et molestie libero massa non eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam sit amet massa euismod, efficitur tortor vel, porttitor nunc. Vestibulum ultricies interdum congue. Vestibulum augue erat, accumsan et turpis id, aliquam dignissim nibh. Sed nec rutrum diam, ac elementum dui. Sed sit amet urna mi. Morbi sagittis rutrum leo, at venenatis nisl.

Phasellus posuere, lacus in malesuada sodales, sem diam feugiat odio, sed tincidunt nisi tellus quis est. In dapibus commodo nunc a mattis. Cras id elit nec nisi accumsan laoreet ut non diam. Curabitur facilisis pharetra sem sed ultrices. Suspendisse consectetur mollis purus, at volutpat eros sagittis porta. In sapien tellus, pellentesque a velit in, lacinia dapibus erat. Donec non ultrices nisl. Cras ante tellus, efficitur vitae nisl sed, laoreet fermentum ligula. Sed felis orci, maximus tristique augue sit amet, interdum accumsan urna. Vivamus leo nunc, semper in ornare vitae, tempus at felis. Nullam vel odio elementum, molestie urna et, maximus dolor. Sed consequat eros non nulla efficitur tristique. Aliquam aliquet sapien molestie aliquet luctus. Curabitur sed mi ex.

Mauris lobortis, metus sit amet lacinia congue, dolor leo tincidunt ligula, eget euismod odio nisl et odio. Nulla facilisi. Aenean odio tellus, ultricies ut feugiat a, fringilla pharetra elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean venenatis, sem et pulvinar vestibulum, justo massa aliquam eros, eu semper tellus justo in libero. Cras eget ornare turpis. Phasellus aliquam urna at nunc gravida lobortis.`;

//clean up text to avoid errors: first remove newlines and then double spacing
const textWithoutNewlines = text.replaceAll("\n", " ");
const finalText = textWithoutNewlines.replaceAll("  ", " ");

let wordCount = 1; //starts from 1 to count for the first word
//for loop to find empty spaces which mean the beginning of a new word
for (let i = 0; i < finalText.length; i++) {
  if (finalText[i] === " ") {
    wordCount++;
  }
}
console.log("number of words in the text are: " + wordCount);

let indexHolder = finalText.indexOf("et");
let etCounter = 0;

while (etCounter < finalText.length && indexHolder > 0) {
  if (indexHolder < 0) {
    break;
  } else {
    indexHolder = finalText.indexOf("et", indexHolder + 1);
    etCounter++;
  }
}

console.log("number of 'et's in the text are: " + etCounter);

//Bonus 2
const phraseToCheck = "racecar";
const phraseToCheckFixed = phraseToCheck
  .replace(/[^0-9a-z]/gi, "")
  .toLowerCase(); //removing all non alphabetical characters & lowercasing
let phraseBackwards = "";
for (let i = 0; i <= phraseToCheckFixed.length; i++) {
  //for look to create the same string backwards
  phraseBackwards += phraseToCheckFixed.charAt(phraseToCheckFixed.length - i);
}

if (phraseToCheckFixed === phraseBackwards) {
  //comparing the two strings for Palindromy
  console.log("The string is a Palindrome!");
} else {
  console.log("Not a Palindrome string!");
}
