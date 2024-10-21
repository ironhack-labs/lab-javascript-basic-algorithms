// Iteration 1: Names and Input
const hacker1 = "Carlos";
const hacker2 = "Jose";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
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

let reversedHacker1 = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  reversedHacker1 += hacker1[i] += " ";
}

console.log(reversedHacker1.toUpperCase());

let reversedHacker2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedHacker2 += hacker2[i] += ` `;
}

console.log(reversedHacker2);

if (hacker1[0] < hacker2[0]) {
  console.log("The driver's name goes first.");
} else if (hacker1[0] > hacker2[0]) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1:

longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?";

console.log(longText.length);

let wordCount = 0;
let etAppears = 0;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    wordCount++;
  } else if (longText[i] === "e" && longText[i + 1] == "t") {
    etAppears++;
  }
}

console.log(wordCount);
console.log(etAppears);

// Bonus 2:

let phraseToCheck = "step on no pets";
let reversedPhrase = "";

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  reversedPhrase += phraseToCheck[i];
}

if (phraseToCheck == reversedPhrase) {
  console.log("The variable phraseToCheck is a Palindrome");
} else {
  console.log("The variable phraseToCheck is not a Palindrome");
}
