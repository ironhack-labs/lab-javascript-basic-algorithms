// Iteration 1: Names and Input
const hacker1 = 'Ismael';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Sophie';
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

const driverLength = hacker1.length;
const navigatorLength = hacker2.length;

if (driverLength > navigatorLength) {
  console.log(
    `The driver has the longest name, it has ${driverLength} characters.`);
} else if (driverLength < navigatorLength) {
  console.log(
    `The navigator has the longest name, it has ${navigatorLength} characters.`);
} else {
  console.log(
    `You both have equally long names, with ${driverLength} characters.`);
}

// Iteration 3: Loops

let driverSpace=[];
for (let i=0; i < driverLength; i++){
  driverSpace += hacker1[i].toUpperCase() + " "
}
console.log(driverSpace)

let reverseNavigator=[];
for (let i=navigatorLength-1; i>=0; i--){
  reverseNavigator += hacker2[i]
}
console.log(reverseNavigator)


const order = hacker1.localeCompare(hacker2);
switch (order){
  case -1 : 
    console.log("The drivers name goes first.")
    break;
  case 0 :
    console.log("That means thats we have the same name.")
    break;
  case 1 :
    console.log("Yo, the navigator goes first definitely.")
    break;
}

//BONUS FEATURES
//PART 1

let textNoBreaks = longText.slice(0);
textNoBreaks = textNoBreaks.replace(/(\r\n|\n|\r)/g, ' ');

console.log(longText);
console.log(textNoBreaks);

let counterSpace = 0;
let counterEt = 0;

let countText = textNoBreaks.slice(0);
let position = 0;

while (position !== -1) {
  position = countText.indexOf(' ');
  countText = countText.slice(position + 2);
  counterSpace++;
}

position = 0;
countText = longText.slice(0);

while (position !== -1) {
  position = countText.indexOf(' et ');
  countText = countText.slice(position + 3);
  if (position !== -1) {
    counterEt++;
  }
}

console.log(`The text has ${counterSpace} words.`);
console.log(`The word "et" appears ${counterEt} times.`);

//PART 2

const phrase = "Was it a car or a cat I saw?";
let phraseNoPunc = phrase.slice(0);
phraseNoPunc = phrase.replace(/[.,?\/#!$%\^&\*;:{}=\-_`~()]/g,"");
phraseNoPunc = phraseNoPunc.replace(/\s/g, '');
/* We researched intensly the replace method and how /g works, don't worry! */
let phraseUpper = [];


for (let i=0; i < phraseNoPunc.length; i++){
  
  phraseUpper += phraseNoPunc[i].toUpperCase() 
}

let phraseToCheck=[];
for (let i=phraseUpper.length-1; i>=0; i--){
  phraseToCheck += phraseUpper[i]
}

if (phraseToCheck === phraseUpper){
  console.log("It's a Palindrome!")
}
else {
  console.log("It's not a Palindrome...")
}

  