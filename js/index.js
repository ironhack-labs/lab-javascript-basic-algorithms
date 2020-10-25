// Iteration 1: Names and Input
const hacker1 = 'Silvia';
const hacker2 = 'Alejandro';
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver ${hacker1} has the longest name, it has ${hacker1.length} characters`);
  } else if
  (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator ${hacker2} has the longest name, it has ${hacker2.length} characters`);
  } else {
    console.log(`Wow you both have equally long names, ${hacker1.length} characters`);
  }

// Iteration 3: Loops

//3.1

let driverCharacters = "";

for (let i = 0; i < hacker1.length; i++) {
driverCharacters += hacker1[i] + " "; 
}

console.log(driverCharacters.toUpperCase());

//3.2

let navigatorCharacters = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
 navigatorCharacters += hacker2[i];
}

console.log(navigatorCharacters);

//3.3

if (hacker1 < hacker2) {
  console.log(`The driver's name goes first. ${hacker1}`);
} else if (hacker1 > hacker2) {
  console.log(`Yo, the navigator goes first definitely. ${hacker2}`);
} else {
  console.log(`What?! You both have the same name? ${hacker1} and ${hacker2}`);
}

//Bonus 1 -----------------------------------------------

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac sollicitudin nibh. Quisque ut arcu mauris. Sed lacinia elit auctor tellus blandit, ac tincidunt erat viverra. Etiam cursus magna a urna dapibus imperdiet. Praesent vitae pellentesque arcu, quis aliquet turpis. Nullam tempus non erat et cursus. Nunc finibus lorem risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam vitae lacus convallis, hendrerit massa eget, faucibus tellus. Proin non nibh viverra, auctor sem at, commodo odio. Aenean sollicitudin lacus sed enim vulputate, nec maximus dolor venenatis. Pellentesque laoreet in arcu et placerat. In convallis erat a ipsum suscipit, faucibus malesuada diam suscipit. Nam semper urna sit amet mollis maximus. Duis nisi sem, congue quis euismod a, pellentesque nec turpis. Proin et odio maximus, tempus risus in, faucibus odio. Duis aliquet ante eget maximus bibendum. Aenean hendrerit finibus mi id commodo. Duis pulvinar laoreet nulla, ac hendrerit dolor dignissim sit amet. Etiam non eros nec nisi egestas sollicitudin. Curabitur nec est vel lacus euismod ultricies et non augue. Suspendisse quis condimentum felis. Curabitur et leo eros. Donec cursus tortor ut elit pellentesque condimentum. Nulla neque nisi, condimentum non eros ut, molestie scelerisque mi. Suspendisse dui metus, ultrices eget rutrum nec, vulputate quis nunc. Nunc ut eleifend lorem, et volutpat eros. Cras convallis aliquam ex, in sagittis mi sodales at. Pellentesque ut consequat augue. Morbi magna erat, blandit sit amet justo tincidunt, maximus pharetra ex. Vivamus posuere purus in felis mollis cursus. Nullam vulputate libero ut lacus bibendum, consequat blandit quam suscipit. Sed pretium gravida accumsan. Ut id urna eget lorem dictum ullamcorper. Pellentesque rhoncus nulla ut nulla pharetra consequat a sit amet ligula. Curabitur blandit dictum augue, vel semper magna placerat sed. Aenean pellentesque tortor diam, ac suscipit arcu auctor eu. Etiam maximus consectetur mi, eget consectetur neque mollis non. Phasellus tincidunt tristique leo, quis euismod velit sodales id. Duis consequat porta consequat. Suspendisse eu enim condimentum, placerat justo id, efficitur orci."

const loremArray = lorem.split(" ");

console.log(`Number of words in string is ${loremArray.length}`);

function wordsCount(loremArray) {
  let count = 0;
  for(let word of loremArray) {
    if (word === "et") {
      count++;
    }
  }
  return count;
}
console.log(wordsCount(loremArray));

//Bonus 2 ------------------------------------------------------------

const phraseToCheck = "step on no pets";

let palindrome = "";
for(let i = phraseToCheck.length - 1; i >= 0; i--) {
  palindrome += phraseToCheck[i];
  }
  if(phraseToCheck === palindrome) {
    console.log(`The phrase ${phraseToCheck} is a PALINDROME`);
  }

