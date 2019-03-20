//********************//
//* Names and Input *//
//******************//

// 1 Create a variable hacker1 with the driver's name

let hacker1 = 'John';
// 2. Print "The driver's name is XXXX"

console.log(`The driver's name is ${hacker1}`);

// 3. Create a variable hacker2 and ask the user for the navigator's name

let hacker2 = window.prompt("What's your name?");
console.log(`The navigator's name is ${hacker2}`);
//*****************//
//* Conditionals *//
//***************//
// 5.
if (hacker1.length > hacker2.length) {
  console.log(
    `The Driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(`Yo, navigator got the longest name, it has ${
    hacker2.length
  } characters
  `);
} else {
  console.log(`wow, you both got equally long names, ${hacker1.length} + ${
    hacker2.length
  } !!
  `);
}
//**********//
//* Loops *//
//********//

/* 6. Split names and add space */

/*  Using a function */
// function theSplitNames(e) {
//   let result = e
//     .toUpperCase()
//     .split('')
//     .join(' ');

//   console.log(result);
// }
// theSplitNames(hacker1);
/* Using a for loop */

let capitalResult = [];
for (let i = 0; i < hacker1.length; i++) {
  capitalResult.push(hacker1[i]);
}
console.log(capitalResult.join(' ').toUpperCase());

/* 7. Reverse Names */
/* Using function */

// function reverseNames(e) {
//   let result = e
//     .split('')
//     .reverse()
//     .join('');
//   console.log(result);
// }
// reverseNames(hacker2);
/* Using a for loop */

let reversedName = '';
for (let i = hacker2.length; i--; ) {
  reversedName += hacker2[i];
}
console.log(reversedName);

/*  Using a for of loop */
// let rev = '';
// for (let i of hacker2) {
//   rev = i + rev;
// }
// console.log(rev);

/* 8. Check lexical behavior */
if (hacker1[0].toLowerCase() < hacker2[0].toLowerCase()) {
  console.log("The driver's name goes first");
} else if (hacker2[0].toLowerCase() < hacker1[0].toLowerCase()) {
  console.log('Yo, the navigator goes first definitely');
} else {
  console.log('What?! You both got the same name?');
}

//* 9. Palindrome *//

// let userInput = prompt('And now write your Palindrome, please.');
// let revPali = userInput
//   .replace(/[\s\W]gi/, '')
//   .split(' ')
//   .reverse()
//   .join('');
// let base = userInput
//   .replace(/[\s\W]gi/, '')
//   .split(' ')
//   .join('');

// base.toLowerCase() === revPali.toLowerCase()
//   ? console.log('yes it’s a palindrome')
//   : console.log('no it’s not a palindrome');
var userInput = prompt("Write something and we'll check if it's a Palindrome");

function polish(w) {
  return w
    .replace(/[\s\W]gi/, '')
    .split(' ')
    .join('')
    .toLowerCase();
}

var str = polish(userInput);
var revStr = polish(reversedInput).reverse();
str === revStr
  ? console.log('This is a Palindrome')
  : console.log('Unfortunately this is not a Palindrome');
