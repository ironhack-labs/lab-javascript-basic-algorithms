// Iteration 1: Names and Input
const hacker1 = "Hugo"
console.log(`The driver's name is ${hacker1}`)
const hacker2 = "Joao"
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  } else if (hacker1.length < hacker2.length){
      console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`) 
  }
  else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
  }

// Iteration 3: Loops
let upperCaseDriver = "";
for (let i = 0; i < hacker1.length; i++) {
  upperCaseDriver += hacker1[i].toUpperCase() + " ";
}

console.log(upperCaseDriver);

let reverseNavigator = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseNavigator += hacker2[i];
}
console.log(reverseNavigator);

const firstLetterDriver = hacker1[0];
const firstLetterNavigator = hacker2[0];

if (firstLetterDriver.localeCompare(firstLetterNavigator) === -1) {
  console.log("The driver's name goes first.");
} else if (firstLetterNavigator.localeCompare(firstLetterDriver) === -1) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?")
}
//### Bonus Time!
//#### Bonus 1:
const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu egestas sapien. Curabitur non tellus quis tortor sodales pulvinar nec in mauris. Praesent a nibh consequat, posuere sapien nec, rhoncus dui. Fusce rutrum volutpat nulla et vulputate. Suspendisse condimentum tortor at elit gravida, ac bibendum neque gravida. Quisque vel cursus tellus, sed laoreet est. In a elit a nibh euismod vehicula. Nunc enim turpis, suscipit vel pharetra suscipit, malesuada vel augue. Nulla facilisi. Mauris ac lectus est. Morbi a eleifend dolor, ut viverra ex. Donec semper placerat luctus. Nullam convallis, massa id aliquet laoreet, purus leo mollis lorem, a accumsan tellus magna eu eros. Maecenas at vestibulum dui, sit amet tristique velit. Integer ac finibus sem. Donec vulputate cursus euismod. Donec lacinia scelerisque mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse diam odio, interdum in faucibus at, vestibulum quis dolor. Pellentesque elit magna, semper eget fermentum id, elementum vel lorem. Nam egestas augue in ligula iaculis, id consequat est sagittis. Etiam dictum egestas lorem et porttitor. Ut mollis lacus ut dui rhoncus, eu blandit lacus ullamcorper. In porttitor fermentum rhoncus. Quisque malesuada laoreet est non eleifend. Phasellus eu ultricies justo, a venenatis nunc. In vehicula ultrices sodales. Etiam quis dolor in lacus faucibus aliquet. Aliquam ullamcorper pharetra nulla, vitae varius nulla efficitur a. Proin ultricies id ante in bibendum. Maecenas mattis metus ut sem vehicula, id ullamcorper eros bibendum."


let wordNumber = 0;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    wordNumber+=1;
  }
}

if (wordNumber > 0) {
  wordNumber+=1;
}

console.log(wordNumber);

let etCounter = 0;

for (let i = 0; i < longText.length-1; i++) {
  if (longText[i] === "e" && longText[i+1] === "t") {
    etCounter+=1;
  }
}

console.log(etCounter);

//#### Bonus 2:
let phraseToCheck = "race car";

function spaceFounder (phrase) {
  let isSpace = false;
  for (let i =0; i < phrase.length; i++) {
    if (phrase[i] === " ") {
      isSpace = true;
    }
  }
  return isSpace;
}

while (spaceFounder(phraseToCheck)) {
  let before = phraseToCheck.slice(0, phraseToCheck.indexOf(" "));
  let after = phraseToCheck.slice(phraseToCheck.indexOf(" ")+1);
  phraseToCheck = before + after;
}

let newPhraseToCheck = "";

for (let i = phraseToCheck.length-1; i >=0; i--) {
  newPhraseToCheck += phraseToCheck[i];
}


console.log(phraseToCheck);
console.log(newPhraseToCheck);

if (phraseToCheck === newPhraseToCheck) {
  console.log("Its a Palindrome word !")
} else {
  console.log("Its not a Palindrome word !")
}