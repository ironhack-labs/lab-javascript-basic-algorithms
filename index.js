// // Iteration 1: Names and Input
const hacker1 = "Gabriel";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "CarlosG";
console.log(`The navigator's name is ${hacker2}`);


// // Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} 

// // Iteration 3: Loops
let hacker1Capitalized = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1Capitalized += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1Capitalized);

let hacker2Reversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reversed += hacker2[i];
}  
console.log(hacker2Reversed);

// // complicated option suggested by REPLIT
// // The localeCompare() method of String values returns a number indicating whether this string comes before, or after, or is the same as the given string in sort order.
// if (hacker1.localeCompare(hacker2) < 0) {
//   console.log("The driver's name goes first.") 
// } else if (hacker1.localeCompare(hacker2) > 0) {
//   console.log("Yo, the navigator goes first definitely.")
// } else {
//   console.log("What?! You both have the same name?")
// }

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.") 
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}

// Bonus 1

let longText = `  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac lacinia magna, sit amet egestas lorem. Cras dictum sapien nec velit ultricies lacinia. Donec eget velit tellus. In dapibus scelerisque tortor, rhoncus vehicula nunc varius ut. Donec pretium, metus quis convallis commodo, ligula purus tristique massa, sit amet facilisis sapien quam et metus. Phasellus ac ipsum placerat, lobortis nunc eu, malesuada dolor. Maecenas eu quam imperdiet, semper odio ac, commodo orci. Duis sollicitudin leo ut nulla mattis consequat.

Pellentesque quis nunc at metus aliquam bibendum aliquam vel mi. Nulla laoreet finibus diam, a commodo turpis vulputate eu. Aliquam ligula libero, scelerisque sit amet ligula ac, hendrerit pretium neque. Nulla blandit, nulla eget semper luctus, nisl quam euismod nisi, a tincidunt arcu purus at diam. Cras vitae tellus at enim semper imperdiet non sed lectus. Quisque ut sapien tellus. Vivamus sollicitudin nisl a nulla venenatis, sit amet consectetur eros bibendum. Donec interdum sodales tortor et convallis. Pellentesque at mi mollis justo scelerisque viverra. Sed massa massa, volutpat ac nisl ac, consectetur vehicula erat. Sed pretium dignissim rhoncus. Praesent consectetur purus sit amet porta blandit. Nullam varius est vel euismod iaculis.

Nam ut dignissim nulla. Donec velit magna, pellentesque non varius et, molestie a sapien. Suspendisse magna justo, fermentum ac ligula at, pretium sodales neque. Nam rhoncus tincidunt lectus. Sed suscipit mauris tortor, eget imperdiet tortor laoreet sed. Vestibulum quis vehicula neque. Donec vel luctus mauris, sit amet luctus tellus. Nam a erat laoreet, porta magna ac, tristique orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quam odio, venenatis quis dolor non, convallis placerat nulla. Sed sodales massa id ligula pretium elementum. Proin sed massa sed libero venenatis interdum. Suspendisse quis libero vestibulum, hendrerit velit a, efficitur dui. Praesent quam ante, lobortis in sapien placerat, faucibus ultricies nisl. Etiam a consequat urna. Mauris ullamcorper ultricies aliquet.  `

// trim removes the white space from both ends of the string
// .split(/\s+/) counts just the words
let numberOfWords = longText.trim().split(/\s+/).length;

console.log(`The number of words in the text is ${numberOfWords}.`);

// let numberOfWords = 0;
// for (let i= 0; i < longText.length; i++) {
//   if (longText[i] === " ")  {
//     numberOfWords++;
//   }
// }
// console.log(`The number of words in the text is ${numberOfWords +1}.`);

let numberOfEt = 0;
for (let i= 0; i < longText.length; i++) {
  if (longText[i] === "e" && longText[i+1] === "t") {
    numberOfEt++;
  }
}
console.log(`The number of "et" in the text is ${numberOfEt}.`);



// Bonus 2

// with spaces I don't know
function palindrome (str) {  
  let reverseOrder = "";
  for (let i=str.length-1; i>=0; i--) {
    reverseOrder += str[i];
  }
  
  if (reverseOrder === str) {
    return true;
  } else {
    return false;
  }
}


let phraseToCheck = "racecar";
let phraseToCheck2 = "Chair";

console.log(palindrome(phraseToCheck));
console.log(palindrome(phraseToCheck2));