// Iteration 1: Names and Input
let hacker1 = "John";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Samuel";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log("hacker1 has the longest name");
} else if (hacker1.length < hacker2.length) {
  console.log("hacker2 has the longest name");
} else {
  console.log("You both have equally long names");
}

// Iteration 3: Loops

let uppercased = hacker1.toUpperCase();

let result = "";

for (i = 0; i < uppercased.length; i++) {
  result += " " + uppercased[i];
}

console.log(result.trim());

let reverse = "";
for (let j = hacker2.length - 1; j >= 0; j--) {
  reverse = reverse + hacker2[j];
}
console.log(reverse);

if (hacker1[0] > hacker2[0]) {
  console.log("driver's name go first");
} else if (hacker1[0] < hacker2[0]) {
  console.log("navigator's name go first");
} else {
  console.log("you both have same name");
}

// Bonus 1

longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla orci, fermentum volutpat pharetra id, volutpat non lectus. Etiam aliquam leo et risus congue imperdiet. In ac pellentesque augue, vitae dignissim tortor. Morbi urna magna, pulvinar ut erat vel, bibendum suscipit leo. Cras pulvinar interdum fermentum. Morbi ipsum quam, fringilla ut ligula quis, dictum malesuada sapien. Maecenas rutrum laoreet nunc, at commodo sapien gravida ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae nunc mauris. Sed sed libero vitae velit dictum consectetur at sit amet enim. Sed consectetur, leo id placerat vestibulum, purus lorem ornare lacus, et consectetur lorem lacus vitae massa. Duis tempus sem ut nulla consequat dignissim. Duis tempus, erat a pretium dignissim, sem ligula suscipit sapien, vitae malesuada ex massa nec quam.
 In semper, urna non scelerisque maximus, nunc ipsum pharetra mauris, eget rhoncus ligula augue in enim. Duis hendrerit eu quam eget posuere. Fusce rutrum scelerisque tellus, id tincidunt ligula convallis vel. Duis lacus leo, vehicula id massa porttitor, pulvinar euismod neque. Mauris quis dolor at augue sodales ultrices. Integer eleifend ante erat, a aliquet justo tempus ac. Duis mollis libero ac nulla varius scelerisque. Donec fermentum, urna id placerat pharetra, ipsum tellus consequat urna, ut ultricies nunc quam vel arcu. In imperdiet eu velit sed fringilla. Nulla ac est sodales, feugiat nisi molestie, sollicitudin ligula. Nam varius nec metus in consectetur. Etiam elementum, leo ut viverra venenatis, diam neque pretium dui, ac pretium quam velit sit amet lorem. In hac habitasse platea dictumst.
 Quisque eget felis pulvinar nunc volutpat pulvinar. Duis nec blandit magna, quis ultrices massa. Maecenas vitae finibus metus. Nulla facilisi. Aliquam quis velit velit. Morbi et erat ligula. Vestibulum mattis scelerisque porttitor. Cras maximus facilisis tortor et eleifend. Vestibulum eget consectetur quam.`;
let newText = longText.split(" ");
console.log(newText.length);

let etCount = 0;

for (let i = 0; i < newText.length; i++) {
  const char = newText[i];

  if (char === "et") {
    console.log(char);
    etCount++;
  }
}
console.log(etCount);

//Bonus2
let phraseToCheck = "Amor,Roma"

let createdArray = phraseToCheck.split(",");
let firstWord = createdArray[0];
let secondWord = createdArray[1];

let reversedWord = "";

for (let i = firstWord.length - 1; i >= 0; i--) {
  reversedWord += firstWord[i];
}

console.log(reversedWord);

if (reversedWord.toLowerCase() === secondWord.toLowerCase()) {
  console.log("The phrase is a palindrome");
} else {
  console.log("The phrase is not a palindrome");
}
