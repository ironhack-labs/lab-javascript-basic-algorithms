// Iteration 1: Names and Input
// 1.1
const hacker1 = "Elie";
// 1.2
console.log(`The driver's name is ${hacker1}`);
// 1.3
const hacker2 = "Angela";
// 1.4
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// 2.1
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
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

// Iteration 3: Loops
// 3.1
let driverCapital = "";

for (let i = 0; i < hacker1.length; i++) {
  const capitalized = hacker1[i].toUpperCase();
  driverCapital += capitalized + " ";
}

console.log(driverCapital);

// 3.2
let navigatorCapital = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  const driver2 = hacker2[i];
  navigatorCapital += driver2;
}
console.log(navigatorCapital);

// 3.3
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1.
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique ullamcorper ex eget dapibus. Sed fringilla pulvinar nibh non sollicitudin. Sed non nisi sollicitudin, iaculis metus id, volutpat lorem. Phasellus fringilla nunc vel nibh porta posuere. Sed eleifend eleifend nisi eu commodo. Vivamus quis dapibus justo, ut rutrum magna. Phasellus placerat leo lorem, a maximus turpis interdum vitae.

Nunc venenatis ex dui, nec viverra velit feugiat ac. In euismod eros nisi, sit amet dignissim felis ultrices eu. Mauris turpis est, finibus ut porttitor ac, iaculis eu metus. Etiam neque velit, tincidunt et suscipit id, dictum vel nisl. Integer at turpis non quam convallis congue. Proin eleifend lectus sit amet erat condimentum, vitae imperdiet augue pellentesque. Ut feugiat malesuada felis eu efficitur. Nunc tristique porttitor vulputate. Nulla placerat feugiat nisl ut fringilla.

Cras varius vulputate magna, et viverra orci vehicula in. Sed ac semper nisl. Ut elementum quis justo sit amet fermentum. Nulla maximus neque lorem, a venenatis lorem porta rutrum. Sed tincidunt vel nunc non feugiat. Praesent semper tristique lacus non dignissim. Aliquam tempus, nulla venenatis gravida pulvinar, ipsum enim fermentum quam, sit amet pulvinar ligula massa quis augue. Pellentesque quam nibh, dignissim nec magna at, pretium volutpat tellus. Nulla vehicula nulla quis laoreet vulputate. Suspendisse enim ligula, ultrices vitae sem vel, pretium molestie justo. Aliquam scelerisque risus magna, in dictum purus hendrerit eu.`;

let wordsArray = longText.split(" ");
console.log(wordsArray.length);

let eTcount = 0;

for (i = 0; i < longText.length; i++) {
  let charCount = longText[i] + longText[i + 1];

  if (charCount === "et") {
    eTcount++;
  }
}

console.log(eTcount);

// Bonus 2.

function isPalindrome(phrase) {
  // We remove non-alphanumeric characters(This includes Spaces, punctuationsn etc) and convert to lowercase because A != a
  let phraseFormatted = phrase.replace(/[^A-Za-z0-9]/g, "").toLowerCase(); //

  //We reverse the phrase
  let reversedPhrase = "";
  for (let i = phraseFormatted.length - 1; i >= 0; i--) {
    const reverse = phraseFormatted[i];
    reversedPhrase += reverse;
  }

  // We check if the phrase is a palindrome
  if (phraseFormatted === reversedPhrase) {
    console.log(`"${phrase}" is a palindrome.`);
  } else {
    console.log(`"${phrase}" is not a palindrome.`);
  }
}

const phraseToCheck = isPalindrome("stack cats");
console.log(phraseToCheck);
