// Iteration 1: Names and Input
let hackerOne = "Luca";
console.log(`The driver's name is ${hackerOne}.`);
let hackerTwo = "Ola";
console.log(`The navigator's name is ${hackerTwo}.`);
if( hackerOne.length > hackerTwo.length) {
    console.log(`The driver has the longest name, it has ${hackerOne.length} characters.`);
}
else if ( hackerOne.length < hackerTwo.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hackerTwo.length} characters.`);
}
else {
    console.log(`Wow, you both have equallly long names, ${hackerOne.length} characters!`);
}


// Iteration 2: Conditionals
let newNameHackerOne = "";
for (i = 0; i < hackerOne.length; i++) {
    newNameHackerOne += hackerOne[i].toUpperCase() + " ";
}
console.log(newNameHackerOne);
let newNameHackerTwo = "";
for (i = hackerTwo.length - 1; i >= 0; i--) {
    newNameHackerTwo += hackerTwo[i];
}
console.log(newNameHackerTwo);

// Iteration 3: Loops
if (hackerOne < hackerTwo) {
    console.log("The driver's name goes first.");
  }
  else if (hackerOne > hackerTwo) {
    console.log("Yo, the navigator goes first definitely.");
  }
  else {
    console.log("What?! You both have the same name?");
  }

  // Bonus 1
  // tried to solve it without reg ex, but it is 

let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ex nec lectus elementum consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas imperdiet risus a quam vehicula lobortis. Vestibulum at sem malesuada, pharetra turpis a, facilisis magna. Cras suscipit tortor nulla, sit amet blandit odio vehicula et. Aenean augue tellus, dapibus elementum mi sed, posuere ornare arcu. Curabitur a dapibus libero. Duis id volutpat neque. Phasellus eu efficitur ligula. Nulla sed volutpat dui. Fusce a dui consectetur, vehicula erat id, ornare odio. Vivamus nec erat diam. Praesent nec mi ut nulla maximus mollis. Nunc tellus neque, feugiat dapibus lorem non, venenatis ultrices massa. In porttitor vel lacus quis consectetur. Integer eget justo accumsan, tristique neque ut, laoreet leo. Vestibulum enim ex, luctus id faucibus nec, volutpat sit amet nunc. Proin dolor enim, volutpat id mauris eget, feugiat dictum libero. Donec dapibus cursus justo quis scelerisque. Cras molestie eget massa sit amet semper. Integer ut dignissim neque. Donec et sapien sit amet turpis maximus malesuada ut in enim. Praesent eleifend dolor nec arcu venenatis, in efficitur dui vestibulum. Praesent vel mattis justo. Sed sit amet nibh convallis, imperdiet dolor congue, mollis odio. Etiam vitae laoreet nulla, et blandit felis. Aliquam facilisis in enim ut malesuada. Vestibulum a tempus est, mattis elementum turpis. Nulla sit amet leo blandit, congue lectus in, dapibus tortor."

let numberOfWords = 1;
for (i = 0; i < loremIpsum.length; i++) {
  if (loremIpsum[i] === " ") {
    numberOfWords += 1;
  }
  else {
    continue;
  }
}
console.log(numberOfWords);

let loremIpsumArray = loremIpsum.split(" ");
let numberOfArrayWords = 0;
for (i = 0; i < loremIpsumArray.length; i++) {
  numberOfArrayWords += 1;
}
console.log(numberOfArrayWords);

let lowerCaseStr = loremIpsum.toLowerCase();
let countEt = 0;
for (i = 0; i < loremIpsum.length; i++) {
  if (lowerCaseStr[i] === " " && lowerCaseStr[i+1]=== "e" && lowerCaseStr[i+2] === "t" && lowerCaseStr[i+3] === " ") {
    countEt += 1;
  }
  else if (lowerCaseStr[i] === " " && lowerCaseStr[i+1]=== "e" && lowerCaseStr[i+2] === "t" && lowerCaseStr[i+3] === ".") {
    countEt += 1;
  }
  else if (lowerCaseStr[i] === " " && lowerCaseStr[i+1]=== "e" && lowerCaseStr[i+2] === "t" && lowerCaseStr[i+3] === ",") {
    countEt += 1;
  }
  else {
    continue;
  }
}

console.log(countEt);

//Bonus 2
// Also possible with switch and case

let phraseToCheck = "race car";
let justLetters = phraseToCheck.replace(/[ ,.?!'"]/g,"").toLowerCase();
let letterCounter = 0;

for (i = justLetters.length - 1; i >= 0; i--) {         
  if (justLetters[i] === justLetters[letterCounter]) {
    letterCounter += 1;
  }
  else {
    break;
  }
}

if(letterCounter === justLetters.length) {
  console.log(`${phraseToCheck} is a palindrome.`);
}
else {
  console.log(`${phraseToCheck} is sadly not a palindrome.`);
}