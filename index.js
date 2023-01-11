// Iteration 1: Names and Input
const hacker1 = "Alice";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Alice";
console.log(`The driver's name is ${hacker2}`);


// Iteration 2: Conditionals
function compareNameLength(driver, navigator) {
  
  // Check which name's length is the greater number
  if (driver.length > navigator.length) {
    console.log (`The driver has the longest name, it has ${driver.length} characters.`);
  } else if (navigator.length > driver.length) {
    console.log (`It seems that the navigator has the longest name, it has ${navigator.length} characters.`);
    
    // If the names have the same length, log one of the name's lenght.
  } else {
    console.log(`Wow, you both have equally long names, ${driver.length || navigator.length} characters!`);
  }
}

compareNameLength(hacker1, hacker2);


// Iteration 3:
function printIndividualLetters(name) {
  
  // Create an empty variable
  let convertedName = "";
  
  // Create a loop that starts at the first character of the array and stops at the last
  for (let i = 0; i < name.length; i++) {
    
    // Convert each letter to upper case
    convertedName += name[i].toUpperCase();
    
    // As long as the loop hasn't reached the last character, add a space at the end of the character
    if (i < name.length - 1) {
      convertedName += " ";
    }
  }
  console.log(convertedName);
}

printIndividualLetters(hacker1);


function printLettersInReverse(name) {
  
  // Create an emtpy variable
  let convertedName = "";
  
  // Create a loop that starts at the last character of the string and stops at the first 
  for (let i = name.length - 1; i >= 0; i--) {
    
    // Add each character to the convertedString variable
    convertedName += name[i];
  }
  console.log(convertedName);
}

printLettersInReverse(hacker2);


function detectLexicographicalOrder(driver, navigator) {
  
  // Check whether the two names are identical
  if (driver !== navigator) {
    
    // Create a new array and push the two names into it
    let nameList = [];
    nameList.push(driver, navigator);
    
    // Sort the array alphabetically
    nameList.sort();
    
    // Compare the two names with the first element in the array, and log the first name accordingly
    if (nameList[0] === driver) {
      console.log("The driver's name goes first.");
    } else if (nameList[0] === navigator) {
      console.log("Yo, the navigator goes first definitely.");
    }
    console.log(nameList);
    
    // If both names are identical, log string for identical names
  } else {
    console.log("What?! You both have the same name?");
  }
}

detectLexicographicalOrder(hacker1, hacker2);


// Bonus 1
const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum hendrerit ligula. Vivamus enim eros, mollis placerat felis non, pulvinar fringilla augue. Praesent laoreet neque eu purus consectetur, eget porta augue semper. Curabitur dictum augue sed diam mattis semper. Morbi tristique malesuada purus consequat feugiat. Phasellus vitae justo in ligula malesuada malesuada non eu orci. Suspendisse malesuada sapien elit, eu tincidunt erat aliquam a. Nulla eget porta felis, nec dapibus magna. Morbi ut neque non risus gravida venenatis. Donec sit amet tortor nulla. Mauris scelerisque ultricies condimentum. Sed lacinia turpis non blandit tempor. Mauris ut ultrices dolor. Aenean leo ex, aliquam et vehicula sit amet, tempor sed enim. Phasellus dictum pellentesque malesuada. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam hendrerit libero quam, in viverra nibh cursus non. Morbi consectetur leo eget commodo maximus. Aliquam porta porta pulvinar. Ut pulvinar ex sit amet justo malesuada, id posuere velit placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras sed tempor ipsum, sed suscipit felis. Morbi fermentum ex nec elit hendrerit luctus. Nullam non tempor orci, sit amet rhoncus sapien. Donec sed sapien efficitur, facilisis tortor non, sodales ligula. Vivamus eu vulputate risus. Sed dapibus euismod nibh, nec tempor ligula luctus id. Donec sed tincidunt purus, quis fringilla arcu. Nunc consequat dignissim porttitor. Ut bibendum blandit velit, ut molestie leo.";

function countWordsInString(string) {
  // Remove special characters and space and make string lower case to make it comparable, then split into an array
  string = string.replaceAll(/\,|\.|;/g,'');
  console.log(string);
  let wordList = string.split(" ");
  
  // Count length of the new array
  console.log(wordList.length);
}

countWordsInString(longText);


function countWordAppearance(string, targetWord) {
  
  // Remove special characters and space and make string lower case to make it comparable, then split into an array
  string = string.replaceAll(/\,|\.|;/g,'');
  let wordList = string.split(" ");
  
  // Filter the array for the target word into a new array and count its length
  let numberOfAppearances = wordList.filter(word => word.toLowerCase() === targetWord.toLowerCase()).length;
  console.log(numberOfAppearances);
}

countWordAppearance(longText, "et");


const phraseToCheck = "Was it a car or a cat I saw?";
const secondPhraseToCheck = "This is not a palindrome."

function detectPalindrome(string) {
  
  // Remove special characters and spaces and make string lower case to make it comparable
  string = string.replaceAll(/\s|[^a-zA-Z0-9 ]/g,'').toLowerCase();
  
  // Create a new variable that contains the target string in reverse order
  let reverseString = ""
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  
  // Compare the reversed string with the target string
  if (string === reverseString) {
    console.log("This string is a palindrome!");
  } else {
    console.log("This string doesn't seem to be a palindrome.");
  }
}

detectPalindrome(phraseToCheck);
detectPalindrome(secondPhraseToCheck);