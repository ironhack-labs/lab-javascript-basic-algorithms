// Iteration 1: Names and Input
const hacker1 = "Carlson";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Tommy";
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
let capitalHacker1 = "";
for (let i = 0; i < hacker1.length; i++) {
  capitalHacker1 += hacker1[i].toUpperCase();
  if (i < hacker1.length - 1) {
    capitalHacker1 += " ";
  }
}
console.log(capitalHacker1);

let reversedHacker2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedHacker2 += hacker2[i];
}
console.log(reversedHacker2);

if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

// Bonus 1
const longText =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. ";

let words = longText.split(" ");
console.log(`The text contains ${words.length} words.`);

let etCount = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i].includes("et")) {
    etCount++;
  }
}
console.log(`The word "et" appears ${etCount} times.`);

// Bonus 2
let phraseToCheck = "Was it a car or a cat I saw?";
let cleanedPhrase = phraseToCheck.toLowerCase().replace(/[^a-z]/g, "");
let reversedPhrase = "";
for (i = cleanedPhrase.length - 1; i >= 0; i--) {
  reversedPhrase += cleanedPhrase[i];
}
if (cleanedPhrase === reversedPhrase.toLowerCase()) {
  console.log(`The phrase ${phraseToCheck} is a Palindrome.`);
} else {
  console.log(`The phrase ${phraseToCheck} is not a Palindrome.`);
}
