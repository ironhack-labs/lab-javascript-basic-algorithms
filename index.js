// 1.1 Create a variable hacker1 with the driver's name.
const hacker1 = prompt("Write driver's name");

// 1.2 Print "The driver's name is XXXX".
console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable hacker2 with the navigator's name.
const hacker2 = prompt("Write navigator's name");

// 1.4 Print "The navigator's name is YYYY".
console.log(`The navigator's name is ${hacker2}`);

/*2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters`);
}else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

let newHacker1 = '';

for (i = 0; i < hacker1.length; i++) {
  let temp = '';
  temp = hacker1[i].toUpperCase() + ' ';
  //console.log(temp);
  newHacker1 = newHacker1 + temp;
}
console.log(newHacker1);

//3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

let newHacker2 = '';

for (i = hacker2.length - 1; i >= 0; i--) {
  let temp = '';
  temp = hacker2[i];
  //console.log(temp);
  newHacker2 = newHacker2 + temp;
} 
console.log(newHacker2);

/*3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name?*/

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1){
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus 1

/*Go to the lorem ipsum generator website and:

Generate 3 paragraphs. Store the text in a new string variable named longText.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.*/


let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae convallis quam, ac molestie eros. Sed facilisis scelerisque fermentum. Proin ornare et ipsum vel fermentum. Suspendisse fermentum maximus ipsum, non lacinia felis pellentesque eget. Donec feugiat nec risus at fringilla. Aliquam malesuada erat libero. Donec sem lectus, maximus non ex non, tincidunt cursus mauris. Phasellus sollicitudin suscipit mi, in auctor neque molestie quis. Etiam commodo molestie magna sed ultrices. Vivamus facilisis leo sed laoreet dapibus. Nunc vulputate nulla velit, et scelerisque odio vehicula at. Morbi et vestibulum mauris. In justo odio, luctus in faucibus a, aliquam sit amet nisi. Curabitur cursus eget sem a mattis. Donec ultricies elementum odio in vestibulum. Suspendisse tempor purus eget neque pretium, in egestas tortor viverra. Phasellus placerat vulputate euismod. Praesent ut libero non ex tempus ornare. Morbi facilisis massa id nulla fermentum, ac lobortis urna tempus. Etiam a orci molestie, feugiat ipsum ac, scelerisque turpis. Aenean est orci, interdum elementum diam vitae, efficitur tempus augue. Donec a enim at odio ultricies aliquam. Proin sit amet ullamcorper orci. Mauris quis magna non leo consectetur porttitor non id nisi. Nunc vitae eleifend justo. Morbi quis lacinia purus. Vivamus magna ligula, bibendum sit amet laoreet id, efficitur quis sapien. Pellentesque consectetur maximus egestas. Aliquam sed turpis ullamcorper libero iaculis pulvinar. Praesent nulla nibh, cursus nec quam at, bibendum fringilla eros. Nam finibus ac libero quis rutrum. Suspendisse potenti. Nulla a turpis ut magna tristique consectetur. Cras tincidunt bibendum lorem sit amet laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus."

//console.log(longText);
let count = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i].includes(" ")) {
    count++;
  }
}
console.log(count+1);

let countLet = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i].includes('E') || longText[i].includes('e')) {
    if (longText[i + 1].includes('t')) {
       countLet++;
    }
  }
}
console.log(countLet);

/*Bonus 2
Create a new variable, phraseToCheck, containing some string value. Write a code to check if the value assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".
IMPORTANT: If you use Google to help you to find a solution to this iteration, you might run into some advanced solutions that use string or array methods (such as join(), reverse(), etc.). However, we want you to apply your current knowledge and try to come up with a solution by just using the for loop and if-else statements with some break and continue.
*/

let phraseToCheck = 'Amor, Roma';
//let phraseToCheck = 'Ironhack';
let palindrome1 ='';
let palindrome2='';

for(let i = phraseToCheck.length-1 ; i >= 0; i--) {
  let temp = '';
  if(phraseToCheck[i]===','||phraseToCheck[i]===' ') {
    continue;
  } else {
    temp = phraseToCheck[i].toLowerCase();
    palindrome1 = palindrome1 + temp;
  }  
}

for(let i = 0 ;i < phraseToCheck.length; i++) {
  let temp = '';
  if (phraseToCheck[i]===','||phraseToCheck[i]===' ') {
    continue
  } else {
    temp = phraseToCheck[i].toLowerCase();
    palindrome2 = palindrome2 + temp;
  }  
}

console.log(palindrome1);
console.log(palindrome2);

if(palindrome1 === palindrome2) {
  console.log("Is a palindrome");
} else {
  console.log("Is not a palindrome");
}