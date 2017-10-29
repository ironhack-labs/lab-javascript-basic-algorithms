// variables
var hacker1 = "Bart";
var hacker2 = window.prompt("What's your name?");
console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// conditionals
if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1.length < hacker2.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("Wow, you both got equally long names, " + hacker1.length + " characters");
}

// loops
var newString = "";

for (var i = 0; i < hacker1.length; i++) {
  newString += hacker1[i] + " ";
}

var upperCaseString = newString.toUpperCase();
console.log(upperCaseString);


var reverseString = "";

for (var i = hacker2.length - 1; i >= 0; i--) {
  reverseString += hacker2[i];
}

console.log(reverseString);

// lexographic order
if (hacker1 < hacker2) {
  console.log("The driver's name goes first");
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}

// bonus

var userInput = window.prompt("Please enter a word to check if it is a Palindrome");
var inputUppercase = userInput.toUpperCase();
var halfString = Math.floor(inputUppercase.length / 2);

for (var i = 0; i < halfString; i++) {
  if (inputUppercase[i] !== inputUppercase[inputUppercase.length - i - 1]) {
    console.log("The word is not a palindrome");
    break;
  } else {
    console.log("The word is a palindrome");
    break;
  }
}

// lorem ipsum generator

var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra maecenas accumsan lacus vel facilisis volutpat est. At risus viverra adipiscing at. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Ultricies lacus sed turpis tincidunt id. Magna fringilla urna porttitor rhoncus dolor purus non enim. Mattis enim ut tellus elementum sagittis vitae. Donec ac odio tempor orci dapibus ultrices in. Enim sit amet venenatis urna cursus eget. Turpis massa sed elementum tempus. Suspendisse interdum consectetur libero id faucibus nisl. Id faucibus nisl tincidunt eget nullam non. Nulla posuere sollicitudin aliquam ultrices sagittis. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Sapien eget mi proin sed libero enim sed faucibus turpis. Vestibulum lectus mauris ultrices eros in cursus. Aliquet eget sit amet tellus cras adipiscing enim eu. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Risus nec feugiat in fermentum posuere urna. Amet cursus sit amet dictum. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Interdum posuere lorem ipsum dolor. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Pellentesque habitant morbi tristique senectus. Et tortor consequat id porta nibh venenatis. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Nulla at volutpat diam ut venenatis tellus. Pretium nibh ipsum consequat nisl vel pretium. Augue neque gravida in fermentum et sollicitudin ac orci phasellus.";

// word counter
var wordAmount = 0;

for (var i = 0; i < loremIpsum.length; i++) {
  if (loremIpsum[i + 1] === " " || loremIpsum[i + 1] === ".") {
    wordAmount += 1;
  }
}

console.log("The amount of words in the three paragraphs is " + wordAmount);

// et counter
console.log("Et Match: " + (loremIpsum.match(/et/g) || []).length);
