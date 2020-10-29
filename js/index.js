// Iteration 1
const hacker1 = 'Richard';
const hacker2 = 'Asier';

console.log(`The driver's name is ${hacker1}`);
console.log(`The driver's name is ${hacker2}`);

//Iteration 2
let theShortest;
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  theShortest = hacker2;
  } else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  theShortest = hacker1;
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
    theShortest = hacker2;
  }

// Iteration 3.1
const hacker1UpperCase = hacker1.toUpperCase();
let hacker1Output = "";
for (let character of hacker1UpperCase) {
  hacker1Output += character;
  if (character !== hacker1UpperCase.length -1) {
    hacker1Output += " ";
  }
}

// Iteration 3.2
let hacker2Output = "";
for (i = hacker2.length - 1; i >= 0; i--) {
  hacker2Output += hacker2[i];
}

console.log(hacker1Output);
console.log(hacker2Output);

// Iteration 3.3                       
for (let i = 0; i < theShortest.length; i++) {
  if (hacker1[i].charCodeAt() < hacker2[i].charCodeAt()) {
    console.log("The driver's name goes first.");
    break;
  } else if (hacker1[i].charCodeAt() > hacker2[i].charCodeAt()) {
    console.log("The driver's name goes first.");
    break;
  } else if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
    break;
  }
}

// Bonus 1
const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a porta velit. Mauris quis luctus ex. Donec non lacus ac velit hendrerit tempus. Nunc felis nunc, facilisis quis quam in, venenatis tristique ipsum. Sed molestie hendrerit tortor elementum rutrum. Ut varius dolor ac fermentum vehicula. Maecenas quis magna lobortis lectus ornare faucibus. Proin et fermentum ipsum. In vel auctor felis, eu malesuada elit. Donec vitae erat at quam fringilla fermentum. Aliquam erat volutpat. Morbi non cursus turpis. Suspendisse rutrum sodales justo tincidunt vehicula.\nCras nec molestie sem, et condimentum massa. Aenean ac elit mi. Praesent aliquet venenatis odio, a finibus tellus dictum a. Pellentesque vulputate nisl in finibus bibendum. Vivamus vehicula ligula vitae sodales venenatis. Cras blandit in ipsum eu bibendum. Morbi felis eros, pulvinar a bibendum sed, pellentesque vitae eros.\nMauris ut orci ut eros lobortis lobortis. Nam pellentesque nibh sed porta fringilla. Phasellus dapibus, erat tempus tincidunt pellentesque, felis sem eleifend mauris, vel rhoncus tellus massa et ante. Fusce faucibus ultrices ornare. Donec sed libero laoreet, auctor nulla ut, egestas felis. Duis quis consequat massa. Ut tincidunt semper mi. Praesent mattis ligula id ligula commodo venenatis. In ultrices elit vitae vehicula tincidunt. Ut consequat dignissim leo, ut lacinia risus eleifend id."

// Bonus 1: word counter
const wordCounter = paragraph.split(' ').length;
console.log(`${wordCounter} words`);

// Bonus 1: et counter
const etCounter = paragraph.split(' et ').length - 1;
console.log(`"et" appears ${etCounter} times inside this string.`);

// Bonus 2
const phraseToCheck = "No 'x' in Nixon"
const phraseToCheckLC = phraseToCheck.toLowerCase();
let newPhraseToCheck = "";
for (character of phraseToCheckLC) {
  if (character !== " " &&
      character !== "," &&
      character !== "'" &&
      character !== "!" &&
      character !== "?") {
        newPhraseToCheck += character;
      }
};

let palindromeCounter = 0;
for (let i = 0; i < Math.floor(newPhraseToCheck.length/2); i++) {
  if (newPhraseToCheck[i] === newPhraseToCheck[newPhraseToCheck.length - 1 - i]) {
    palindromeCounter++;
  }
}

if (palindromeCounter === Math.floor(newPhraseToCheck.length/2)) {
  console.log(`"${phraseToCheck}" is a Palindrome`);
} else {
  console.log(`Sorry, but "${phraseToCheck}" is not a Palindrome`);
}