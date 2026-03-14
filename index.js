// Iteration 1: Names and Input

const hacker1= "XXXX";
const hacker2= "YYYY";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

const driverLength= hacker1.length;
const navigatorLength= hacker2.length;

if( driverLength > navigatorLength ) {
    console.log(`The driver has the longest name , it has ${driverLength} characters.`);
} else if (navigatorLength > driverLength) {
  console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${driverLength} characters!`);
}



// Iteration 3: Loops

console.log(hacker1.toUpperCase().split('').join(' '));

let reversedNavigator = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedNavigator += hacker2[i];
}
console.log(reversedNavigator);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1:

const loremIpsum = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 

It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, 
sometimes by accident, sometimes on purpose (injected humour and the like).

Contrary to popular belief, Lorem Ipsum is not simply random text. 
It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, 
very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, 
accompanied by English versions from the 1914 translation by H. Rackham.`;

const wordCount = loremIpsum.split(' ').length;
console.log(`The Lorem Ipsum text contains ${wordCount} words.`);

const etCount = (loremIpsum.match(/et/g) || []).length;
console.log(`The word "et" appears ${etCount} times in the Lorem Ipsum text.`);

// Bonus 2: 
   const phraseToCheck = "A man, a plan, a canal, Panama!";

function isPalindrome(str) {
  let cleaned = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {

if (char >= 'A' && char <= 'Z') {
        cleaned += String.fromCharCode(char.charCodeAt(0) + 32);
      } else {
        cleaned += char;
      }
    }
  }
  const len = cleaned.length;
  for (let i = 0; i < len / 2; i++) {
    if (cleaned[i] !== cleaned[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

if (isPalindrome(phraseToCheck)) {
  console.log(`"${phraseToCheck}" is a palindrome.`);
} else {
  console.log(`"${phraseToCheck}" is not a palindrome.`);
}

