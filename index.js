// Iteration 1: Names and Input
const hacker1 = "Ted"
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Barry"
console.log(`The navigator name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
};

// Iteration 3: Loops
// 3.1

let driverCapitalName = "";
for (let i = 0; i < hacker1.length; i++) {
  driverCapitalName += hacker1[i] + " ";
}
console.log(driverCapitalName.toUpperCase())

// 3.2
let navigatorReverseName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorReverseName += hacker2[i];
}
console.log(navigatorReverseName);

// 3.2

if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator goes first, definitely.`) } else if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`The driver's name goes first.`) }
  else {
    console.log("What?! You both have the same name?")
  }

// Bonus 1:

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta vehicula metus id molestie. Donec odio ex, aliquet rutrum ullamcorper id, auctor sit amet risus. Aenean non egestas tellus, condimentum sagittis arcu. Donec posuere malesuada luctus. Suspendisse id dapibus dolor. Sed sit amet blandit metus. Phasellus vel odio augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam risus magna, efficitur ac laoreet quis, convallis sed ante. Nulla nec feugiat magna, eget maximus velit. Mauris luctus sed metus nec cursus. Ut faucibus tempus dolor eget gravida. Nam dictum pulvinar nulla, ac pulvinar tortor tristique quis. Aliquam at ultricies turpis. Sed congue id elit vitae placerat. Sed pulvinar magna dui, sed vehicula mi ultricies eu. Proin in justo libero. Donec sit amet lorem vitae eros ullamcorper posuere. Praesent eu elit eu turpis suscipit ultrices. Nulla semper dui massa, sit amet consequat turpis blandit eu. In ipsum lacus, luctus nec lacus in, condimentum sagittis enim. Sed convallis sit amet sapien eu condimentum. Phasellus elementum, turpis nec ultricies placerat, ipsum enim pulvinar magna, vel malesuada magna mauris quis mi. Aenean vitae nisl at augue tempus gravida ut eu velit. Proin porta, dui vel ullamcorper venenatis, erat nunc viverra enim, id vulputate nisl massa ut elit. Morbi sed volutpat ante. Integer vel vestibulum nunc, eget placerat urna. Quisque ultrices faucibus dui non pellentesque. Suspendisse nec ipsum tincidunt, mattis tellus ut, tincidunt risus. Aliquam varius rutrum aliquam. Suspendisse potenti. Quisque urna lorem, venenatis id vulputate sed, commodo in purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque cursus ipsum congue nisl cursus feugiat. Sed et lorem purus. Nunc pretium tortor ipsum, eu tempor augue bibendum non. Maecenas consequat posuere nibh. Vivamus a sollicitudin orci, ut placerat metus. Phasellus elit sapien, venenatis eget ante elementum, aliquet blandit libero.";

// Make your program count the number of words in the string.

let count = 1;
for (let i = 0; i < longText.length; i++) 
{
  let twoChars = longText[i] + longText[i+1];
  if (twoChars.endsWith(" ")) {
    count++;
  }
}
console.log(count);

// Make your program count the number of times the Latin word et appears.

let coutOfEt = 0;
for (let i =0; i< longText.length; i++) {
  let twoChars = longText[i] + longText[i+1];
  if(twoChars === "et") {
    coutOfEt += 1;
  }
}
console.log(coutOfEt);

// Bonus 2:

let phraseToCheck = "Amor, Roma".toLowerCase();
let formmattedPhraseToCheck = "";

for (let i = 0 ; i < phraseToCheck.length ; i++) {
  if(phraseToCheck[i] === " ") {
    continue;
  } else {
    formmattedPhraseToCheck += phraseToCheck[i]
  }
}

let textReverse = "";

for (let i = formmattedPhraseToCheck.length - 1; i >= 0 ; i--) {
  if(formmattedPhraseToCheck[i] === " ") {
    continue; 
  } else 
    {
      textReverse += formmattedPhraseToCheck[i]
    }
}

if (formmattedPhraseToCheck === textReverse) {
  console.log("It's a palindrome")
} else {
  console.log("No palindromes around here!")
}