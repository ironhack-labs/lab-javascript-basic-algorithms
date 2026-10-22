// Iteration 1: Names and Input
const hacker1 = "Michele";
const hacker2 = "Mike";

console.log(hacker1);
console.log(hacker2);


// Iteration 2: Conditionals
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);


// Iteration 3: Loops
const hacker1Caps = (hacker1.toUpperCase());
console.log(hacker1Caps);
const hacker1Final = (hacker1Caps.split(""));
console.log(hacker1Final);
console.log(hacker1Final.join(" "));


//Bonus Time!
const longText = `Aenean bibendum lobortis pretium. Quisque interdum ut libero eget sodales. Vivamus et dui vel leo tincidunt scelerisque. Sed eleifend nulla enim, consequat euismod nibh tincidunt id. Nunc id nisi lobortis, dictum lacus at, feugiat nisi. Ut rhoncus est at arcu aliquet feugiat. Vestibulum id posuere nunc. Vestibulum a ultricies turpis, vel aliquam metus. Nulla viverra leo a velit pharetra, id sollicitudin dui tincidunt. Donec molestie metus felis. Vivamus vehicula, mauris non vulputate elementum, tortor diam tincidunt felis, a hendrerit purus massa quis nulla.
In hac habitasse platea dictumst. Nunc ultricies semper lorem, et mattis erat hendrerit in. In blandit diam sem, eu venenatis ligula facilisis eu. Maecenas eget tempor mauris, vitae sagittis odio. Nullam in lacus eget risus ornare vulputate nec at velit. Pellentesque massa dui, porttitor et leo ut, bibendum tempor ligula. Ut egestas dui vitae ante ultricies commodo. Nunc diam ante, elementum at molestie vitae, dapibus in dolor. Proin ornare, diam quis semper aliquet, tellus velit fermentum enim, consequat commodo magna felis vel ante. Curabitur arcu arcu, tristique ut nibh vitae, tristique cursus nisl. Nunc cursus eros felis, vitae hendrerit turpis sollicitudin sit amet. Nullam dolor ipsum, condimentum vel sapien quis, efficitur consequat metus. Ut fermentum sem et pulvinar consequat. Nunc vel elit ut sapien semper sodales vel vitae ligula. Morbi vehicula leo vel mauris rutrum, vel malesuada lacus consectetur.
Ut lorem risus, feugiat ac imperdiet sit amet, scelerisque a magna. Pellentesque et arcu mi. Vivamus non libero nibh. Etiam feugiat nisi sed dapibus tempor. In luctus justo orci, sed blandit sem porta sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec at lacus eget arcu eleifend vestibulum. Aliquam id tellus eu sem fermentum condimentum efficitur et dui.`;

// console.log(longText);
// const phraseToCheck = `Vivamus non libero nibh.`
// if (phraseToCheck.includes("non")){
//     console.log("it is a palindrome")
// } else {
//     console.log("no palindromes here")
// }


// let phraseToCheck = "Amor, Roma";
// phraseToCheck = phraseToCheck.toLowerCase();

// let cleanPhrase = "";
// for (let i = 0; i < phraseToCheck.length; i++) {
//   const code = phraseToCheck[i].charCodeAt(0);
//   if (code < 97 || code > 122) {
//     continue;
//   }
//   cleanPhrase += phraseToCheck[i];
// }


// let isPalindrome = true;
// for (let i = 0; i < cleanPhrase.length / 2; i++) {
//   if (cleanPhrase[i] !== cleanPhrase[cleanPhrase.length - 1 - i]) {
//     isPalindrome = false;
//     break;
//   }
// }

// if (isPalindrome) {
//   console.log("It's a palindrome!");
// } else {
//   console.log("Not a palindrome.");
// }

