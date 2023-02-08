console.log("I'm ready");

// Iteration 1: Names and Input
const hacker1 = "Peter";

console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Jackson";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  `Wow, you both have equally long names, ${hacker1.length} characters!`;
}

// Iteration 3: Loops
for (i = 0; i < hacker1.length; i++) {
  const element = hacker1[i] + "";
  console.log(element.toUpperCase());
}

for (i = hacker2.length; i >= 0; i--) {
  const element2 = hacker2[i];
  console.log(element2);
}

// Bonus 1 - did not manage to get it to work.

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat fermentum erat non condimentum. Aliquam viverra diam lorem, et ultrices felis suscipit ut. Nulla euismod diam eget lectus accumsan, consequat fermentum sem lacinia. Vivamus quis aliquet mi. Sed accumsan massa interdum tellus feugiat elementum. Etiam aliquet consequat placerat. Sed et nibh imperdiet, dignissim tellus ut, aliquam ligula. Integer in felis rhoncus, congue enim eget, mattis eros.";

("Mauris pulvinar id nunc sit amet maximus. Nulla lobortis leo magna, sed aliquet sapien tristique nec. Donec tristique mi urna, in sodales nisi pellentesque ultrices. Cras quis sagittis dolor, ut volutpat ligula. Quisque nec dictum orci. Aenean et purus malesuada, aliquet felis et, sagittis mi. In in semper mi.");

("Nulla aliquet dictum est eu faucibus. Proin nec risus nisl. Phasellus ut est eu quam commodo fermentum a eu diam. Sed eleifend, diam vel rutrum fringilla, sem sem posuere velit, eget porta est leo quis turpis. Ut ornare, mi eu pretium venenatis, nulla mauris maximus lacus, eu feugiat justo dui id dui. In a eleifend sem. Phasellus velit urna, ultrices vel odio a, pretium venenatis tellus. Ut placerat accumsan nibh in tincidunt. Integer bibendum eros quis purus imperdiet tempus.");

let countLongText = 0;

for (i = 0; i < longText.length; i++) {
  const charLongText =
    longText[i] + longText[i] + 1;
  if (charLongText > 2) {
    countLongText++;
  }
}

console.log(countLongText);

// Bonus 2 - QuestionL why does prettier format so weird?

const phraseToCheck = "race car";
const phraseToCheckTrimmed = phraseToCheck
  .split(" ")
  .join("");
console.log(phraseToCheckTrimmed);

function checkPalindrome() {
  let wordToCheck = "";

  for (
    i = phraseToCheckTrimmed.length - 1;
    i >= 0;
    i--
  ) {
    const elementPalindrome =
      phraseToCheckTrimmed[i];
    wordToCheck += elementPalindrome;
    console.log(wordToCheck);
  }
  if (phraseToCheckTrimmed === wordToCheck) {
    console.log(
      `${phraseToCheck} is a Palindrome!`
    );
  } else {
    console.log(
      `${phraseToCheck} is not a Palindrome`
    );
  }
}

checkPalindrome(phraseToCheck);
console.log("test");
