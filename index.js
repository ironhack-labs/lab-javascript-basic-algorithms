// Iteration 1: Names and Input

let hacker1 = "Pierre";
let hacker2 = "Fernando";

console.log(`The driver's name is ${hacker2}`);
console.log(`The navigator's name is ${hacker1}`);

// Iteration 2: Conditionals

if (hacker2.length > hacker1.length) {
  console.log(
    `The driver has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker2.length < hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker1.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

//3.1

let upperCasedName = hacker2.toUpperCase();
let char = "";

for (let i = 0; i < upperCasedName.length; i++) {
  char += upperCasedName[i] + " ";
}
console.log(char);

//3.2

let navigator = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  navigator += hacker1[i];
}
console.log(navigator);

//3.3

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("Yo, the navigator goes first, definitely.");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("The driver's name goes first.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus

//1-
const longtext = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a sagittis augue. Duis id urna aliquam erat iaculis accumsan. Sed tempus at dui a dictum. In non eros venenatis, tincidunt justo ut, elementum sapien. Nullam orci libero, pulvinar at dignissim auctor, rhoncus vel felis. Duis nisi mi, mattis tempus nulla a, varius ornare dolor. Cras ipsum dui, blandit eu imperdiet nec, dictum ut nisl. Aliquam euismod laoreet augue vel tempor. Praesent elementum enim gravida eros consectetur vehicula. Sed egestas ac magna et mollis. Pellentesque nulla urna, tempor vel orci sed, fringilla pretium nulla. Fusce nisi neque, ultrices non auctor vel, blandit quis magna. Donec tempor neque ac erat euismod interdum.

Pellentesque suscipit porta mi, in volutpat odio venenatis euismod. Aenean id dolor id risus iaculis tempus. Nam sit amet nibh vel urna tristique feugiat vitae sed risus. Proin sit amet ultrices ante, ac aliquam turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam dictum enim id nisl laoreet commodo. Quisque pharetra, felis id eleifend varius, mi erat egestas dui, feugiat interdum sapien turpis sit amet sem. Pellentesque ac libero lacinia, ullamcorper augue venenatis, facilisis purus. Praesent interdum dapibus erat, et scelerisque nulla vestibulum ac. Pellentesque et maximus diam. Vestibulum at lacinia libero. Vivamus eget porta orci.

Fusce ut nibh ante. Curabitur at eros sollicitudin erat gravida finibus. Vestibulum placerat nulla at quam ullamcorper, sed ornare velit auctor. Proin ut est a felis sagittis molestie in a nisl. Pellentesque convallis quis erat ac sollicitudin. Praesent ornare urna neque, et molestie neque euismod non. Praesent tempor varius lacus et dapibus. Aliquam erat volutpat. Mauris pulvinar urna vel lorem ultrices, pellentesque laoreet tortor laoreet.`;


// 1.1 Count Word.

let count = 0;

for (let i = 0; i <= longtext.length; i++) {
  const char = longtext[i];

  if (char === " ") {
    count++;
  }
}

count = count + 1;

console.log(count, "the number of word in the variable longtext.");


// 1.2 Count "Et".

let count1 = 0;

for (let i = 0; i <= longtext.length; i++) {
  const char = longtext[i] + longtext[i + 1];

  if (char === "et") {
    count1++;
  }
}
console.log(count1, "the number of et in the variable.");


//2- Bonus of Fernando

let phraseToCheck = "A man, a plan, a canal, Panama!";

phraseToCheck = phraseToCheck.toLowerCase();
let phraseToCheckNoSpace = "";
let halfString = "";
let reverseHalfString = "";

// with this loop i remove spaces and special character from the original string
// only include special characters for the examples given in the exercise. I could keep adding all special characters or create a switch to simplify
for (let i = 0; i < phraseToCheck.length; i++) {
  if (
    phraseToCheck[i] === " " ||
    phraseToCheck[i] === "," ||
    phraseToCheck[i] === "?" ||
    phraseToCheck[i] === "'" ||
    phraseToCheck[i] === "!"
  ) {
    continue;
  } else {
    phraseToCheckNoSpace += phraseToCheck[i];
  }
}

// I put in the variable the second half of the string without spaces and special characters
halfString = phraseToCheckNoSpace.slice(phraseToCheckNoSpace.length / 2);

// reverse the second half of the string
for (let i = halfString.length - 1; i >= 0; i--) {
  reverseHalfString += halfString[i];
}

//if the string with no spaces and special characters is even
if (phraseToCheckNoSpace.length % 2 === 0) {
  //compare if the first half of the string and the second(reversed) are equal
  if (
    reverseHalfString ===
    phraseToCheckNoSpace.slice(0, phraseToCheckNoSpace.length / 2)
  ) {
    console.log("It is a palindrome");
  } else {
    console.log("It is NOT a palindrome");
  }
  //if the string with no spaces and special characters is odd
} else {
  //compare if the first half of the string and the second(reversed) are equal
  if (
    reverseHalfString ===
    phraseToCheckNoSpace.slice(0, phraseToCheckNoSpace.length / 2 + 1)
  ) {
    console.log("It is a palindrome");
  } else {
    console.log("It is NOT a palindrome");
  }
}




// Bonus 2 of Pierre

let phraseToCheck = "Was it a car or a cat I saw?";

phraseToCheck = phraseToCheck.toLowerCase();

let phraseToCheckWithoutSpace = "";

// We can write phraseToCheck = phraseToCheck.replaceAll(` `,`"`, `,` , `?` , `!`, `'` , )

for (let i = 0; i < phraseToCheck.length; i++) {
  if (
    phraseToCheck[i] === " " ||
    phraseToCheck[i] === "," ||
    phraseToCheck[i] === "?" ||
    phraseToCheck[i] === "'" ||
    phraseToCheck[i] === "!"
  ) {
    continue;
  } else { 
    phraseToCheckWithoutSpace += phraseToCheck[i];
  }
}

let read = "";
let reverse = "";

for (let i = 0; i < phraseToCheckWithoutSpace.length; i++) {
  read += phraseToCheckWithoutSpace[i];
}

for (let i = phraseToCheckWithoutSpace.length -1; i >= 0; i--) {
  reverse += phraseToCheckWithoutSpace[i];
}

if (reverse === read) {
  console.log("It's a Palindrome");
} else {
  console.log("It's not a Palindrome");
}

console.log(read)
console.log(reverse)
