// Iteration 1 : Names and Input
let hacker1 = "John";
console.log("The driver's name is " + hacker1);

let hacker2 = "John";
console.log("The navigator's name is " + hacker2);

// Iteration 2 : Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters."
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + " characters!"
  );
}

// Iteration 3 : Loops
// 3.1
let resultUpper = "";

for (let i = 0; i < hacker1.length; i++) {
  resultUpper += hacker1.charAt(i).toUpperCase();

  if (i < hacker1.length - 1) {
    resultUpper += " ";
  }
}

console.log(resultUpper);

// 3.2
let resultRevert = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  resultRevert += hacker2[i];
}
console.log(resultRevert);

// 3.3
let lengthComparaison =
  hacker1.length < hacker2.length ? hacker1.length : hacker2.length;

let compareResult = "What?! You both have the same name?";

for (let i = 0; i < lengthComparaison; i++) {
  if (hacker1[i] < hacker2[i]) {
    compareResult = "The driver's name goes first.";
    break;
  }

  if (hacker1[i] > hacker2[i]) {
    compareResult = "Yo, the navigator goes first, definitely.";
    break;
  }
}

console.log(compareResult);

// Bonus 1
let longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet diam nec magna feugiat tempus. Sed venenatis gravida mi ac imperdiet. Aenean ut augue et ante suscipit tristique a ac nulla. Integer ultrices sem eu nibh placerat, sed eleifend purus auctor. Sed rutrum non ex vitae pretium. Nam sodales tincidunt massa, in porta nunc placerat nec. In pulvinar a erat quis vehicula. In et fringilla dui, nec malesuada nibh. Mauris sit amet rhoncus nisi. Pellentesque ut convallis ex, vel tincidunt eros.Donec fermentum tempus dolor sed blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce porttitor vitae enim ac posuere. Nam vel pulvinar diam, ut rhoncus eros. Maecenas tristique faucibus fringilla. Nulla molestie sed nibh et aliquam. Donec tempor posuere purus, ut sodales tellus. Aliquam tincidunt diam tortor, nec facilisis orci tempus quis. Vivamus sagittis, mi sit amet consequat pharetra, eros erat sagittis libero, ac scelerisque massa nulla ut ex. Vivamus porttitor ultrices ipsum et rutrum. Cras aliquam est et nisl pellentesque pellentesque. Pellentesque eget turpis placerat, finibus sapien et, sollicitudin nulla. Suspendisse sapien dui, tincidunt at venenatis sed, pharetra ut eros.Fusce aliquet vehicula nunc cursus suscipit. Suspendisse dictum, nunc in accumsan facilisis, velit lacus tempus nisi, at dignissim nisi est eget lectus. Nulla feugiat euismod risus vel maximus. Curabitur augue ligula, semper id augue at, euismod ornare diam. Quisque tincidunt lobortis congue. Praesent molestie ante a fringilla vestibulum. Suspendisse nisl sapien, condimentum eget molestie ac, commodo et lacus. Maecenas volutpat leo nulla, a congue felis blandit ac. Phasellus mollis condimentum odio et fermentum. Ut tristique justo eu hendrerit rutrum.";

let countWords = 0;

if (longText.length > 0) {
  countWords++;

  for (let i = 0; i < longText.length; i++) {
    if (longText[i] === " ") {
      countWords++;
    }
  }
}

console.log("The text has " + countWords + " words.");

let countWordsEt = 0;

if (longText.length > 0) {
  for (let i = 0; i < longText.length; i++) {
    if (longText.slice(i, i + 4).toLowerCase() === " et ") {
      countWordsEt++;
    }
  }
}

console.log("The text contains the word 'et' " + countWordsEt + " times");

// Bonus 2
let phraseToCheck = "No 'x' in Nixon";
let isPalindrome = true;

let indexBegin = 0;
let indexEnd = phraseToCheck.length - 1;

while (isPalindrome && indexBegin < phraseToCheck.length && indexEnd >= 0) {
  while (
    indexBegin < phraseToCheck.length &&
    !(
      phraseToCheck[indexBegin].toLowerCase() >= "a" &&
      phraseToCheck[indexBegin].toLowerCase() <= "z"
    )
  ) {
    indexBegin++;
  }

  while (
    indexBegin >= 0 &&
    !(
      phraseToCheck[indexEnd].toLowerCase() >= "a" &&
      phraseToCheck[indexEnd].toLowerCase() <= "z"
    )
  ) {
    indexEnd--;
  }

  if (
    phraseToCheck[indexBegin].toLowerCase() !==
      phraseToCheck[indexEnd].toLowerCase() ||
    indexBegin >= phraseToCheck.length ||
    indexEnd < 0
  ) {
    isPalindrome = false;
  }

  indexBegin++;
  indexEnd--;
}

isPalindrome
  ? console.log("'" + phraseToCheck + "' is a palindrome")
  : console.log("'" + phraseToCheck + "' is not a palindrome");
