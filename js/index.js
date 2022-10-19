console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "José";
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Maria";
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
//- The driver has the longest name, it has XX characters. or
//- It seems that the navigator has the longest name, it has XX characters. or
//- Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}


// Iteration 3: Loops
// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let capitalLetter = "";
for (let i = 0; i < hacker1.length; i++) {
  if (i === hacker1.length - 1) {
    capitalLetter += hacker1[i].toUpperCase();
  } else if (
    capitalLetter += hacker1[i].toUpperCase() + " ") {
  }
}

// let capitalLetter = hacker1.toUpperCase().split("").join(" ");
console.log(capitalLetter);


// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i];
}
console.log(reverseName);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
let names = [hacker1, hacker2];
let sortedNames = names.sort();
if (names.indexOf(hacker1) === 0) {
  console.log("The driver's name goes first.")
} else if (names.indexOf(hacker2) === 0) {
  console.log("Yo, the navigator goes first definitely.")
} else if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?")
}

/*Bonus 1:
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
*/

let paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus efficitur velit, ac rutrum lacus feugiat a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ut tellus libero. Quisque sodales cursus libero. Curabitur pretium mi ut dictum ultricies. Donec nec urna vitae purus bibendum luctus quis malesuada purus. Praesent eget volutpat enim. Maecenas nec laoreet neque, eleifend viverra massa. Etiam rutrum erat mauris, in luctus dolor semper sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam nisl orci, cursus at lobortis at, tincidunt commodo nulla. Quisque nec commodo nisl.Proin velit elit, vulputate sed consectetur id, mollis rutrum libero.Nullam ac posuere justo, nec dapibus quam.Praesent consectetur sapien magna, et convallis nisl consequat sed.Vivamus bibendum lectus nec leo varius maximus.Integer quis elit sed nulla volutpat tincidunt sit amet quis dui.Mauris sed eleifend dolor.Sed commodo tellus sit amet eros venenatis auctor.Morbi id nisl velit.Suspendisse potenti.Nunc ac enim ut nisi scelerisque malesuada et vel nisi.Aenean sed massa bibendum mauris cursus vulputate eget vel nunc.Donec et metus ut tellus laoreet vulputate. Proin elementum nunc vel ultrices tempor.Maecenas eu porta ex.Sed sit amet consectetur ex, et pellentesque enim. Proin eget magna nec leo suscipit posuere eget vitae libero.Vivamus lacinia sem velit, id pretium enim pharetra a.Suspendisse placerat fermentum libero, sed dictum est fermentum a.Donec in velit est.Proin rhoncus varius maximus.Donec vulputate malesuada dolor in vestibulum.Nunc tempor ex sed velit pulvinar, eu dapibus neque consectetur.Donec viverra odio dolor, a rhoncus libero finibus at.Quisque nec accumsan nisl.Aenean laoreet porttitor massa nec vehicula.Praesent tristique in mauris ut tristique.Phasellus lobortis sodales lacus nec vulputate.Maecenas varius eros vitae est auctor, vitae efficitur leo interdum.Nam non tristique lorem, eu porta arcu.Proin accumsan, sem eu iaculis scelerisque, dolor nulla viverra enim, et volutpat urna tortor eu arcu. "
let spaces = 0;
let etWord = 0;
let paragraphsLowerCase = paragraphs.toLowerCase();
for (let i = 0; i < paragraphsLowerCase.length; i++) {
  if (paragraphsLowerCase[i] === " ") {
    spaces++;
  } else if (paragraphsLowerCase[i] === "e" && paragraphsLowerCase[i + 1] === "t") {
    etWord++
  }
}
console.log(`The number of words is ${spaces}`)
console.log(`The number of et word is ${etWord}`)

/*
Bonus 2:
Create a new variable phraseToCheck and have it contain some string value.Write a code that will check if the value we assigned to this variable is a Palindrome.Here are some examples of palindromes:
"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".
*/
let phraseToCheck = "Amor, Roma";
let phraseToCheck2 = phraseToCheck.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
for (let i = 0; i < phraseToCheck2.length / 2; i++) {
  if (phraseToCheck2[i] !== phraseToCheck2[phraseToCheck2.length - 1 - i]) {
    return console.log("It is not a palindrome");
  }
}
return console.log("It is a palindrome");
