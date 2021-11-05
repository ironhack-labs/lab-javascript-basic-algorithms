// Iteration 1: Names and Input
// 
let hacker1 = "Michael";

console.log("The driver's name is " + hacker1);

let hacker2 = "Diogo";

console.log("The navigator's name is " + hacker2);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length) {
 console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log("Wow,  you both have equally long names, " + hacker1.length + " characters!" );
}

// Iteration 3: Loops
let driverNameUppercase = ""; 
for (let i = 0; i < hacker1.length; i++) {
  driverNameUppercase += hacker1[i].toUpperCase()+ " "; 
}
console.log(driverNameUppercase);

let navNameReverse = ""; 
for (let i = hacker2.length-1; i >= 0; i--) {
  navNameReverse += hacker2[i]; 
}
console.log(navNameReverse);


if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}

//Bonus task #1

let loremVar = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis vel sem imperdiet lobortis. Nunc et bibendum ex, vitae gravida ipsum. Curabitur feugiat, nulla in vulputate pulvinar, purus erat elementum odio, in finibus lacus nunc id nibh. Sed placerat augue libero, non scelerisque justo egestas id. Aliquam lacinia nunc at lectus consectetur accumsan. Suspendisse est nisi, aliquam eget dignissim ac, accumsan ut elit. In et arcu vitae velit volutpat finibus id vel quam. Quisque in massa dolor. Cras at est nec massa sagittis interdum. Integer sit amet molestie diam. Phasellus quis odio quam. Donec enim ipsum, dignissim quis tincidunt in, dictum sit amet lectus. Aenean orci velit, condimentum ac dapibus sed, ultrices non neque. Nam blandit dui vel ultrices condimentum. Quisque interdum tempus malesuada. Nam semper vestibulum molestie. Donec elementum ac enim eu aliquam. Proin congue iaculis mi. Duis pulvinar iaculis magna, at luctus neque. Proin ac lacus nisi. Duis feugiat, neque vitae gravida euismod, velit ante sagittis dolor, vitae scelerisque turpis dolor sit amet neque. Fusce odio nibh, sollicitudin pulvinar orci eu, posuere blandit lacus. Phasellus elit eros, consectetur vel tempor et, tincidunt vel leo. Aliquam congue ipsum eu erat tristique, nec auctor metus sagittis. Nam ac finibus magna. Vivamus ultricies leo diam, vitae varius lectus hendrerit id. Praesent porta nunc eget sem euismod sodales. Fusce massa tortor, egestas maximus maximus ac, posuere vel odio. Phasellus id commodo diam, ut gravida nibh. Pellentesque a maximus risus.";

//Count how many words are in the above three paragraphs of Lorem Ipsum text.

function countWords(loremVar) {
         loremVar = loremVar.replace(/(^\s*)|(\s*$)/gi,"");
         loremVar = loremVar.replace(/[ ]{2,}/gi," ");
         loremVar = loremVar.replace(/\n /,"\n");
         console.log(loremVar.split(' ').length);
      }
      document.write(countWords(loremVar));

//Code sourced from https://newbedev.com/javascript-count-words-in-a-string-no-numbers-javascript-code-example

//Code to count "et" occurrences withing loremVar string.

function countOccurences(loremVar, word) {
   console.log(loremVar.split(word).length - 1);
}
var text= loremVar; 
var count=countOccurences(text,"et");

//Code sourced from https://newbedev.com/javascript-count-how-many-times-a-word-appears-in-a-string-javascript-code-example

//Bonus task #2

//Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:
// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".
// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 😃

var phraseToCheck = ""