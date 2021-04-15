/*
// Iteration 1: Names and Input
let hacker1 = "Israel";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Marcos";
console.log(`The navigator's name is ${hacker2}`);
*/

/*
// Iteration 2: Conditionals

let hacker1 = "Israel";
let hacker2 = "Marcos";

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}
*/

// Iteration 3: Loops

/* 3.1

let hacker1 = "Israel";
let hacker2 = "Marcos";

let hacker1Capitals = "";

for (i = 0; i < hacker1.length; i++) {
  hacker1Capitals += hacker1[i];
  hacker1Capitals += " ";
}

console.log(hacker1Capitals.toUpperCase());

*/

/* 3.2

let hacker1 = "Israel";
let hacker2 = "Marcos";

let hacker2Capitals = "";

for (i = 5; i >= 0; i--) {
  hacker2Capitals += hacker2[i];
  hacker2Capitals += " ";
}

console.log(hacker2Capitals);

*/

/* 3.3

let hacker1 = "Israel";
let hacker2 = "Marcos";

if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

*/

/* Bonus 1

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula lobortis orci sit amet feugiat. Fusce at fermentum sapien, sit amet semper dolor. Proin posuere ligula at posuere interdum. Fusce sed imperdiet magna. Nunc accumsan ullamcorper semper. Mauris sapien nulla, feugiat eget dictum sed, facilisis et neque. Cras aliquam justo ornare odio mollis auctor. Aliquam placerat feugiat libero at vestibulum. Nunc dapibus vel purus ut hendrerit.
Nulla pellentesque sit amet libero posuere iaculis. Aenean dignissim lacus et nisl imperdiet tempus. Aliquam commodo diam ligula, quis fermentum libero semper quis. Morbi aliquam eros nec scelerisque pellentesque. Aenean dignissim arcu sit amet orci bibendum elementum. Vivamus dolor libero, egestas id orci rhoncus, scelerisque auctor elit. Aliquam id mauris vulputate, faucibus enim vitae, fermentum risus. Donec pellentesque rutrum mi et malesuada. Fusce non massa et nisl vulputate placerat. Vivamus nec nisl sagittis, tempus quam eu, egestas nisi. Phasellus iaculis nisi eget rutrum interdum. Morbi magna mi, rhoncus eget ligula vitae, gravida tristique eros. Vestibulum varius vehicula tristique. Pellentesque tempus et risus at tempus.
Aenean laoreet, erat id scelerisque sagittis, ipsum erat tincidunt est, ut pellentesque lacus est non dolor. Maecenas id ullamcorper neque, quis rutrum mauris. Pellentesque magna purus, viverra sit amet cursus ut, vestibulum id odio. Morbi faucibus tortor vel tortor ultricies aliquam. Quisque accumsan suscipit felis, vestibulum aliquet quam aliquet id. Morbi hendrerit velit eget tortor rhoncus vestibulum. Nunc gravida tincidunt mi, sit amet maximus massa vestibulum et. In feugiat euismod augue ac sodales.`;

loremIpsum.split(" ");

console.log(loremIpsum.split(" ").length);

let loremIpsumSplit = loremIpsum.split(" ");
let etCount = 0;

loremIpsumSplit.forEach(function (arrayWords) {
  if (arrayWords == "et" || arrayWords == "et." || arrayWords == "et,") {
    etCount += 1;
  }
});

console.log(`There are ${etCount} "et" words`);

*/

/*
prompt phraseToCheck = "";

switch(phraseToCheck) {
  case "A man, a plan, a canal, Panama!":
    
}

console.log(testArr.charAt(testArr.length - 1));



let testArr = "socos";
let testArrLength = testArr.length;
let mitad = testArrLength / 2;

for (i = 0; i < mitad; i++) {
  if (testArr.charAt(i) == testArr.charAt(testArr.length - i)) {
    continue;
  }
  console.log("maravillos");
}

*/

// Bonus 2

//let phraseToCheck = "taco cat";

let phraseToCheck = prompt("What's your phrase?");

let phraseToCheckInv = "";

let phraseToCheckNS = "";

let phraseToCheckInvNS = "";

let phraseToCheckLength = phraseToCheck.length;

for (i = 0; i < phraseToCheckLength; i++) {
  if (
    phraseToCheck.charAt(i) == " " ||
    phraseToCheck.charAt(i) == "," ||
    phraseToCheck.charAt(i) == "!" ||
    phraseToCheck.charAt(i) == "?" ||
    phraseToCheck.charAt(i) == "."
  ) {
    continue;
  } else {
    phraseToCheckNS += phraseToCheck.charAt(i);
  }
}

//console.log(phraseToCheckNS);

let phraseToCheckNSLength = phraseToCheckNS.length;

for (i = phraseToCheckNSLength - 1; i >= 0; i--) {
  phraseToCheckInvNS += phraseToCheckNS.charAt(i);
}

let phraseToCheckInvNSCap = phraseToCheckInvNS.toUpperCase();
let phraseToCheckNSCap = phraseToCheckNS.toUpperCase();

//console.log(phraseToCheckInvNSCap);
//console.log(phraseToCheckNSCap);

if (phraseToCheckNSCap == phraseToCheckInvNSCap) {
  console.log("WOW It's a Palindrome!");
} else {
  console.log("Bah! It's a regular word...");
}
