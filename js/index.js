console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "xxxx";
console.log(`the driver's name is ${hacker1}.`);

let hacker2 = "YYYY";
console.log(`The navigator"s name is ${hacker2}.`);

/*Iteration 2: Conditionals

2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/
function longestName(name1, name2) {
  if (name1.length > name2.length) {
    return `The driver named ${name1} has the longest name, it has ${name1.length} characters.`;
  } else if (name2.length > name1.length) {
    return `It seems that the navigator named ${name2} hsa the longest name, it has ${name2.length} characters.`;
  }
  return `Wow, you both have equally long names, ${name1.length} characters!`;
}

let printResults = longestName(hacker1, hacker2);
console.log(printResults);


//  Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

function string_separator(someString) {
  let letters = "";
  for (let i = 0; i < someString.length; i++) {
    letters += someString[i] + " ";
  }
  let upperCasedString = letters.toUpperCase();
  return upperCasedString;
}

let printstring = string_separator(hacker1);
console.log(printstring);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

function reverseString(someString) {
  let newString = "";
  for (let i = someString.length - 1; i >= 0; i--) {
    newString += someString[i];
  }
  return newString;
}

let reverseResult = reverseString("john");
console.log(reverseResult);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
//  */

/***************************************************************************************** */

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:

// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.

let para= `The bridge will only take You halfway there, to those mysterious lands you long to see. 
Through gypsy camps and swirling Arab fair, and moonlit woods where unicorns run free. 

So come and walk awhile with me and share the twisting trails and wondrous worlds I've known. 

But this bridge will only take you halfway there. The last few steps you have to take alone.

`


 function countWords(str){
   let countedWords = 1;

   for(let i = 0 ; i < str.length; i ++){
      if(str[i] ===" "){
        countedWords += 1;
      }
   }
  return `there are ${countedWords} words`;
 }

 console.log(countWords(para));

// Make your program count the number of times a specific word is repeated. for example purpuses, let's take the word "you" from the paragraphs. 

 function repeatedWords(str){
   let words = str.split(" ")
   let repeated = 0;
   for(let i = 0 ; i < words.length; i ++){
    if (words[i].toLowerCase() ==="you"){
       repeated += 1;
    }
   }

   return `the word "you" is mentioned ${repeated} times`;
 }
 console.log(repeatedWords(para));