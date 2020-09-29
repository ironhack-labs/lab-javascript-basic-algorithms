// Iteration 1: Names and Input
let hacker1 = "Oscar";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Alex";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  } else if(hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  } else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }

// Iteration 3: Loops
// 3.1
let name = "";
for (let i=0; i<hacker1.length; i++){
  let letter = hacker1[i].toUpperCase();
  if(i===hacker1.length-1){
    name += letter;
  } else {
    name += letter + " ";
  }
}
console.log(name);

// 3.2
let reversedName = "";

for(let i=hacker2.length-1; i>=0; i--){
  reversedName += hacker2[i];
}

console.log(reversedName);

// 3.3 (Using loop instead of direct string comparison to match the exercise instructions)
if (hacker1 === hacker2){
    console.log("What?! You both have the same name?");
} else {
    for(let i=0; i<hacker1.length; i++){
        if(hacker1[i] < hacker2[i]){
          console.log("The driver's name goes first.");
          break;
        } else if (hacker1[i] > hacker2[i]){
          console.log("Yo, the navigator goes first definitely.");
          break;
        }
    }
}

// Bonus 1 - WITHOUT advanced string or array methods
let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin neque sed erat posuere lobortis. Sed quis magna eget tellus convallis scelerisque a nec lacus. Nunc vitae commodo massa, sit amet maximus ligula. Integer mollis pharetra sapien nec iaculis. Aliquam sed elementum turpis. Proin finibus sagittis scelerisque. Phasellus quis efficitur massa, et dignissim nibh. Nullam urna nulla, viverra at maximus at, vestibulum ut magna. Praesent quis euismod mi, quis pellentesque ex. Pellentesque eros nulla, aliquet eu pharetra eget, lacinia id sem. Ut scelerisque a dui vitae malesuada. Donec eget convallis sem. Pellentesque blandit ex feugiat tincidunt gravida. Etiam sed suscipit libero. Mauris erat lectus, lacinia sed augue ut, commodo hendrerit neque.
In hac habitasse platea dictumst. Fusce arcu diam, pretium ac nisi eget, aliquam ornare quam. Morbi aliquet lectus at rutrum accumsan. Integer volutpat hendrerit leo, sit amet imperdiet purus fringilla ac. Nunc ac bibendum leo. Pellentesque egestas nulla id convallis ornare. Fusce quam justo, facilisis in molestie quis, consequat sed libero. Vivamus accumsan vehicula nisi sed vulputate. Proin tincidunt nulla ac est finibus sollicitudin.
Pellentesque semper elit dui, eu pharetra lacus pretium vel. Mauris at venenatis leo, vel dignissim ex. Praesent in bibendum massa. Nullam risus lectus, pulvinar in magna tempor, sodales faucibus lectus. Proin placerat elit finibus, egestas magna non, aliquet libero. Integer consectetur urna eu tortor vestibulum luctus. Praesent volutpat ipsum vitae ante finibus lacinia.`;

var wordsArray = loremIpsum.split(/\s+/); // Split string into array of words
numberOfWords = wordsArray.length; // Array length = number of words
console.log(`The text contains ${numberOfWords}`);

let countEt = 0;
for(let i=0; i<wordsArray.length; i++){
  if(wordsArray[i].toLowerCase() === "et"){
    countEt++;
  }
}
console.log(`The word 'et' appears ${countEt} times.`);

//Bonus 2 - WITHOUT advanced string or array methods
const englishLetters = "abcdefghijklmnopqrstuvwxyz" // Define alphabet
const phraseToCheck = "A man, a plan, a canal, Panama!"; 
let plainText = "";
let isPalindrome = true;

// Remove all characters excepting letters.
for(let i=0; i<phraseToCheck.length; i++){
  if(englishLetters.includes(phraseToCheck[i].toLowerCase())) {
    plainText += phraseToCheck[i].toLowerCase();
  }
}

// Check palindrome.
for(let i=0; i<plainText.length; i++){
  let j = (plainText.length-1)-i;
    if(plainText[i] != plainText[j]){
      isPalindrome = false;
  }
}

// Print result.
if(isPalindrome){
  console.log(`The phrase '${phraseToCheck}' IS a Palindrome.`);
} else {
  console.log(`The phrase '${phraseToCheck}' is NOT a Palindrome.`);
}
  