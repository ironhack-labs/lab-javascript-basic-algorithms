// Iteration 1: Names and Input
var hacker1 = "Abadon";
console.log(`The driver's name is ${hacker1}`);
var hacker2 = "Banifo";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
var hacker1Len = hacker1.length;
var hacker2Len = hacker2.length;
if (hacker1Len > hacker2Len) {
  console.log(
    `The driver has the longest name, it has ${hacker1Len} characters.`
  );
}
if (hacker1Len < hacker2Len) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2Len} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1Len} characters!.`
  );
}
// Iteration 3: Loops
var nameCapitalized = ``;
for (n = 0; n < hacker1Len; n++) {
  var character = hacker1.charAt(n).toUpperCase();
  nameCapitalized += `${character} `;
}
console.log(nameCapitalized);

var nameReversed = ``;
for (n = hacker2Len; n >= 0; n--) {
  var character = hacker2.charAt(n);
  nameReversed += `${character}`;
}
console.log(nameReversed);

var n = 0;
while (n < hacker1Len || n < hacker2Len) {
  if (hacker1.charAt(n) < hacker2.charAt(n)) {
    console.log(`The driver's name goes first.`);
    break;
  }
  if (hacker1.charAt(n) > hacker2.charAt(n)) {
    console.log(`Yo, the navigator goes first, definitely.`);
    break;
  }
  n++;
}
if (n == hacker1Len && n == hacker2Len) {
  console.log(`What?! You both have the same name?`);
}

// Bonus 1
const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut pellentesque sem. Nunc laoreet hendrerit neque, eget mollis diam feugiat ut. Pellentesque eget placerat ligula. Aenean efficitur ut turpis et viverra. Nullam pulvinar turpis at dui commodo luctus. Aenean arcu lorem, tincidunt vitae tellus sit amet, pulvinar efficitur magna. Aenean vulputate ipsum quis feugiat dapibus. Nulla eu lectus ac turpis iaculis laoreet ut non odio. Integer facilisis odio in lorem varius luctus. Fusce sollicitudin vulputate urna id condimentum. Aliquam facilisis tempus turpis. Nulla volutpat ultrices ante, id pulvinar felis rutrum eget. Morbi eget rhoncus ex, ac luctus ante. Aenean eget dictum elit, gravida sagittis nisi. Vestibulum lobortis pharetra ante, eget hendrerit magna rhoncus sit amet. Vestibulum placerat arcu vel dolor vestibulum fermentum. Nam pulvinar enim ac orci condimentum, et dignissim augue interdum. Duis elementum consectetur odio, vitae luctus nisl iaculis finibus. In venenatis orci ipsum, quis sollicitudin magna volutpat nec. Donec blandit suscipit lorem quis hendrerit. Vestibulum egestas, urna id porta dictum, ligula tellus tempor augue, non elementum elit purus id lacus. Quisque tempus, magna sit amet commodo viverra, mauris lorem tincidunt metus, ac imperdiet nibh ipsum sed sapien. Maecenas dictum enim sapien, ut consectetur tellus luctus at. Nulla elementum lobortis felis, vitae efficitur erat porta id. Nam eget efficitur justo, sed mollis risus. In eget massa venenatis, lacinia lorem vel, finibus neque. Aenean quis bibendum ex. Maecenas facilisis placerat suscipit. Nunc ac interdum ipsum. Cras eleifend tristique sem in facilisis. Integer pellentesque hendrerit laoreet. Sed ornare tristique erat volutpat semper. Nunc at augue quis velit laoreet lacinia vel sed justo. Aenean at sem finibus, pharetra neque aliquet, fringilla libero. Donec et ex eget tellus tristique suscipit in non ante. Ut fermentum urna ut eleifend tristique.";
let numWords = 0;
let numEt = 0;
let word = "";
for (n = 0; n < longText.length; n++) {
  if (longText.charAt(n) == " ") {
    if (word === " et") {
      numEt++;
    }
    numWords++;
    word = "";
  }
  word += longText.charAt(n);
}
numWords = numWords + 1;
console.log(numWords);
console.log(numEt);

// Bonus 2
const phraseToCheck = "Was it ad car or a cat I saw?";
let phraseNotSpaces = ``;

for (n = phraseToCheck.length; n >= 0; n--) {
  if (/[a-zA-Z]/.test(phraseToCheck.charAt(n))) {
    phraseNotSpaces += phraseToCheck.charAt(n).toLowerCase();
  }
}
var lastCharacter = phraseNotSpaces.length - 1;
var firstCharacter = 0;
var isPalindrome = true;
while (firstCharacter < lastCharacter) {
  if (
    phraseNotSpaces.charAt(firstCharacter) ==
    phraseNotSpaces.charAt(lastCharacter)
  ) {
    isPalindrome = true;
  } else {
    isPalindrome = false;
  }
  lastCharacter--;
  firstCharacter++;
}
if (isPalindrome) {
  console.log(phraseToCheck + " IS A PALINDROME!");
} else {
  console.log(phraseToCheck + " IS NOT A PALINDROME!");
}
