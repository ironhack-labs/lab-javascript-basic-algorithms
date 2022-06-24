// Iteration 1: Names and Input
console.log("");
console.log("Iteration 1️⃣ : Names and Input");
console.log("");
let hacker1 = "driversName";
let hacker2 = "navigatorsName";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
//
// Iteration 2: Conditionals
console.log("");
console.log("Iteration 2️⃣ : Conditionals");
console.log("---------------------------");

if (hacker2.length === hacker1.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker2.length < hacker1.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
}
//
// Iteration 3: Loops
console.log("");
console.log("Iteration 3️⃣ : Loops");
console.log("--------------------");

let letterSpacedName = "";
for (let letter of hacker1) {
  letterSpacedName += `${letter.toUpperCase()} `;
}
console.log(letterSpacedName);

let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);

if (hacker1.localeCompare(hacker2) === 0) {
  console.log("What?! You both have the same name?");
} else if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else {
  console.log("Yo, the navigator goes first definitely.");
}

//Bonus
console.log("");
console.log("Bonus 1️⃣");
console.log("--------------------");

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec interdum lacus. Suspendisse aliquam molestie enim ut molestie. Quisque eros erat, interdum eget pretium nec, placerat eget leo. Praesent volutpat sed ligula et mollis. Pellentesque sit amet neque odio. Duis volutpat nibh vel varius gravida. Etiam tincidunt, elit id feugiat cursus, odio lectus finibus purus, in sollicitudin sapien orci suscipit dolor. Nullam gravida dignissim varius. Maecenas malesuada vulputate justo, id varius risus luctus sit amet. In eget faucibus nulla. Nullam sed rutrum mi.

Integer imperdiet lobortis iaculis. Aenean ultricies, justo in interdum pretium, ligula eros vulputate odio, vitae consectetur lacus urna ut enim. Nulla faucibus vel quam a facilisis. Etiam congue diam ex. Vestibulum mattis tincidunt erat pulvinar tincidunt. Aenean pellentesque nisi at porta volutpat. Maecenas pulvinar nec enim in porta. Nulla facilisis arcu mollis dolor molestie, vel auctor elit tempor. Mauris ultricies blandit arcu ac congue. Nam facilisis gravida risus non commodo. Nullam venenatis felis nec sem molestie, vitae facilisis massa facilisis. Quisque ut justo ultricies, bibendum nunc non, posuere odio. Praesent quis magna ac sapien eleifend malesuada. Sed nec leo et lacus fermentum pulvinar fermentum consectetur magna. Cras malesuada, ipsum a porttitor lobortis, dui ligula egestas mauris, et faucibus diam arcu eu neque. Vestibulum a hendrerit nulla, placerat ornare lectus.

Ut in ex volutpat, pellentesque


arcu id, tempus ex.   
 
  


Duis ac dapibus metus. Suspendisse semper ligula sed turpis laoreet rhoncus. Nunc quis lectus dictum, maximus ex a, dapibus augue. Phasellus volutpat tincidunt leo, at imperdiet metus pulvinar eget. Nam ac ligula ac tellus maximus sollicitudin non sit amet ex. Phasellus venenatis ligula rhoncus diam placerat elementum.`;

let wordCounter = 1;
for (let i = 1; i < paragraph.length - 1; i++) {
  let isSigleLineBreak = paragraph[i] === "\n";
  let isASingleSpace = paragraph[i] === " ";

  let isPrecededByALineBreak = paragraph[i - 1] === "\n";
  let isPrecedByASpace = paragraph[i - 1] === " ";

  if (
    (isASingleSpace && !isPrecedByASpace && !isPrecededByALineBreak) ||
    (isSigleLineBreak && !isPrecededByALineBreak && !isPrecedByASpace)
  ) {
    wordCounter++;
  }
}
console.log(`Word counter: ${wordCounter}`);

//Make your program count the number of times the Latin word et appears.
let etCounter = 0;
for (let i = 2; i < paragraph.length - 2; i++) {
  if (
    paragraph[i - 2] === " " &&
    paragraph[i - 1] === "e" &&
    paragraph[i] === "t" &&
    paragraph[i + 1] === " "
  ) {
    etCounter++;
  }
}
console.log(`Number of word 'et' appearances: ${etCounter}`);

console.log("");
console.log("Bonus 2️⃣");
console.log("--------------------");

const phraseToCheck = "A man, a plan, a canal, Panama!";
// const phraseToCheck = "Amor, Roma";
// const phraseToCheck = "race car";
// const phraseToCheck = "stack cats";
// const phraseToCheck = "step on no pets";
// const phraseToCheck = "taco cat";
// const phraseToCheck = "put it up";
// const phraseToCheck = "Was it a car or a cat I saw?";
// const phraseToCheck = "No 'x' in Nixon";

// first normalize the string to remove special chars and converting the whole string to lowercase
let normalizedString = "";
for (let character of phraseToCheck) {
  let isALetter = character.toUpperCase() != character.toLowerCase();
  if (isALetter) {
    normalizedString += character.toLowerCase();
  }
}

//Compare first char with last, second char with second last, etc.. If all match, is a Palindrome
let isPalindrome = true;
for (let i = 0; i < normalizedString.length / 2; i++) {
  let begginingChar = normalizedString[i];
  let lastingChar = normalizedString[normalizedString.length - i - 1];
  if (begginingChar !== lastingChar) {
    isPalindrome = false;
    break;
  }
}
let sentenceToPrint = `The phrase: '${phraseToCheck}'`;
if (isPalindrome) {
  sentenceToPrint += ` is a palindrome ✅`;
} else {
  sentenceToPrint += ` is NOT a palindrome ❌`;
}
console.log(sentenceToPrint);
console.log("");
