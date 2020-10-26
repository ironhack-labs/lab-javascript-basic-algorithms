"use strict";

console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "Michael";
let hacker2 = "Jean";

console.log(`The Driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  };

// Iteration 3: Loops

//console.log(hacker1.split('').join(' ').toUpperCase());
let spacedOutNameInCapitals = "";
for (let i = 0; i < hacker1.length; i++) {
    if (i === hacker1.length-1) {
      spacedOutNameInCapitals += hacker1.charAt(i).toUpperCase();
    } else {
      spacedOutNameInCapitals += hacker1.charAt(i).toUpperCase() + " ";
    }
}
console.log(spacedOutNameInCapitals);

//console.log(hacker2.split("").reverse().join(""));''
let nameBackwards = "";
for (let i = hacker2.length; i >= 0; i--) {
    nameBackwards += hacker2.charAt(i);
}
console.log(nameBackwards);

if (hacker1.toUpperCase() < hacker2.toUpperCase()) {
    console.log(`The driver's name goes first.`);
  } else if (hacker1.toUpperCase() > hacker2.toUpperCase()) {
    console.log(`Yo, the navigator goes first definitely.`);
  } else {
    console.log(`What?! You both have the same name?`);
  };

// Bonus 1

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et metus malesuada, ultricies tellus eu, hendrerit quam. Quisque ornare ac est sed consequat. Phasellus id neque libero. Nam odio ex, pharetra vitae orci non, venenatis euismod lectus. Donec lobortis efficitur nunc malesuada pellentesque. Nullam vel dignissim risus. Duis sapien est, posuere ut orci eu, imperdiet pulvinar leo. Integer tempus ex eu enim consectetur feugiat.

Quisque aliquet sapien sit amet mauris feugiat feugiat in sit amet purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed eleifend tortor sit amet commodo tempus. Morbi ac arcu quis metus consectetur mattis in nec quam. Aliquam pharetra, eros sed laoreet vehicula, mi purus congue leo, ac tempor est velit feugiat ligula. Ut ultricies nulla eu convallis ultricies. Etiam scelerisque pretium euismod.

Curabitur volutpat bibendum nisi. Sed suscipit ante eu convallis gravida. Fusce rutrum interdum turpis sed eleifend. Sed et sagittis sapien. Suspendisse aliquam eleifend pretium. Nam suscipit eget quam quis interdum. Donec tellus nisl, ornare sed finibus a, euismod volutpat justo. Integer viverra elit nulla, sed fringilla leo tempor ut. Fusce lacinia efficitur justo sed tincidunt. Donec iaculis quis neque at fermentum.`;

let testText = `A trying time.

For unfortunate, events.`

console.log(`There are ${loremIpsum.split(' ').length + loremIpsum.split('\n\n').length - 1} words in the text.`);

console.log(`The word "et" appears ${(loremIpsum.match(/et/g) || []).length} times in the text.`);

// Bonus 2

let palindrome = "A man, a plan, a canal, Panama!";

let englishAlphabet = "abcdefghijklmnopqrstuvwxyz"

let palindromeCheck = ""
for (let i = 0; i < palindrome.length; i++) {
  if (englishAlphabet.includes(palindrome[i].toLowerCase())) {
    palindromeCheck += palindrome[i].toLowerCase();
  }
}

let palindromeAnswer = ""
let pic = palindromeCheck.length - 1;

for (let i = 0; i < palindromeCheck.length / 2; i++) {
  if (palindromeCheck[i] == palindromeCheck[pic - i]) {
    palindromeAnswer = "is a palindrome";
  } else {
    palindromeAnswer = "is not a palindrome";
  }
}

console.log(`The text:
"${palindrome}"
${palindromeAnswer}.`);