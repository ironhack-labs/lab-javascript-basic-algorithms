// Iteration 1: Names and Input

const hacker1 = "Kim"; // Driver
const hacker2 = "Angele"; // Navigator

console.log("The driver's name is :" + hacker1);
console.log(`The navigator's name is : ${hacker2}`);

// Iteration 2: Conditionals

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
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
let upperCaseName = "";
let reverseName = "";

for (let i = 0; i < hacker1.length; i++) {
  upperCaseName += hacker1[i] + " ";
}
console.log(upperCaseName.toUpperCase());

for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i];
}
console.log(`${hacker2} is reversed to ${reverseName}`);

if (hacker1 < hacker2) {
  // hacker2 is longer than hacker1, as its starting with character A
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus 1: Lorem ipsum Paragraphs

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Nunc elit sem, auctor ut malesuada non, volutpat id neque. Suspendisse 
convallis tempus lacus in maximus. Nunc euismod pulvinar efficitur.
Suspendisse bibendum massa et arcu lobortis tristique. Class aptent taciti 
sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
Nulla vitae augue lacus. Nam dignissim suscipit ullamcorper. Quisque in 
purus ac lectus rhoncus mattis vel eget tellus. Sed eu bibendum ligula.

Nam at fringilla felis. Morbi pharetra at ligula tempor feugiat.
Pellentesque porttitor bibendum libero non volutpat. Integer iaculis tellus quis enim pretium, 
a faucibus ante mollis. Nunc sit amet aliquam erat, sed tristique dui. Aliquam non aliquam diam, 
at commodo arcu. Proin pretium lacus sed nisi dignissim ornare. Phasellus tincidunt lacinia mauris, 
at vestibulum felis finibus eu et.

Sed fringilla volutpat semper. Vivamus velit velit, pulvinar in posuere vitae, 
volutpat eu ligula. Proin tempus libero quis nulla vehicula molestie.
Etiam efficitur ex nunc, tincidunt sodales sapien pellentesque mollis.
Ut sollicitudin consectetur feugiat. Vivamus vitae urna dignissim, vehicula ex eu, 
posuere eros. Nulla rutrum vitae elit sed aliquam. Sed gravida, magna quis accumsan 
ultrices, augue odio accumsan enim, eget posuere felis tellus id dolor.`;

function countWordInString(str) {
  let countOfWord = 1;
  let countOfWordET = 0;

  for (let i = 0; i < str.length; i++) {
    // Counting the word in the string devided by spaces, start count is 1.
    if (str[i] === " ") {
      countOfWord += 1;
    }

    // Counting the Latin word in the string, if its containing ET.
    if (str.substring(i, i + 2) === "et") {
      countOfWordET += 1;
    }
  }

  // Console log out the outcome of the function countWordInString
  console.log(
    `This String have ${countOfWord} numbers of words and also containing ${countOfWordET} word with the Latin "ET".`
  );
}

//Calling the function with longText as parameter.
countWordInString(longText);

//Bonus 2:  Palindrome check
let word = "race car";

function checkPalindrome(string) {
  let cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, "");

  let reversedString = "";
  for (let i = cleanString.length - 1; i >= 0; i--) {
    reversedString += cleanString[i];
  }
  return reversedString === cleanString ? true : false;
}

console.log(checkPalindrome(word));
