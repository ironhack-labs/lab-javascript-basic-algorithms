// Iteration 1: Names and Input

//Created var hacker1 storing a name
const hacker1 = `Letty`;
//Print The driver's name is Letty (hacker1) to console
console.log(`The driver's name is ${hacker1}`);

//Created var hacker2 storing a name
const hacker2 = `Dominic`;
//Print The navigator's name is Dominic (hacker2) to console
console.log(`The navigator's name is ${hacker2}`);


//Iteration 2: Conditionals
//Used conditional statement to check the length of hacker1 against hacker2 and print output to the console depending on results
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
  }

// Iteration 3: Loops
//Created new var to store results of exercise
//Used toUpper case method to uppercase hacker1, then split each letter to separate them out into single elements of an array, then rejoined them separated by a ' '
let separatedDriver = hacker1.toUpperCase().split(``).join(` `);

//Print results of the above to my console
console.log(separatedDriver);

//Created a new var to store results of exercise
let hacker2Reverse = '';

//Used a for loop to iterate backwards over hacker2 
for (let i = hacker2.length - 1;i >= 0; i--) {
    //Concatenated the results of each iteration, storing this in hacker2Reverse 
    hacker2Reverse += hacker2[i];
}

//Print results of the above to my console
console.log(hacker2Reverse)


//let rankedVars = hacker1.localeCompare(hacker2); a different way to compare strings by lexicographical value

//Used an if statement to compare the lexicographical value of hacker1 and hacker2, then print results to console based on this result
  if (hacker1 > hacker2) {
    console.log(`Yo, the navigator goes first definitely.`);
  } else if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`);
  } else {
    console.log(`What?! You both have the same name?`);
  }

//bonus 1

//Create a var storing 3 <p> of ipsum (i used samuelIpsum because that is fun and fun is motivating)
const samuelIpsum = "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass."

//Store each word as an element of an array (in the order they appear in my ipsum)
// Used array method split to split words at ' ' and remove instances of ' ', did not worry about punctuation as that doesn't affect word count for this type of challenge, but could use split to remove these as well?
const words = samuelIpsum.split(` `);

//console.log(words) test to see if this works

//Print out the number of words in my ipsum selection 
//I used a word count tool to check for accuracy
console.log(words.length);

//Create a var to store number of word occurrences, used let because this number will be updated
let numberOfDesiredWord = 0;

//Create const for the word i'm going to check against ipsum (instead of et, i used toy because et will not appear in samuelIpsum)
const desiredWord = `toy`;

//Loop over the array of words created from ipsum with a for of loop
for (word of words) {
  if (word === desiredWord){
    //Increases the value of numberOfDesiredWord by one each time desiredWord occurs in the word array
    numberOfDesiredWord++;
  }
}

//Print number of occurrences of desired word
//Checked in a text doc
console.log(numberOfDesiredWord)

//Created variable to check
const phraseToCheck = `Amor, Roma`;

//Create new var to lowercase all chars (toLowerCase method), then remove all punctuation (replace method) (i found a regex dictionary to help with this!)
const checkedPhrase = phraseToCheck.toLowerCase().replace(/[.,\/ #!$%?\^&\*;:{}=\-_`~()]/g,"");

//Created a new var that is the reverse of checkedPhrase to compare order, then split it into an array so that i could use the reverse method on it, the rejoined it into a string
const reversedCheckedPhrase = checkedPhrase.split('').reverse().join('');

//Checked checkedPhrase against reversedCheckedPhrase to see if they are strictly equal and return boolean value true if this is true, I checked with non-palindromes
isPalindrome = checkedPhrase === reversedCheckedPhrase;

//Print isPalindrome to console
console.log(isPalindrome);

//Check if they are the same visually just in case
console.log(checkedPhrase)
console.log(reversedCheckedPhrase)





