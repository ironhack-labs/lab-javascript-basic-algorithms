// Iteration 1: Names and Input

let hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Sarah";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops

let driverNameUpperCase = "";
for (let i = 0; i < hacker1.length; i++) {
  driverNameUpperCase += hacker1[i].toUpperCase() + " ";
}
console.log(driverNameUpperCase.trim());


let navigatorReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorReversed += hacker2[i];
}
console.log(navigatorReversed);


if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
  } else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first, definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }

  // Bonus 1 

    let longText = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et turpis tincidunt, euismod nulla at, volutpat libero. 
    Aliquam non neque a libero fringilla vehicula. Proin vulputate et orci ac luctus. 
    Donec et lacus vel leo luctus fermentum. Fusce in et nulla est. Ut et tempor purus, et malesuada elit.`;

    let wordCount = 0;
    for (let i = 0; i < longText.length; i++) {
    if (longText[i] === " " || longText[i] === "\n") {
    wordCount++;
  }
}
wordCount++;
console.log(`Number of words: ${wordCount}`);


let etCount = 0;
for (let i = 0; i < longText.length - 1; i++) {
  if (longText[i] === "e" && longText[i + 1] === "t") {
    etCount++;
  }
}
console.log(`Number of times 'et' appears: ${etCount}`);

// Bonus 2 

let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanedPhrase = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  let char = phraseToCheck[i].toLowerCase();
  if (char >= "a" && char <= "z") {
    cleanedPhrase += char;
  }
}

let isPalindrome = true;
for (let i = 0; i < cleanedPhrase.length / 2; i++) {
  if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("The phrase is a palindrome.");
} else {
  console.log("The phrase is not a palindrome.");
}



