// Iteration 1: Names and Input
const hacker1 = "Jackson";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Angelina";
console.log(`The driver's name is ${hacker2}`);

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
let spaceSeparetedName = "";
for (let i = 0; i < hacker1.length; i++) {
  spaceSeparetedName += `${hacker1[i].toUpperCase()} `;
}

console.log(spaceSeparetedName);

// 3.2
let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}

console.log(reversedName);

// 3.3
const hackerNames = [hacker1, hacker2];
//hackerNames.sort((a, b) => a > b);
console.log(hackerNames.sort());

if (hackerNames[0] == hacker1) {
  console.log("The driver's name goes first.");
} else if (hackerNames[0] == hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus Time
// Bonus 1

// word count
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam felis at lorem aliquam, in ullamcorper ante vehicula. Curabitur dapibus pharetra quam eu convallis. Aenean consectetur fringilla ipsum, non scelerisque felis lacinia pretium. Donec suscipit dignissim pretium. Etiam accumsan dictum lorem, non lacinia lectus luctus vel. Donec sed fermentum nulla. Sed ac ex eget ante condimentum convallis sed facilisis lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus posuere mauris eu malesuada tincidunt. Sed ac placerat magna, vel semper diam. Aliquam et volutpat ex. In efficitur viverra lectus, ac tincidunt nulla posuere vel.

Maecenas tortor lacus, imperdiet ac suscipit ac, imperdiet at quam. Nulla vel risus nec orci congue ullamcorper. Phasellus dignissim lacus et turpis faucibus pharetra. Vestibulum eleifend, nibh sit amet lacinia pulvinar, sapien dui tempor lectus, eget commodo nibh augue sed nunc. Nam congue, ante in dictum bibendum, augue mi venenatis magna, ut auctor elit ex eu justo. Etiam fermentum accumsan elementum. Phasellus elit augue, convallis ac mauris et, dignissim pretium arcu. Sed eu varius nulla, at luctus mi. Vestibulum rutrum sodales aliquam.

Maecenas quis pretium ipsum. Nullam vel sapien vel nunc faucibus imperdiet nec quis tellus. Donec maximus ligula vitae velit porttitor, eu bibendum nulla iaculis. Aliquam varius sodales ligula eget aliquet. Nullam lacinia molestie hendrerit. Maecenas rutrum volutpat libero, id eleifend nibh malesuada a. Cras finibus et diam a euismod. Ut eu tortor non lorem viverra venenatis. Nullam ac magna et justo tempor vestibulum quis a lacus. Sed mauris sapien, ullamcorper a orci euismod, scelerisque laoreet massa. Mauris tempor finibus sollicitudin.`;

function WordCount(str) {
  return str.split(/\s+/).length;
}

console.log(`word count: ${WordCount(longText)}`);

// "et" count
let etCount = 0;
for (let i = 0; i < longText.length; i++) {
  const twoChars = longText[i] + longText[i + 1];
  if (twoChars === "et") {
    etCount++;
  }
}

console.log(`"et" count: ${etCount}`);

// Bonus 2

const phraseToCheck = [
  "race car",
  "stack cats",
  "random text",
  "step on no pets",
  "never ever",
  "cherry picking",
  "taco cat",
  "put it up",
];

//console.log(phraseToCheck[0].replace(/\s+/g, ""));

function reversePhrase(phrase) {
  let reveresedPhrase = "";
  for (let i = phrase.length - 1; i >= 0; i--) {
    reveresedPhrase += phrase[i];
  }
  return reveresedPhrase;
}

//console.log(reversePhrase(phraseToCheck[2]));

for (let i = 0; i < phraseToCheck.length; i++) {
  if (
    phraseToCheck[i].replace(/\s+/g, "") ===
    reversePhrase(phraseToCheck[i].replace(/\s+/g, ""))
  ) {
    console.log(`${phraseToCheck[i]} is a Palindrome.`);
  } else {
    console.log(`${phraseToCheck[i]} is NOT a Palindrome.`);
  }
}
