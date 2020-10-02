// Iteration 1: Names and Input
let hacker1 = "Pablo"; 
console.log(`"The driver's name is ${hacker1} "`);

let hacker2 = "Monica";
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals
let hackers1Long = hackers1.length;
let hackers2Long = hackers2.length;

if (hackers1Long > hackers2Long) {
  console.log(`The driver has the longest name, it has ${hackers1Long} characters`)
} else {
  console.log(`It seems that the navigator has the longest name, it has ${hackers2Long} characters`)
}

// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
for (let i = 0; i < hackers1.length; i++ ){
    console.log(hackers1[i].toUpperCase());
   }
   
//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
for (let m = hackers2.length - 1; m >= 0; m--) {
     console.log(hackers2[m]);
   }
   
   
//3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if (hackers1 < hackers2) {
   console.log("The driver's name goes first.") 
 } else if (hackers1 > hackers2) {
   console.log('Yo, the navigator goes first definitely.')
 } else {
   console.log('What?! You both have the same name?')
}
   
//BONUS 1
//Generate 3 paragraphs. Store the text in a variable type of string.
let loremIpsumText = "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br> Why do we use it? <br> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). <br> Where does it come from? <br> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32." 
console.log(loremIpsumText)

//Bonus 1.2 Make your program count the number of words in the string.
let sumOfWords = 1;
for (let i = 0; i < loremIpsumText.length -1; i++) {
  if (loremIpsumText[i] === " ") {
   sumOfWords++
  }
}
console.log(sumOfWords)
/*also 
 let countWords = loremIpsumText.split(' ').length;
 console.log(countWords)
*/

//Bonus 1.3 Make your program count the number of times the Latin word et appears.
let countWords = loremIpsumText.split('et').length - 1;
console.log(countWords)
//Finding out how to do the same without split method. 

//Bonus 2 Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome
let phraseToCheck = "race car";

for (i = 0; i < phraseToCheck.length; i++) {
  console.log(phraseToCheck[i])
}

for (i = phraseToCheck.length - 1; i >= 0; i--) {
  console.log(phraseToCheck[i]);
}
//Finding out how to compare two loops, nested loops in an if/else statement... 
