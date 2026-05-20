// Iteration 1: Names and Input

let hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);

let hacker2 =  "Sarah";
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

let driverName = "";

for (let i = 0; i < hacker1.length; i++) {
  driverName += hacker1[i].toUpperCase() + " ";
}

console.log(driverName);

let reverseName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i];
}

console.log(reverseName);


if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}





let longText = `
Lorem ipsum dolor sit amet consectetur adipisicing elit.
Et harum doloremque et laboriosam.
Lorem et ipsum et dolor sit amet.
`;


let words = longText.split(" ");

console.log(`Number of words: ${words.length}`);


let etCount = 0;

for (let i = 0; i < words.length; i++) {
  if (words[i].toLowerCase() === "et") {
    etCount++;
  }
}

console.log(`Number of times 'et' appears: ${etCount}`);







let phraseToCheck = "A man, a plan, a canal, Panama!";

let cleanPhrase = "";

for (let i = 0; i < phraseToCheck.length; i++) {

  let char = phraseToCheck[i].toLowerCase();

  if (
    (char >= "a" && char <= "z") ||
    (char >= "0" && char <= "9")
  ) {
    cleanPhrase += char;
  }
}


let reversedPhrase = "";

for (let i = cleanPhrase.length - 1; i >= 0; i--) {
  reversedPhrase += cleanPhrase[i];
}


if (cleanPhrase === reversedPhrase) {
  console.log("It is a palindrome!");
} else {
  console.log("It is not a palindrome.");
}