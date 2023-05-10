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
