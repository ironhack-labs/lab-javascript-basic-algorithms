// Iteration 1: Names and Input
//

const hacker1 = "Josh";
console.log(`The drivers name is ${hacker1}`);

const hacker2 = "Bernd";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

console.log(
  `The driver has the longest name, it has ${hacker1.length} characters`
);

// Iteration 3: Loops

let inCapitals = "";
let backwardsName = "";

for (let i = 0; i < hacker1.length; i++) {
  inCapitals += `${hacker1[i].toUpperCase()} `;
}
console.log(inCapitals);

for (let i = hacker2.length; i > 0; i--) {
  backwardsName += `${hacker2[i - 1]}`;
}
console.log(backwardsName);

if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
  console.log("The driver's name goes first.");
} else if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name? Crazy...");
}

// Bonus
const lorum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius diam nec vestibulum consectetur. Nulla non nisi rutrum, sodales lectus ut, fringilla tortor. Quisque ipsum ipsum, semper ac ultrices fringilla, aliquam id odio. Vivamus libero justo, euismod eget tempor a, pretium eu tellus. Sed ac vehicula risus. Fusce accumsan facilisis sem non mollis. Phasellus non tempor nulla. Curabitur mollis eleifend odio, eget porta magna sagittis eu. Donec eu magna venenatis, volutpat leo eget, tristique enim. Etiam placerat in nulla nec congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare ex vitae congue aliquam. Suspendisse rhoncus est ut odio ullamcorper aliquet. Praesent sit amet elementum tortor, ut mollis nibh. Integer facilisis condimentum vestibulum. Nulla sit amet vehicula tellus. Suspendisse maximus nulla nibh, ac feugiat odio viverra sit amet. Phasellus id sapien luctus, suscipit dui at, tempus erat. Morbi nec feugiat dui, non accumsan augue. Mauris ut velit est. Cras magna lorem, commodo non dui eget, lacinia pulvinar purus. Donec placerat turpis eu scelerisque consectetur. Nam vulputate ut ipsum sit amet auctor. Vestibulum erat ligula, porta non blandit vitae, interdum vel ipsum. Vestibulum non fermentum nisi. Nunc faucibus urna a sem vestibulum, vel sodales lectus mollis. Duis dapibus tincidunt nisl non lacinia. Sed bibendum porttitor sem volutpat eleifend. Curabitur at felis congue, faucibus dui nec, condimentum nibh. Sed nec porttitor neque, quis fermentum tellus. Mauris lacinia lectus purus, pulvinar accumsan lorem vehicula non. Mauris pulvinar ultricies tincidunt. Integer vulputate orci vitae risus ullamcorper tristique. Nam ac semper libero, eu tincidunt augue. Etiam cursus lacus in orci aliquet ullamcorper. In dictum orci quis ipsum rhoncus, non cursus eros tincidunt. Morbi accumsan ultrices mauris. Cras volutpat porta nunc, et maximus enim ullamcorper nec.";

// Make your program count the number of words in the string.
const lorumCount = lorum.split(" ");
console.log(lorumCount.length);

// Make your program count the number of times the Latin word et appears.
countEt = 0;
for (let word of lorumCount) {
  if (word === "et" || word === "Et") {
    countEt++;
  }
}
console.log(countEt);

// Bonus 2 -  Write a code that will check if the value we assigned to this variable is a Palindrome.

// const phraseInput = "A man, a plan, a canal, Panama!";
// const phraseInput = "Amor, Roma";
// const phraseInput = "race car";
// const phraseInput = "stack cats";
// const phraseInput = "step on no pets";
// const phraseInput = "taco cat";
// const phraseInput = "put it up";
// const phraseInput = "Was it a car or a cat I saw?";
// const phraseInput = "No 'x' in Nixon";
// const phraseInput = "No, this is no palindrome";
const phraseInput = "step on no pets";

let cleanedUpPhrase = "";
let backwardsPhrase = "";

// .split(" ").join("") would be easier here, but how to lose ".,!?" ?
for (let i = phraseInput.length - 1; i >= 0; i--) {
  if (
    phraseInput[i] == " " ||
    phraseInput[i] == "," ||
    phraseInput[i] == "." ||
    phraseInput[i] == "!" ||
    phraseInput[i] == "?" ||
    phraseInput[i] == "'" //RegEx would be nice here
  ) {
    continue;
  } else {
    cleanedUpPhrase += phraseInput[i];
  }
}

// Here it creates the phrase backwards
for (let i = cleanedUpPhrase.length - 1; i >= 0; i--) {
  backwardsPhrase += cleanedUpPhrase[i];
}

// and compares the two
if (cleanedUpPhrase.toUpperCase() === backwardsPhrase.toUpperCase()) {
  console.log("Yeah, that's a palindrome.");
} else {
  console.log("Neh, try again next time.");
}

// Bonus-Bonus
const possiblePalindrome = "Red roses run no risk, sir, on Nurse’s order. ";

function checkPalindrom(phraseInput) {
  const regEx = /[a-z/A-Z]/g;
  const cleanedUpPhrase = phraseInput.match(regEx).join("").toLowerCase();
  const backwardsPhrase = cleanedUpPhrase.split("").reverse().join("");

  if (cleanedUpPhrase === backwardsPhrase) {
    console.log("Yeah, that's a palindrome.");
  } else {
    console.log("Neh, try again next time.");
  }
}
checkPalindrom(possiblePalindrome);
