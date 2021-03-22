// Iteration 1: Names and Input
console.log(`Iteration 1: Names and Input`);
//1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = 'Bea';
//1.2 Print `"The driver's name is XXXX"`.
console.log(`"The driver's name is ${hacker1}"`);
//1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = 'Samuel';
//1.4 Print `"The navigator's name is YYYY"`.
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals
console.log(`Iteration 2: Conditionals`);
/* 
  2.1. Depending on which name is longer, print:
    - The driver has the longest name, it has XX characters. or
    - It seems that the navigator has the longest name, it has XX characters. or
    - Wow, you both have equally long names, XX characters!.
*/
if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {  
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
console.log(`Iteration 3: Loops`);

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let separetedHacker1 = '';
for(let i = 0; i < hacker1.length; i++) {
  if (i === 0) {
    separetedHacker1 += `${hacker1[i].toUpperCase()}`;
  } else {
    separetedHacker1 += ` ${hacker1[i].toUpperCase()}`;
  }
}
console.log(separetedHacker1);

//You can do this without a loop:
let separatedDriver = hacker1.toUpperCase().split(``).join(` `);
console.log(separatedDriver);

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseHacker2 = '';
for(let i = hacker2.length - 1; i >= 0; i--) {
  reverseHacker2 += hacker2[i];
}
console.log(reverseHacker2);

//You can do this without a loop:
let reverseNavigator = hacker2.split(``).reverse().join(``);
console.log(reverseNavigator);

/*3.3 Depending on the lexicographic order of the strings, print:
  - The driver's name goes first.
  - Yo, the navigator goes first definitely.
  - What?! You both have the same name?
*/
if (hacker1 > hacker2) {
  console.log(`Yo, the navigator goes first definitely.`);
} else if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else {
  console.log(`What?! You both have the same name?`);
}

//Bonus 1:
console.log(`Bonus 1`);
//Go to lorem ipsum generator and:
//Generate 3 paragraphs. Store the text in a variable type of string.
let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec interdum nisi. Pellentesque venenatis velit ac sem placerat mollis. Nam eget laoreet orci. Morbi in dictum urna. Pellentesque at lorem in massa euismod molestie et a nisl. Morbi efficitur quam in felis rhoncus sodales. In vel odio enim.

Donec malesuada lectus non risus dictum, finibus tincidunt arcu varius. Nam sit amet arcu orci. Integer sed rhoncus metus, sit amet malesuada eros. Nunc ultricies facilisis nunc eu tristique. Maecenas pretium erat nec odio luctus interdum. Ut efficitur consectetur ultricies. Nulla dolor enim, lobortis vitae metus in, dictum hendrerit elit.

Vivamus egestas lacinia consectetur. Fusce vel augue egestas, consectetur nulla ut, commodo felis. Morbi ac massa lacus. Nulla ac sodales libero. Nunc mollis tortor eu quam commodo placerat. Aenean ultrices iaculis facilisis. Aliquam id velit magna.`

//Make your program count the number of words in the string.
//I use RegEx to do it in one line but it can be done with a loop spliting the space between words and counting.
console.log(loremIpsum.match(/(\w+)/g).length);

//Without RegEx, the count doesn't match because JS isn't counting the break line as an space. The count differ in two words, the ones starting paragraphs two and three.
var loremWords = 0; 
for (let i = 0; i < loremIpsum.length; i++) {
  let currentCharacter = loremIpsum[i];
  // Check if the character is a space 
  if (currentCharacter == " ") {
    loremWords += 1;
  }
}   
// Add 1 becouse the first space equals 2 words.
loremWords += 1; 
console.log(loremWords); 

//Make your program count the number of times the Latin word et appears. 
//I use RegEx to match exactly the word et, there's only 1 match in my paragraphs.
console.log(loremIpsum.match(/( et \w+)/g).length);

//Bonus 2:
console.log(`Bonus 2`);
/*
  Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

  "A man, a plan, a canal, Panama!"
  "Amor, Roma"
  "race car"
  "stack cats"
  "step on no pets"
  "taco cat"
  "put it up"
  "Was it a car or a cat I saw?" and "No 'x' in Nixon".
*/

let phraseToCheck = `No 'x' in Nixon`;
//Prepare string to only have letters (remove symbols and spaces)
let preparedPhraseToCheck = phraseToCheck.match(/([A-Za-z])+/g).join("").toLowerCase();
let isPalindrome;

for (let i = 0; i < preparedPhraseToCheck.length/2; i++) {
   if (preparedPhraseToCheck[i] !== preparedPhraseToCheck[preparedPhraseToCheck.length - 1 - i]) {
     isPalindrome = false;
     break;
   } else {
     isPalindrome = true;
     continue;
   }
 }

 console.log(`The phraseToCheck "${phraseToCheck}" is a palindrome? ${isPalindrome}`);

 //You can do it without the loop using substrings, reverse and join.