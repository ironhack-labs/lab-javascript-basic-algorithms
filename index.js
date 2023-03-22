//Iteration 1: Names and Input
let hacker1 = "josh";
let hacker2 = "lukas";
console.log("The drivers name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
/*The driver has the longest name, it has XX characters. or
It seems that the navigator has the longest name, it has XX characters. or
Wow, you both have equally long names, XX characters!.*/

if (hacker1.length > hacker2.length) {
  console.log(`${driver} has the longest name it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
  console.log(`${hacker2} has the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`Wow you both have equally long names! ${hacker1.length} characters`)
}

// Iteration 3: Loops

/*3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".*/

let nameString = ""
// Variable to store our String
for (let i = 0; i < hacker1.length; i++) {
  nameString += hacker1[0].toUpperCase() + ""
}
console.log(nameString)
/*3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".*/
//This is a variable to store our finished product
let hacker1Reversed = ""
//This will be our variable to collect our data 

//This is the loop that will run through the data 
for (let i = hacker1.length - 1; i >= 0; i--) {
  hacker1Reversed += hacker1[i];
}
console.log(hacker1Reversed);


/*3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

3.3 Depending on the lexicographic order of the strings, print:

the driver's name goes first.

Yo, the navigator goes first, definitely.

What?! You both have the same name?*/


if (hacker1.length > hacker2.length) {
  console.log(`The ${hacker1} goes first.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`Yo ${hacker2} definitely goes first`);
} else {
  console.log("What??, you both have the same name?");
}

/*for (f = 0; i < stringOne.length; f++) 
  if (stringOne.length > stringTwo.length)*/







/*  - Generate 3 paragraphs. Store the text in a new string variable named `longText`.
  - Make your program count the number of words in the string.
  - Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears.*/

var longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor ipsum, placerat vel luctus in,
 gravida eget mi. Curabitur nec leo sem. Morbi feugiat, leo convallis egestas iaculis, neque elit ullamcorper lorem, sit
amet condimentum risus est ut arcu. Sed mattis ultricies ultricies. Fusce aliquet at orci vel faucibus. Nullam 
 volutpat dictum vestibulum. Donec pretium lobortis erat ut dignissim. Integer at elit eleifend, mollis est ut, cursus
 dolor. Vivamus mi lorem, eleifend non turpis nec, semper porttitor orci. Fusce porttitor, diam sed semper egestas,
 nibh quam elementum nunc, eget venenatis tellus lorem volutpat erat. In volutpat arcu id tristique congue. Nullam 
accumsan nunc ut bibendum dignissim. Fusce velit purus, commodo at finibus laoreet, tempus eget felis. Vestibulum 
nec aliquam turpis. Suspendisse at neque non urna ultricies dignissim nec a lectus. Proin tortor sapien, convallis
 non luctus et, ullamcorper ultricies lacus. Duis in cursus metus. Sed pellentesque luctus placerat. Aliquam volutpat, 
 arcu vel blandit consequat, enim risus malesuada neque, ac porttitor nibh nibh accumsan tortor. Duis ullamcorper mi nulla,
at tempus elit bibendum sed. Duis at ex eget nulla viverra tempus. Suspendisse ut elit vel lacus ullamcorper iaculis ac
at quam. Nullam lacus ligula, pulvinar et tristique quis, malesuada ac felis. Duis mollis turpis ut sodales eleifend.
Ut ut diam vitae nulla scelerisque aliquam. Nunc sed mauris enim. Nullam viverra quam ipsum, a ultrices ante mollis vitaes
Mauris id justo leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris et convallis orci. Vivamus
tincidunt nulla sed orci sodales mattis. Maecenas nec fermentum ante. Quisque nisl augue, malesuada vel quam in, 
condimentum blandit odio. Donec et consequat enim. Proin consectetur purus ipsum, eu rutrum turpis pharetra vitae. 
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi ligula sem, aliquet 
ut placerat nec, cursus id orci.`
let wordCount = 0
for (w = 0; w < longText.length; w++) {
  if (longText.charAt(w) === " ") {
    wordCount++
  }

}
console.log(wordCount);
let eCount = 0
for (z = 0; z < longText.length; z++) {
  if (longText.charAt(z) === "e") {
    eCount++
  }
}
console.log(eCount);

/* Create a new variable, `phraseToCheck`, containing some string value. 
Write a code to check if the value assigned to this variable is a 
[Palindrome](https://en.wikipedia.org/wiki/Palindrome). Here are some examples of palindromes: 

  - "A man, a plan, a canal, Panama!"
  - "Amor, Roma"
  - "race car"
  - "stack cats"
  - "step on no pets"
  - "taco cat"
  - "put it up"
  - "Was it a car or a cat I saw?" and "No 'x' in Nixon". */
/*  __IMPORTANT__: If you use Google to help you to find a solution to this iteration, you might run into some 
advanced solutions that use string or array methods (such as _join()_, _reverse()_, etc.).
 However, we want you to apply your current knowledge and try to come up with a solution by just using the `for` loop 
 and `if-else` statements with some `break` and `continue`.*/

let phraseToCheck = "Johhnyy was a racecardriver"
/* Things that need to be checked: 
The length of the string, if character.length+1 = character.length-1 match eachother */

for (t = 0; t < phraseToCheck.length; t++) {
  if (phraseToCheck.charAt(1) == phraseToCheck - 1) {
    console.log("This phrase is a palindrome!")
  } else (phraseToCheck.charAt(1) != phraseToCheck - 1) {
    console.log("This phrase is not a palindrome!")
  }
}
