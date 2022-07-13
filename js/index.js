console.log(`I'M READY!`);

// Iteration 1: Names and Input
const hacker1 = `John`;
console.log(`The drivers name is ${hacker1}`);
const hacker2 = `Sarah`;
console.log(`The navigator name is ${hacker2}`);

// Iteration 2: Conditionals
let result = `Wow, you both have equally long names, ${hacker1.length} characters`;
if (hacker1.length > hacker2.length) {
  result = `The driver has the longest name, it has ${hacker1.length} characters`;
} else if (hacker1.length < hacker2.length) {
  result = `It seems that the navigator has the longest name, it has ${hacker2.length} characters!`;
}
console.log(result);

// Iteration 3: Loops
//3.1
let separatedNameHacker1 = "";
for (let i = 0; i < hacker1.length; i++) {
  separatedNameHacker1 += `${hacker1[i].toUpperCase()}`;
  if (i === hacker1.length - 1) {
    separatedNameHacker1 += ``;
  } else {
    separatedNameHacker1 += ` `;
  }
}
console.log(separatedNameHacker1);

//3.1 without loop
let separatedDriver = hacker1.toUpperCase().split(``).join(` `);
console.log(separatedDriver);

//3.2
let reverseHacker1 = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  reverseHacker1 += hacker1[i];
}
console.log(reverseHacker1);

//3.2 without loop
let reversedHacker1 = hacker1.split("").reverse().join("");
console.log(reversedHacker1);

//3.3
let firstName = "What?! You both have the same name?";
if (hacker1 < hacker2) {
  firstName = "The driver's name goes first.";
} else if (hacker1 > hacker2) {
  firstName = "Yo, the navigator goes first definitely.";
}

//BONUS 1.1
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante neque, consectetur vel lectus ac, convallis varius ex. Cras condimentum accumsan sapien, id bibendum erat pulvinar nec. Ut orci tellus, venenatis accumsan vulputate ut, eleifend nec ante. Nulla venenatis urna eget turpis feugiat aliquet. Integer commodo semper felis, tincidunt hendrerit nisi egestas ac. Suspendisse imperdiet fringilla neque ut imperdiet. Etiam vulputate orci nunc, id suscipit tellus sodales ut. Morbi scelerisque fermentum leo et ullamcorper.

Nulla vel enim eget sem volutpat volutpat. Phasellus ligula dolor, lobortis id nibh ac, maximus gravida nibh. Pellentesque fringilla tortor id mauris fringilla congue. Nulla bibendum tincidunt orci nec aliquam. Donec dignissim porta vehicula. In accumsan elementum finibus. Sed tristique urna purus, ut condimentum sapien faucibus et.

In viverra lorem in quam aliquam lacinia gravida ac metus. Fusce hendrerit libero a risus ultrices eleifend. Praesent fringilla tellus a enim lacinia gravida. Vestibulum hendrerit turpis ac massa venenatis sollicitudin. Maecenas scelerisque ultrices quam, at eleifend neque bibendum vitae. Curabitur fringilla ipsum ac mi ornare sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque vitae orci nibh. Cras posuere at elit vitae egestas. Sed in massa sodales, vehicula velit non, vehicula arcu. Praesent sed tempus quam. Suspendisse vulputate varius eros, vel vestibulum tortor molestie ut. Morbi nec aliquet nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus imperdiet nibh sit amet magna elementum maximus`;
let wordsInLorem = 0;
for (let i = 0; i <= lorem.length; i++) {
  if (lorem[i] === " ") {
    wordsInLorem += 1;
  }
}
wordsInLorem += 3;
console.log(wordsInLorem);

//BONUS 1.1 with regEx
console.log(lorem.match(/(\w+)/g).length);

//Bonus1.2
console.log(lorem.match(/\W(et)\W/g).length);

//BONUS 2
let phraseToCheck = "race car";
let zToAPhrase = "";
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  zToAPhrase += phraseToCheck[i];
}
let palindromeOrNot = "Is not Palindrome";
if (phraseToCheck.replaceAll(" ", "") === zToAPhrase.replaceAll(" ", "")) {
  palindromeOrNot = "Is Palindrome";
}
console.log(palindromeOrNot);

//Bonus 2 without loop
let cleanPhrase = phraseToCheck.split(" ").join("");
let reversedPhrase = cleanPhrase.split("").reverse().join("");

let checkPalindrome = "Is not Palindrome";
if (phraseToCheck.split(" ").join("") === reversedPhrase) {
  checkPalindrome = "Is Palindrome";
}
console.log(checkPalindrome);
