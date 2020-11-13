// Iteration 1: Names and Input
console.log('\nIteration 1: Names and Input\n');

// 1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "José Luis Rodríguez";

// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable `hacker2` with the navigator's name. 
let hacker2 = "Pedro J Sola Campoy";

// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals

console.log('\nIteration 2: Conditionals\n')

let hacker1NoSpace = hacker1.split(" ").join("")
let hacker2NoSpace = hacker2.split(" ").join("")

let hacker1Lenght = hacker1NoSpace.length;
let hacker2Lenght = hacker2NoSpace.length;


// 2.1. Depending on which name is longer, print:
if (hacker1Lenght > hacker2Lenght) {
  console.log(`The driver has the longest name, it has ${hacker1Lenght} characters.`)
} else if (hacker1Lenght < hacker2Lenght) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2Lenght} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1Lenght} characters!.`)
}


// Iteration 3: Loops

console.log('\nIteration 3: Loops\n');

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
//OPTION 1: Method chain
hacker1Spaced1 = hacker1NoSpace.toUpperCase().split("").join(" ");

console.log(`OPTION 1:\n${hacker1Spaced1}`);

//OPTION 2: Loop
hacker1Spaced2 = "";

for (let i = 0; i < hacker1NoSpace.length; i++) {
  hacker1Spaced2 = hacker1Spaced2 + hacker1NoSpace.toUpperCase()[i] + " "
}

console.log(`OPTION 2:\n${hacker1Spaced2}`);


// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let hacker2Reverse = "";

for (let i = 0; i < hacker2.length; i++) {
  hacker2Reverse = hacker2[i] + hacker2Reverse
}

console.log(hacker2Reverse);


// 3.3 Depending on the lexicographic order of the strings, print:


let hachersCompared = hacker1.localeCompare(hacker2);

if (hachersCompared === 1) {
  console.log("The driver's name goes first.")
} else if (hachersCompared === -1) {
  console.log("Yo, the navigator goes first definitely")
} else {
  console.log("What?! You both have the same name?")
}


// Bonus 1:

console.log('\nBonus 1:\n');


// Generate 3 paragraphs. Store the text in a variable type of string.

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, augue at tincidunt vehicula, ante lectus hendrerit ex, et varius mi dui in diam. Fusce maximus purus sed quam malesuada vulputate. Curabitur ac dignissim enim. Nunc ac molestie orci. Sed non fermentum libero. Aliquam a tellus ut justo vulputate auctor. Nulla eu diam eu orci maximus auctor. Aenean sed posuere lorem. Fusce sit amet mollis lectus. Vestibulum euismod maximus finibus. Morbi mattis elementum sapien, at mattis risus euismod ut. Curabitur luctus risus lorem, non cursus risus porta non. Vivamus nisl ex, porta eu felis vel, scelerisque varius metus. Nunc a urna elit.

Nam tincidunt metus diam, at condimentum mi ullamcorper ut. Duis non velit ex. Aliquam vitae sem leo. Etiam viverra tellus ut egestas condimentum. Nulla aliquet nibh id cursus gravida. Quisque a ex velit. Integer sit amet magna vel dui consectetur aliquet. Morbi rhoncus arcu a arcu fringilla, laoreet vehicula tellus elementum. Morbi lobortis ullamcorper cursus. Vestibulum quam mi, malesuada eget vehicula et, malesuada in nisl. Duis placerat in nisi at mattis. Phasellus sit amet ullamcorper ex.

In luctus massa at fringilla fermentum. Maecenas scelerisque nisl et risus malesuada, id ultrices sem efficitur. Nam tempor ante vel porttitor blandit. Sed in massa magna. Vestibulum cursus lorem vel tempus eleifend. Integer non aliquet sapien, at pretium dui. Suspendisse pharetra arcu ex. Pellentesque imperdiet, justo semper aliquet sollicitudin, enim risus efficitur magna, eget fringilla mi ligula vitae dolor. Fusce efficitur, nisl quis interdum tincidunt, velit nisi eleifend urna, eu varius lectus massa eu neque. Duis pellentesque convallis nulla. Donec ac porttitor quam. Vivamus consectetur tortor eget risus congue, quis pellentesque velit elementum.`;


// Make your program count the number of words in the string.

//OPTION 1: To list and remove punctuation
let loremNoPunctuationMarks = lorem.split("");



for (i = 0; i < loremNoPunctuationMarks.length; i++){
  if (loremNoPunctuationMarks[i] == "." || loremNoPunctuationMarks[i] == ","){
    loremNoPunctuationMarks.splice(i,1);
    i--;
  }
}

loremNoPunctuationMarks = loremNoPunctuationMarks.join("").split(" ");
let numberOfWords = loremNoPunctuationMarks.length

console.log(`The number of words in the string is ${numberOfWords}.`);

//OPTION 2: Punctuation does not affect word count

console.log(`The number of words in the string is ${lorem.split(" ").length}.`);

// Make your program count the number of times the Latin word et appears.
 let numberOfRepetitions = 0;

 for (i = 0; i < numberOfWords; i++){
   if (loremNoPunctuationMarks[i] == "et"){
     numberOfRepetitions ++;
   }
 }

console.log(`The Latin word "et" appears ${numberOfRepetitions} times in the text.`);


// Bonus 2:

console.log('\nBonus 2:\n');

let phraseToCheck = "A man, a plan, a canal, Panama!";

function check (textToCheck) {
  let noPunctuationMarks = textToCheck.toLowerCase();
  noPunctuationMarks = noPunctuationMarks.split("");
  for (i = 0; i < noPunctuationMarks.length; i++){
  if (noPunctuationMarks[i] === "," || noPunctuationMarks[i] === "!" || noPunctuationMarks[i] === "?" || noPunctuationMarks[i] === "'"){
    noPunctuationMarks.splice(i,1)
    i--;
  }
} 
  noPunctuationMarks = noPunctuationMarks.join("").split(" ").join("").split("");
  const ok = noPunctuationMarks.join("");
  let reversed = noPunctuationMarks.reverse().join("");
  if (ok === reversed){
    console.log ("It's a very cool phrase, it's a palindrome!")
  } else {
    console.log ("It is a very normal phrase!")
  }
}


check (phraseToCheck);