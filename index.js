// Iteration 1: Names and Input
const hacker1 = "Mass";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Fuer";
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
let uppername = "";
for (let i = 0; i < hacker1.length; i++) {
  uppername += hacker1[i].toUpperCase() + (i < hacker1.length - 1 ? " " : "");
}
console.log(uppername);

let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1:
const smallText = "Lorem ipsum dolor";
const longText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt blandit fermentum.
Curabitur rutrum mauris sed venenatis tristique. Nullam eget magna dui. Proin at blandit orci.
Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin vitae tristique mauris,
eu semper orci. Proin nisl ante, tincidunt ac nunc id, venenatis pretium ligula.
Duis non orci ultrices, auctor lectus a, scelerisque urna. Pellentesque vel sodales quam.
Nam accumsan ligula sit amet dui consectetur facilisis. Maecenas lobortis pellentesque elit in viverra.
Duis sed risus commodo, mollis nisl dictum, porta orci. Ut consectetur porta justo, eget condimentum
neque dignissim ac. Duis et sapien volutpat elit mollis porttitor. Quisque maximus tortor id ipsum maximus,
accumsan accumsan est pretium. Phasellus egestas, velit sed bibendum maximus, neque ligula elementum enim, quis hendrerit diam lectus eu quam. Aliquam ullamcorper vel diam ut congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed at lectus est. Phasellus at fringilla lacus. Aliquam nec tellus viverra, eleifend erat sit amet, convallis ante. Nunc id mauris sit amet ex mollis semper at ut diam.
Proin ultricies efficitur laoreet. Nulla sed finibus mi. Aliquam feugiat consequat congue.
Nulla eu augue sit amet purus rhoncus finibus sed nec felis. Curabitur eleifend arcu ut sem fermentum,
et blandit mauris fringilla. Fusce quis nulla purus. Duis dui urna, porta et ligula et, pharetra convallis
ex. Aliquam elit urna, egestas quis justo eget, congue scelerisque nisl. Nunc nec sapien nibh.
Sed vitae euismod ex.`;

let count = 0;
for (i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    count++;
  }
}
console.log(`another solution is ${count} words length`);

const numWordsSmallText = smallText.match(/\b\w+\b/g);
console.log(numWordsSmallText.length);
const numWordsLongText = longText.match(/\b\w+\b/g);
console.log(numWordsLongText.length);

let numEt = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i]) {
    if (longText[i] + longText[i + 1] === "et") {
      numEt++;
    }
  }
}
console.log(`Number of "et" in the sentence : ${numEt}`);

let numEt2 = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i]) {
    if (longText.substring(i, i + 4) === " et ") {
      numEt2++;
    }
  }
}
console.log(`[another try] Number of "et" in the sentence : ${numEt}`);

// Bonus 2:
const phraseToCheck = [
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

// for (let i = 0; i < phraseToCheck.length; i++) {
//   const cleanedPhrase = phraseToCheck[i]
//     .toLowerCase()
//     .replace(",", "")
//     .replace("!", "")
//     .replace(" ", "")
//     .replace("'", "")
//     .replace("?", "")
//     .replace("-", "");
//   console.log(cleanedPhrase);
// }
for (let i = 0; i < phraseToCheck.length; i++) {
  const cleanedPhrase = phraseToCheck[i]
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
  console.log(cleanedPhrase);

  const cleanedPhraseLength = cleanedPhrase.length;
  for (let j = 0; j < cleanedPhraseLength; j++) {
    if (cleanedPhrase[j] !== cleanedPhrase[cleanedPhraseLength - 1 - j]) {
      console.log(`"${phraseToCheck[i]}" is not a palindrome.`);
    } else {
      console.log(`"${phraseToCheck[i]}" is a palindrome.`);
    }
  }
}
