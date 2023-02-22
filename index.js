// Iteration 1: Names and Input

let hacker1 = "Beti";
console.log("The driver's name is " + hacker1);

let hacker2 = "Paula";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

let hacker1length = hacker1.length;
let hacker2length = hacker2.length;

if (hacker1length > hacker2length){
  console.log("The driver has the longest name. it has " + hacker1lenght + " characters.");
  
} else if (hacker2length > hacker1length){
  console.log("It seems that the navigator has the longest name. It has " + hacker2length + " characters.");
} else {
  console.log("Wow, you both have equally long names. " + hacker1length + "characters!.");
}

// Iteration 3: Loops

let result = "";
for (let i = 0; i < hacker1.length; i++) {
  result += hacker1[i].toUpperCase() + " ";
}

result = result.trim();
console.log(result);

// Bonus 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam enim arcu, fermentum vitae rutrum at, feugiat quis orci. Morbi vulputate purus eu dui finibus, nec imperdiet turpis pretium. Nulla eget hendrerit est. Suspendisse ornare lorem vitae purus lacinia, sit amet ullamcorper lorem ultricies. Vestibulum non enim a ligula aliquet dignissim nec quis diam. Etiam rutrum lobortis varius. Aenean vel tellus at sem tristique faucibus in sed augue. \n Nam auctor orci nisl, sit amet faucibus diam faucibus at. Fusce porttitor, ligula et tincidunt luctus, urna ligula blandit quam, eget congue est ante sed nisi. Quisque nec congue orci. Sed rutrum congue tortor in molestie. Suspendisse lacus enim, varius lacinia urna quis, suscipit viverra est. Curabitur a orci nec libero iaculis vulputate quis a orci. Fusce eu posuere dui, et pulvinar magna. Vestibulum accumsan dapibus odio vel lobortis. Donec quis nibh sit amet nibh ultrices mattis.  \n In in nisi et lacus cursus mattis. Sed faucibus congue erat. Vestibulum quis porta justo. Phasellus semper sollicitudin nulla vitae tincidunt. Etiam lacinia accumsan eleifend. Vestibulum eget libero quis libero blandit accumsan eu et nisi. Pellentesque massa lectus, ultrices in quam ac, egestas auctor odio. Sed turpis tellus, tempor quis consequat id, rhoncus non augue. Vivamus in ultrices turpis.";

const wordCount = longText.trim().split(/\s+/).length;
console.log("Number of words in the string: ", wordCount);

const count = (longText.match(/\bet\b/g) || []).length;
console.log("Number of times 'et' appears:", count);

// Bonus 2

const phraseToCheck = "Madam In Eden, I'm Adam.";

function isPalindrome(phraseToCheck) {
  const cleanStr = phraseToCheck.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanStr === cleanStr.split("").reverse().join("");
}

if (isPalindrome(phraseToCheck)) {
  console.log(`${phraseToCheck} is a palindrome`);
} else {
  console.log(`${phraseToCheck} is not a palindrome`);
}
