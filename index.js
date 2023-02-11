// Iteration 1: Names and Input
const hacker1 = "Silvia";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Google";
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
    `Wow, you both have equally long names, ${hacker2.length} characters.`
  );
}

// Iteration 3: Loops
let hackerUpperCase = "";
for (let i = 0; i < hacker1.length; i++) {
  const char = hacker1[i].toUpperCase();
  hackerUpperCase += char;
}
console.log(...hackerUpperCase);

let reversedString = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  if (i == 0) {
    reversedString += hacker1[i].toUpperCase();
  } else {
    reversedString += hacker1[i];
  }
}
console.log(reversedString);

if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else {
  for (let i = 0; i < hacker1.length; i++) {
    if (hacker1[i] < hacker2[i]) {
      console.log("The driver's name goes first");
      break;
    } else if (hacker1[i] > hacker2[i]) {
      console.log("Yo, the navigator goes first definitely.");
      break;
    }
  }
}

//Bonus 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus hendrerit tellus et scelerisque. Mauris non magna felis. Vestibulum urna velit, faucibus eu erat in, venenatis gravida nunc. Aliquam erat volutpat. Nullam fringilla sapien sit amet metus semper, nec porta dolor pretium. Donec iaculis nisi mattis quam ullamcorper condimentum. Nam maximus ex sit amet sem bibendum scelerisque. Vivamus facilisis dui justo, sed ultricies nisi dictum a. Pellentesque vitae suscipit mauris. Donec sed feugiat risus.
Etiam vitae tempus lorem. Donec at iaculis tortor. Suspendisse potenti. Phasellus et rhoncus erat. Morbi pharetra ex a malesuada suscipit. Mauris justo nulla, sagittis eget congue bibendum, tincidunt quis augue. Sed gravida, augue sit amet ullamcorper ultricies, nulla neque commodo leo, eu posuere mi erat quis magna. Nullam at porta urna. Mauris ac dictum mauris, id volutpat sapien. Nulla nisl nisl, finibus in velit nec, congue pharetra arcu. Integer ullamcorper nisl vel ligula pellentesque dictum. Pellentesque in mi quam. Nullam molestie arcu in sapien fermentum, vel imperdiet urna lacinia. Etiam commodo et dui at finibus. Proin nec dignissim massa, vel iaculis leo.Duis pellentesque dignissim dui. Sed viverra posuere est, sed dictum odio molestie ut. Cras vel sodales est. Suspendisse potenti. Aliquam erat volutpat. Mauris sodales justo in convallis egestas. Mauris finibus lorem sit amet semper fringilla. Vestibulum sit amet porta neque. Fusce non tincidunt erat.`;

let numberWords = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    numberWords++;
  }
}

console.log(numberWords);

let numberEt = 0;

for (let i = 0; i < longText.length - 1; i++) {
  if (longText[i].toLowerCase() + longText[i + 1].toLowerCase() == "et") {
    numberEt++;
  }
}
console.log(numberEt);

//Bonus 2
let phraseToCheck = "Amor,  Roma";
let phraseClean = "";
let reversePhrase = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  let letter = phraseToCheck[i].toLowerCase();
  if (letter == " " || letter == "!" || letter == "," || letter == ".") {
    continue;
  } else {
    phraseClean += letter;
  }
}

for (let i = phraseClean.length - 1; i >= 0; i--) {
  reversePhrase += phraseClean[i];
}

if (reversePhrase === phraseClean) {
  console.log("It is a palindrome!");
}
