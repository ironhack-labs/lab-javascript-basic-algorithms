// // Iteration 1: Names and Input

const hacker1 = "Alex";
const hacker2 = "Rafael";

console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

const hacker1Characters = hacker1.length;
const hacker2Characters = hacker2.length;

if (hacker1Characters > hacker2Characters) {

    console.log(`The driver has the longest name, it has ${hacker1Characters} characters.`);
} else if (hacker1Characters < hacker2Characters) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Characters} characters.`);
} else if (hacker1Characters === hacker2Characters) {
    console.log(`Wow, you both have equally long names, ${hacker2Characters} characters!`);
}

// // Iteration 3: Loops

let hacker1Upper = "";
for (let i = 0; i < hacker1Characters; i++){
  hacker1Upper +=  hacker1[i].toUpperCase() + " ";
}
console.log(hacker1Upper);

let hacker2Reverse = "";
for (let i = hacker2Characters - 1; i >= 0; i--) {
    hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse);

const string1 = "The driver's name goes first.";
const string2 = "Yo, the navigator goes first, definitely.";
const string3 = "What?! You both have the same name?";

if (string1 > string2 || string1 > string3) {
    console.log(string1);
} else if (string2 > string1 || string2 > string3) {
    console.log(string2);
} else if (string3 > string1 || string3 > string2) {
    console.log(string3);
}

const strings = ["The driver's name goes first.", "Yo, the navigator goes first, definitely.", "What?! You both have the same name?"];

console.log(strings.sort());

// Iteration 4: Bonus 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac hendrerit urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In in est sed ante ornare sollicitudin et non massa. Pellentesque tristique varius lectus non vestibulum. Maecenas sed augue interdum, placerat ipsum vel, rhoncus est. Vestibulum porttitor neque vehicula pretium cursus. Aenean interdum nunc vel lobortis dignissim. Sed at interdum velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ac dictum nulla. Nulla eget massa vel urna iaculis venenatis in et libero. Fusce semper ultrices sem, sit amet cursus dolor euismod at. Vestibulum quis dapibus ante, non molestie dolor. Proin non ipsum enim. Nunc dignissim augue vel tortor interdum, in condimentum tellus tempus. Fusce lacus nisl, interdum at mauris vitae, condimentum maximus metus. Nulla ut libero ac dolor tincidunt aliquet in nec arcu. Phasellus commodo, nulla a malesuada pretium, purus mi ultricies tellus, vel laoreet ipsum purus et risus. Nullam feugiat lorem quis vulputate lobortis. Aliquam erat volutpat. Sed vitae pellentesque urna. Sed scelerisque lectus eros, at sodales massa volutpat ac. Nulla tristique, mi non porta scelerisque, nisi orci sagittis diam, ac auctor nulla orci vel enim."

let counter = 1;

let trimmedText = longText.trim();

if (trimmedText.length > 0) {
    counter = 1;
    for (let i = 0; i < trimmedText.length - 1; i++)
        if (trimmedText[i] === " " && trimmedText[i + 1] !== " ") {
            counter += 1;
        }
}

for (let i = 0; i < longText.length; i++) {
    if (longText[i] === " " && longText[i + 1] !== " ") {
    counter += 1;
    }
}

console.log(counter);

// Should be 197 words

let counterEt = 0;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] === "e" && longText[i + 1] === "t" && longText [i - 1] === " " && longText [i + 2] === " ") {
  counterEt += 1;
  }
}

console.log(counterEt);

// Should be 4

// Iteration 5: Bonus 2

let phraseToCheck = "Cigar? Toss it in a can. It is so tragic.";
let newPhraseA = "";
let newPhraseB = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  if (
    phraseToCheck[i] !== "," &&
    phraseToCheck[i] !== " " &&
    phraseToCheck[i] !== "’" &&
    phraseToCheck[i] !== "." &&
    phraseToCheck[i] !== "!" &&
    phraseToCheck[i] !== "?"
  ) {
    newPhraseA += phraseToCheck[i].toLowerCase();
  }
}

console.log(newPhraseA);

for (let i = newPhraseA.length - 1; i >= 0; i--) {
  if (newPhraseA[i] !== "," && newPhraseA[i] !== " ") {
    newPhraseB += newPhraseA[i].toLowerCase();
  }
}

console.log(newPhraseB);

if (newPhraseA === newPhraseB) {
  console.log("This is a Palindrome.");
} else {
  console.log("This is NOT a Palindrome.");
}

// console.log(newPhraseA, newPhraseB);
