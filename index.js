// Iteration 1: Names and Input

const hacker1 = "Joy";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "alsoJoy";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

function compareNameLength(driver, navigator) {
  if (driver.length > navigator.length) {
    console.log(
      `The driver has the longest name, it has ${driver.length} characters.`
    );
  } else if (driver.length < navigator.length) {
    console.log(
      `It seems that the navigator has the longest name, it has ${navigator.length}.`
    );
  } else {
    console.log(
      `Wow, you both have equally long names, ${driver.length} characters.`
    );
  }
}

compareNameLength(hacker1, hacker2);
compareNameLength("Juan", "Alberto");
compareNameLength("Banana", "Ana");
compareNameLength("Omar", "Anna");

// Iteration 3: Loops

let capName1 = "";

for (let i = 0; i < hacker1.length; i++) {
  capName1 += hacker1[i].toUpperCase() + " ";
}

let capName2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  capName2 += hacker2[i].toUpperCase() + " ";
}

console.log(capName1);
console.log(capName2);

function sortName(driver, navigator) {
  if (driver.localeCompare(navigator) === -1) {
    console.log("The driver's name goes first.");
  } else if (driver.localeCompare(navigator) === 1) {
    console.log("Yo, the navigator goes first, definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
}

sortName(hacker1, hacker2);
sortName("Anna", "Anna");
sortName("Anna", "Abby");

// Bonus 1:

const longText = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`;

const wordArray = longText.split(/\s+/);
const wordCount = wordArray.length;
console.log(`The number of words in this article is:  ${wordCount}`);

const etCount = longText.match(/et /g).length;
console.log(etCount);

//Solution with for loops and conditions:

let wordCountResult = 0;
for (let i = 0; i < wordArray.length; i++) {
  wordCountResult++;
}
console.log(wordCountResult);

let countEt = 0;
for (let i = 0; i < wordArray.length; i++) {
  if (wordArray.includes("et")) {
    countEt++;
  } else {
    console.log("not found");
  }
}

console.log(countEt);

//Bonus 2:

const phraseToCheck = "A man, a plan, a canal, Panama!";

//for loop
const isPalindrome = (str) => {
  str = str.replace(/\W/g, "");
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(phraseToCheck));
