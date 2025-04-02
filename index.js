// Iteration 1: Names and Input
let hacker1 = "John";
console.log(`1.2. The driver's name is ${hacker1}`);
let hacker2 = "James";
console.log(`1.4. The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `2.1. The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `2.1. It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `2.1. Wow, you both have equally long names, ${hacker1.length} characters!.`
  );
}

// Iteration 3: Loops
let nameInCapitalLetters = "";
let nameByLettersReversed = "";

for (let i = 0; i < hacker1.length; i++) {
  nameInCapitalLetters += hacker1[i].toUpperCase() + " ";
}
console.log(
  `3.1. The driver's name in capital letters separated by space: ${nameInCapitalLetters}`
);

for (i = hacker2.length - 1; i >= 0; i--) {
  nameByLettersReversed += hacker2[i];
}
console.log(
  `3.2. The navigator's name in reverse order: ${nameByLettersReversed}`
);

if (hacker1 < hacker2) {
  console.log("3.3. The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("3.3. Yo, the navigator goes first, definitely.");
} else {
  console.log("3.3. What?! You both have the same name?");
}

// Bonus 1
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod laoreet ligula, at suscipit sapien ultricies sit amet. Quisque finibus convallis ornare. Integer vitae mi nunc. Cras quis leo lorem. Nulla sagittis scelerisque neque, sit amet luctus ipsum consequat quis. Ut id arcu ut urna scelerisque suscipit non non metus. Proin at odio nunc. Praesent auctor leo odio, vitae ullamcorper dolor aliquam sed.

Duis magna quam, tincidunt vitae urna sit amet, malesuada volutpat turpis. Sed diam orci, lacinia sit amet congue sed, sodales vitae tortor. Etiam et arcu ut quam fringilla finibus non sed erat. Ut semper dignissim ipsum sed ornare. Aenean ac est commodo, sollicitudin est ac, vehicula velit. Nunc quis tellus egestas, faucibus urna eu, porta massa. Duis eu suscipit arcu. Maecenas fermentum bibendum suscipit.

Etiam sed ligula non arcu suscipit vulputate. Fusce efficitur, tortor et fringilla condimentum, est enim elementum leo, in sollicitudin purus nisi ac lacus. In mattis lectus est, sed aliquam felis vulputate quis. Nunc laoreet nibh eget leo malesuada efficitur a vel dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam a congue ipsum. Duis quis metus tristique, elementum ligula in, lacinia nibh. Ut varius felis in lacus euismod maximus. Vestibulum placerat enim vitae leo condimentum, eget aliquam eros luctus. Donec tellus turpis, hendrerit vel suscipit ut, ornare at urna.`;

let words = "";
words = longText.split(/\s+/);
console.log(
  `Bonus 1.1. The number of words in the long text is: ${words.length}`
);

let countEtWord = 0;
for (let word of words) {
  if (word.toLowerCase() === "et") {
    countEtWord++;
  }
}
console.log(
  `Bonus 1.2. The number of times the word 'et' appears is: ${countEtWord}`
);

// Bonus 2
let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanedPhrase = "";
let cleanedReversedPhrase = "";

for (i = 0; i < phraseToCheck.length; i++) {
  let char = phraseToCheck[i].toLowerCase();
  if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
    cleanedPhrase += char;
  }
}

for (let i = cleanedPhrase.length - 1; i >= 0; i--) {
  cleanedReversedPhrase += cleanedPhrase[i];
}

if (cleanedPhrase == cleanedReversedPhrase) {
  console.log("Bonus 2. This phrase is a palindrome.");
} else {
  console.log("Bonus 2. This phrase is not a palindrome.");
}
