// Iteration 1: Names and Input
//1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "Pedro";
//1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);
// 1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "Andrea";
//1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
/*2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
} else {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
}
// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let driver = hacker1.toUpperCase();
let answer = "";
for (let i = 0; i < driver.length; i++) {
  answer += driver[i] + " ";
}
console.log(answer);

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let navigator = hacker2;
let answerNavigator = "";
for (let i = navigator.length - 1; i >= 0; i--) {
  answerNavigator += navigator[i];
}
console.log(answerNavigator);

/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
} else if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else {
  console.log("Yo, the navigator goes first definitely.");
}

/*Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.*/

let paragraph1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let paragraph2 =
  "Integer vel faucibus enim, non volutpat libero. Quisque id diam dui. Sed sollicitudin porta ultrices. Aliquam et rhoncus arcu. Morbi eleifend odio tortor, at semper mauris tincidunt quis. Pellentesque quis consequat libero. Cras auctor, eros ut tristique ornare, neque mauris ornare nibh, nec tristique ipsum felis ut purus. Proin euismod vestibulum vulputate. Donec a lobortis ex. Donec eleifend viverra nibh, vehicula ornare tortor pretium nec. Morbi tempor sem enim, at faucibus eros pharetra sit amet. Integer quis malesuada lectus. Quisque at porta odio, vitae vulputate ligula. Ut quis felis porttitor nibh rhoncus bibendum congue non odio.";

let paragraph3 =
  "Praesent suscipit rutrum blandit. Nulla ultricies velit sit amet enim lacinia, et ullamcorper diam pulvinar. Nunc id pellentesque tellus. Nullam arcu felis, vestibulum eget convallis eget, posuere a odio. Etiam ac ex a ipsum pellentesque eleifend ac maximus tortor. Phasellus vitae rutrum magna, id mollis est. Morbi lorem nunc, tincidunt nec mi eu, tincidunt pretium nibh. Cras malesuada lectus est, vitae tempus ante lobortis ut. Nunc tempor sagittis egestas. Donec et dictum massa, in bibendum nisi. Mauris posuere lorem nec rhoncus interdum. Sed suscipit arcu quis justo placerat ornare. Aenean faucibus quam vitae erat gravida, ultrices ornare ligula fringilla. Praesent iaculis quam a nulla luctus feugiat. Integer cursus nunc vitae mauris luctus tincidunt.";

function countWords(paragraph) {
  console.log(paragraph.split(" ").length);
}

countWords(paragraph1);
countWords(paragraph2);
countWords(paragraph3);

function findWord(paragraph, word) {
  let paragraphArray = paragraph.split(" ");
  let coincidence = [];
  for (let i = 0; i < paragraphArray.length; i++) {
    if (paragraphArray[i] === word) {
      coincidence.push(paragraphArray[i]);
    }
  }
  console.log(coincidence.length);
}

findWord(paragraph1, "et");
findWord(paragraph2, "et");
findWord(paragraph3, "et");

/*Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".*/

let phraseToCheck = "A man, a plan, a canal, Panama!";

function palindromeCheck(str) {
  let strLowerCase = str.toLowerCase().replace(/\W/g, "");
  let i = 0;
  let j = strLowerCase.length - 1;

  while (i <= j) {
    if (strLowerCase[i] !== strLowerCase[j]) {
      return "It is not a Palindrome";
    } else {
      i++;
      j--;
    }
  }
  return "Yes this is a Palindrome";
}

palindromeCheck(phraseToCheck);
