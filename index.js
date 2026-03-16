// Iteration 1: Names and Input
let hacker1 = "Julian";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Andre";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let nameLength = 0;

if (hacker1.length > hacker2.length) {
  nameLength = hacker1.length;
  console.log(
    `The driver has the longest name, it has ${nameLength} characters`,
  );
} else if (hacker1.length < hacker2.length) {
  nameLength = hacker2.length;
  console.log(
    `It seems that the navigator has the longest name, it has ${nameLength} characters.`,
  );
} else {
  nameLength = hacker1.length;
  console.log(
    `Wow, you both have equally long names, ${nameLength} characters.`,
  );
}

// Iteration 3: Loops
// 3.1
let spaceHacker1 = "";

for (let i = 0; i < hacker1.length; i++) {
  spaceHacker1 += hacker1[i].toUpperCase();
  if (i < hacker1.length - 1) {
    spaceHacker1 += " ";
  }
}

console.log(spaceHacker1);

// 3.2
let reverseName = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  reverseName += hacker1[i];
}

console.log(reverseName);

// 3.3
const sortedHackers = [hacker1, hacker2].sort();
// console.log(sortedHackers)

if (hacker1[1] === hacker2[1]) {
  console.log("What?! You both have the same name?");
} else if (sortedHackers[0] === hacker1) {
  console.log("The driver's name goes first.");
} else if (sortedHackers[0] === hacker2) {
  console.log("Yo, the navigator goes first, definitely");
}

// Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et erat nisi. Nunc tempus ex felis, nec condimentum lectus rhoncus tincidunt. Sed luctus tristique lectus, nec eleifend purus convallis eu. Maecenas a erat sit amet neque vestibulum maximus. Sed pulvinar orci eu purus fermentum, ut dapibus diam hendrerit. Proin pharetra lobortis rutrum. Praesent quis euismod dolor. In in aliquet erat, sit amet scelerisque arcu. Maecenas luctus volutpat leo vel aliquet. Sed ac magna at urna feugiat consequat in eu lorem. Nam tellus metus, porttitor id mauris dictum, mollis interdum enim. Nulla volutpat porta velit, sit amet pellentesque sapien venenatis vitae. Nunc vitae turpis sit amet ligula venenatis accumsan.

Phasellus rutrum, enim et eget malesuada mollis et, enim dolor sodales massa, vel aliquam dui elit venenatis libero. Proin rutrum imperdiet orci, id congue sapien pulvinar commodo. Nam a ultricies dolor, eu ultricies felis. Sed ac placerat ex, vitae porttitor felis. Etiam ullamcorper tincidunt rhoncus. Cras ac dapibus purus. Suspendisse quis lacus turpis. Curabitur sodales tellus ut consectetur bibendum. Vestibulum tempor gravida sagittis. Donec cursus arcu quis justo laoreet porttitor. Vivamus non ante semper est rutrum tincidunt nec vitae sapien. Aenean vitae ligula non nibh volutpat feugiat. Maecenas ac mi eu orci facilisis sagittis. Pellentesque vehicula laoreet mi, ut luctus quam consectetur vitae. Mauris vitae porttitor ex.

Pellentesque venenatis arcu in pellentesque porttitor. In viverra neque nulla, vitae aliquam nunc tincidunt a. Nullam fermentum nisi at feugiat pretium. Donec fringilla neque lorem, vitae dictum nibh ornare sit amet. Praesent vulputate sapien sit amet felis posuere eleifend quis vitae tellus. Sed sodales libero non nulla tempor, a dictum est pulvinar. Morbi ac tellus hendrerit, dapibus augue in, mollis nisl. Cras lacinia purus vitae lacus lacinia dictum. Integer pharetra nulla ut suscipit varius.`;

const longTextArr = longText.split(" ");
console.log(longTextArr.length);

let etCounter = 0;

for (let i = 0; i < longTextArr.length; i++) {
  let testWord = longTextArr[i].replace(".", "");
  testWord = testWord.replace(",", "");

  if (testWord.toLowerCase() === "et") {
    etCounter += 1;
    console.log(testWord);
  }
}

console.log(etCounter);

/* Idea, not using split()
let wordCounter = 1;
let etCounter = 0;

for (let i = 0; i < longText.length; i++){
    if (longText[i] === " "){
        wordCounter += 1;
    }

}

console.log(wordCounter)
*/

// Bonus 2
/*
Step 1: Make phrase lowecase & remove empty spaces and symbols
Step 2: Reverse phrase into a new variable
step 3: Compare phrase with variable
*/

let phraseToCheck = "A man, a plan, a canal, Panama!";

const phraseLower = phraseToCheck.toLowerCase;

let stringCut = "";
for (let char of phraseLower) {
  if (char !== " " && char !== "!" && char !== "," && char !== "?" && char !== ".")
    stringCut += char;
}
console.log(stringCut);

let reversedStringCut = "";
for (let i = stringCut.length - 1; i >= 0; i--) {
  reversedStringCut += stringCut[1];
}
console.log(reversedStringCut);
if (reversedStringCut === stringCut) {
  console.log("this is a palindrome phrase");
} else {
  console.log("this is not a palindrome phrase");
}
