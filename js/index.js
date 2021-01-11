// Iteration 1: Names and Input

const hacker1 = 'Paul'; //driver

console.log("The driver's name is ",hacker1);

const hacker2 = 'Lisa'; //Navigator

console.log("The navigator's name is ",hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker2.length > hacker1.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
      console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }


// Iteration 3: Loops

let upperCaseName1 = "";

for (let i = 0; i <= hacker1.length-1; i++) {

if (i < hacker1.length-1) {
  upperCaseName1 += hacker1[i].toUpperCase()+" ";
}  else if (i === hacker1.length-1) {
  upperCaseName1 += hacker1[i].toUpperCase();
} 

}
console.log('"'+upperCaseName1+'"')


let reverseName1 = "";
for (let i = hacker1.length-1; i >=0; i--) {
  reverseName1 += hacker1[i];
}

console.log('"'+reverseName1+'"')

let nameOrder = [hacker1, hacker2];
nameOrder = nameOrder.sort();
console.log(nameOrder);


if (nameOrder[0] === nameOrder[1]) {
  console.log("What?! You both have the same name?")
  } else if (nameOrder[0] === hacker1) {
    console.log("Yo, the navigator goes first definitely.")
  } else if (nameOrder[0] === hacker2) {
    console.log("The driver's name goes first.")
  }

//Bonus 1
let str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio elit, lacinia nec interdum quis, ultricies et purus. Sed lacus massa, maximus sit amet porta quis, rhoncus at dolor. Ut sed lacinia odio. In blandit ligula sed tempus volutpat. Morbi sed est ex. Nunc dictum tempor felis, vel porta nulla sagittis posuere. Donec rhoncus lorem sed risus maximus, id fringilla lorem mattis. Cras felis urna, dignissim eget odio lacinia, interdum molestie augue. Donec sed erat et urna tincidunt tincidunt quis ac massa. et Nulla ut nulla non augue ultrices interdum. Duis mollis enim a tellus porta, id mollis eros mattis. 

Donec vitae bibendum tortor. Cras sagittis lacus eu pharetra iaculis. Vivamus pulvinar ligula dolor, non lacinia nisl commodo eu. Nunc consectetur ornare sapien, eget cursus dui malesuada quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt, odio vel fermentum placerat, elit sem egestas nibh, eget viverra dui urna vitae justo. 

Ut at et convallis metus. Pellentesque scelerisque mollis diam sit amet vestibulum. Cras eu urna tempus lectus dignissim eleifend vel vitae erat. Duis nec auctor orci. Sed tempor consectetur sem, vel vulputate arcu mollis ut. Sed luctus ornare urna in faucibus. Suspendisse scelerisque tortor eu mattis ullamcorper. Suspendisse bibendum nibh at tempus eleifend. Morbi eleifend dictum condimentum. Integer dignissim bibendum vulputate. Nulla luctus ante elit.`;

let splitStr = str.split(' ');

//number of words in the string
console.log(splitStr.length);

let searchWord = "et";
let wordCount = 0;


for (let i = 0; i < splitStr.length-1; i++) {
  if (splitStr[i] === searchWord) {
    wordCount++;
  }
}
console.log(wordCount);

//Bonus 2

const phrase2Check = "race car";

let phraseReverse = "";
let cleanPhrase ="";

//1. cleaning phrases from spaces and punctuation 
//2. building the reverse phrase
for (let i = phrase2Check.length-1; i >=0; i--) {
  if (phrase2Check[i] === " " || phrase2Check[i] === "," || phrase2Check[i] === "?" || phrase2Check[i] === "!" || phrase2Check[i] === "''") {
  } else {
    phraseReverse += phrase2Check[i];
  }
}

//rebuilding the cleaned up original phrase
for (let i = phraseReverse.length-1; i >= 0; i--) {
  cleanPhrase += phraseReverse[i];
}

//check if sentence is a palindrome
if (phraseReverse === cleanPhrase) {
  console.log("Check, it's a palindrome!")
} else {
  console.log("Not a palindrome!")
};