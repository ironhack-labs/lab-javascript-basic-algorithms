// Iteration 1: Names and Input
const hacker1 = "lucas";
console.log("The driver's name is Lucas");
const hacker2 = "dmytro";
console.log("The navigator's name is Dmytro");

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(hacker1, "is bigger");
} else if (hacker2.length > hacker1.length) {
  console.log(hacker2, "is bigger");
} else if (hacker1.length === hacker2.length) {
  console.log("tie");
}

// Iteration 3: Loops
let nameSeparated = ``;
for (let i = 0; i < hacker1.length; i++) {
  nameSeparated += `${hacker1[i].toUpperCase()} `;
}
console.log(nameSeparated);

let nameBackwards = ``;
for (let i = hacker2.length - 1; i >= 0; i--) {
  nameBackwards += hacker2[i];
}
console.log(nameBackwards);

compare1 = hacker2.localeCompare(hacker1);

if (compare1 === 1) {
  console.log("The driver's name goes first");
} else if (compare1 === -1) {
  console.log("Yo, the navigator goes first, definitely");
} else {
  console.log("What?! You both have the same name?");
}

let longText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";

let count = 0;
let etCounter = 0;
for (i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    count++;
  }
  if (longText[i] === "e" && longText[i + 1] === "t") {
    etCounter++;
  }
}
count += 1;
console.log(count, etCounter);

let phraseToCheck = "A man, a plan, a canal, Panama!";
let phraseExcluded = ``;

for (i = 0; i < phraseToCheck.length; i++) {
  if (
    phraseToCheck[i] === "`" ||
    phraseToCheck[i] === "," ||
    phraseToCheck[i] === " " ||
    phraseToCheck[i] === "!"
  ) {
    continue;
  }
  phraseExcluded += phraseToCheck[i].toUpperCase();
}
console.log(phraseExcluded);

let phraseBackwards = ``;

for (i = phraseExcluded.length - 1; i >= 0; i--) {
  phraseBackwards += phraseExcluded[i];
}

if (phraseBackwards === phraseExcluded) {
  console.log("Is palindrome!");
} else {
  console.log("not palindrome :(");
}
