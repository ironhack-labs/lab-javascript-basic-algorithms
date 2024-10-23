// Iteration 1: Names and Input

const hacker1 = "Fabien";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Edvi";

console.log(`The navigator name is ${hacker2}`);
// Iteration 2: Conditionals

if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
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

let finalName = '';

for (let i = 0; i < hacker1.length; i++) {
  if (i !== 0) {
    finalName += " " + hacker1[i].toUpperCase();
  } else {
    finalName += hacker1[i].toUpperCase();
  }
}

console.log(finalName);


// Iteration 3.2

let finalNameReversed = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  finalNameReversed += hacker1[i];
}

console.log(finalNameReversed);

// Iteration 3.3 : Print in the lexicographic order


if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");

}

// Bonus 1
let wordCount = 1;

let etCount = 0;

const paragraph = `Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus nisi ut tincidunt aliquam. Etiam efficitur dignissim pretium. Sed vitae metus ultricies, mattis ex id, ultrices quam. Mauris non hendrerit nunc. Etiam tincidunt, orci in dignissim maximus, tellus libero pulvinar urna, vel semper arcu tortor at neque. Ut nisi augue, vestibulum quis efficitur vitae, maximus a diam. Morbi accumsan nisi tortor, ut vulputate metus maximus id. Proin et efficitur quam.

Cras porttitor interdum arcu vitae mattis. Nulla porttitor sem vitae sollicitudin efficitur. Nullam vehicula ex quis commodo auctor. Ut quis imperdiet neque. Proin in molestie metus. Curabitur ultrices tempus mi vitae luctus. Mauris consequat a leo commodo venenatis. Mauris non condimentum nisl, et facilisis dui. Etiam varius faucibus lorem, vitae ullamcorper mi tempor sed. Phasellus tincidunt id dolor vitae ullamcorper. Nulla orci est, cursus vitae lacus eget, aliquam semper elit. Integer sed eros in sem lacinia convallis. Donec erat urna, ultrices ut purus feugiat, maximus bibendum elit. Donec eu ante interdum, tempus lacus eget, eleifend risus. Mauris in massa vitae ligula ornare rutrum. Curabitur non purus tristique, blandit tortor non, cursus mi.

Sed sit amet commodo ex. Fusce venenatis, dolor et facilisis vestibulum, ante elit imperdiet enim, vitae vulputate ligula orci in libero. Cras id nisl vel enim rhoncus volutpat quis ac quam. Vivamus diam justo, eleifend non dui eu, finibus ultricies nunc. Ut congue sodales dolor, ac ullamcorper nulla volutpat et. Aenean vel dignissim ex. Pellentesque eget erat dapibus, consequat risus id, varius quam.";`

if (paragraph === "") {
  wordCount = 0;
} else {
  for (let i = 0; i < paragraph.length; i++) {
    if (paragraph[i] === " ") {
      wordCount++;
    }
    if (
      paragraph[i - 1] === " " &&
      paragraph[i] === "e" &&
      paragraph[i + 1] === "t" &&
      (paragraph[i + 2] === " " || paragraph[i + 2] === ".")
    ) {
      etCount++;
    }
  }
}
console.log(wordCount);
console.log(etCount);


//Bonus 2:

let phraseToCheck = "Amor, Roma";

phraseToCheck = phraseToCheck.toLowerCase();

let prereversedPhrase = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  if (
    phraseToCheck[i] === " " ||
    phraseToCheck[i] === "," ||
    phraseToCheck[i] === "!" ||
    phraseToCheck[i] === "?" ||
    phraseToCheck[i] === "'" ||
    phraseToCheck[i] === "."
  ) {
    continue;
  } else {
    prereversedPhrase += phraseToCheck[i];
  }
}

let reversedPhrase = "";

for (let i = prereversedPhrase.length - 1; i >= 0; i--) {
  reversedPhrase += prereversedPhrase[i];
}

if (prereversedPhrase === reversedPhrase) {
  console.log(`${phraseToCheck}: It's a palindrome!`);
} else {
  console.log(`${phraseToCheck}: Not a palindrome!`);
}

/// Bonus 2 with the use of a function

function testPalindrome(phraseToCheck) {
  phraseToCheck = phraseToCheck.toLowerCase();

  let prereversedPhrase = "";

  for (let i = 0; i < phraseToCheck.length; i++) {
    if (
      phraseToCheck[i] === " " ||
      phraseToCheck[i] === "," ||
      phraseToCheck[i] === "!" ||
      phraseToCheck[i] === "?" ||
      phraseToCheck[i] === "'" ||
      phraseToCheck[i] === "."
    ) {
      continue;
    } else {
      prereversedPhrase += phraseToCheck[i];
    }
  }

  let reversedPhrase = "";

  for (let i = prereversedPhrase.length - 1; i >= 0; i--) {
    reversedPhrase += prereversedPhrase[i];
  }

  if (prereversedPhrase === reversedPhrase) {
    console.log(`${phraseToCheck}: It's a palindrome!`);
  } else {
    console.log(`${phraseToCheck}: Not a palindrome!`);
  }
}

testPalindrome("A man, a plan, a canal, Panama!");
testPalindrome("Amor, Roma");
testPalindrome("race car");
testPalindrome("stack cats");
testPalindrome("step on no pets");
testPalindrome("taco cat");
testPalindrome("put it up");
testPalindrome("Was it a car or a cat I saw?");
testPalindrome("No 'x' in Nixon");
