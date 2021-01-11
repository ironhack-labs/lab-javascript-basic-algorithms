// Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = 'Dimitrij';

// 1.2 Print `"The driver's name is XXXX"`.
console.log(`"The driver's name is ${hacker1}"`);

// 1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = 'Dimitrij';

// 1.4 Print `"The navigator's name is YYYY"
console.log(`"The navigator's name is ${hacker2}"`);


// Iteration 2: Conditionals

// 2.1. Depending on which name is longer, print:
if(hacker1.length > hacker2.length)
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
else if (hacker1.length < hacker2.length)
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
else
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);


// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let stringToBePrinted = hacker1[0].toUpperCase();
for(let ndx = 1; ndx < hacker1.length; ndx++) 
    stringToBePrinted += ' ' + hacker1[ndx].toUpperCase();
 console.log(stringToBePrinted);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let stringToBePrinted2 = "";
for(let ndx = hacker2.length - 1; ndx >= 0; ndx--) 
    stringToBePrinted2 += hacker2[ndx];
 console.log(stringToBePrinted2);

// 3.3 Depending on the lexicographic order of the strings, print:
if(hacker1 < hacker2)
    console.log(`The driver's name goes first.`);
else if (hacker1 > hacker2)
    console.log(`Yo, the navigator goes first definitely.`);
else
    console.log('What?! You both have the same name?');

// Bonus 1:
// Go to lorem ipsum generator and:

// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

// # Store the text in a variable type of string.
// Using backticks for visibility
let loremString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a augue suscipit, bibendum mauris eget, interdum augue. Cras condimentum nisi sed ultricies pretium. Vivamus convallis purus vel diam eleifend vestibulum. Phasellus vestibulum ligula ac tortor blandit fringilla. Curabitur at orci et enim semper mollis. Aliquam tristique leo quis finibus pharetra. Donec eget erat ac purus mattis aliquam quis vehicula neque. Proin congue, augue et ultricies tincidunt, elit mauris pulvinar diam, at accumsan lectus augue ut purus. Donec risus justo, malesuada ut varius dapibus, ultricies in est. Nullam sagittis velit ac metus tempus, id aliquam metus lobortis. Ut ut nisi rutrum, vulputate metus at, convallis augue. Sed blandit leo id est egestas convallis. Ut porttitor ut augue ac sagittis. Nunc nisl sem, volutpat in condimentum sed, feugiat sed massa.

Cras ultrices erat magna, vitae ullamcorper quam venenatis sed. Proin vestibulum lorem ac ipsum varius, ut faucibus dolor aliquam. Suspendisse elementum neque id est iaculis dictum. Suspendisse ex dolor, convallis et fermentum nec, euismod aliquet erat. Nam et leo dolor. Phasellus malesuada nisl vitae ipsum porttitor, non pulvinar augue consectetur. Cras auctor nec magna sit amet bibendum. Nullam et mi vitae lectus fringilla sagittis a sit amet mi. Fusce vitae nulla ac orci tincidunt tincidunt sit amet sit amet risus. Nullam ut sagittis massa. Cras a molestie massa.

Curabitur at porta massa. Pellentesque consequat ante in diam porttitor, at pellentesque sapien fringilla. Nunc a vehicula magna. Duis libero leo, posuere sodales luctus a, imperdiet vitae orci. In eu mi et velit fermentum semper eu et mi. Integer non ornare dolor, at commodo arcu. In ac dui imperdiet erat ullamcorper volutpat. Etiam rhoncus nisl augue, sed iaculis odio convallis sed. Nulla rhoncus nulla a suscipit ultricies. Sed in turpis eget nulla molestie dapibus eget id erat. Integer ut mattis velit. Sed pulvinar ipsum ac nunc tristique, vel vestibulum quam commodo. Suspendisse porttitor, libero ut viverra volutpat, turpis risus imperdiet neque, at posuere nunc ex ac est.`;

// Make your program count the number of words in the string.
// Approach to count words: search for a letter, then for a non-letter and non-number, increment the letter count
// ...until the end of the text

const letters = "abcdefghijklmnopqrstuvwxyz";
loremString = loremString.toLowerCase();
let numberOfWords = 0;
let ndx = 0; 

while(ndx < loremString.length) {
  if(letters.includes(loremString[ndx])) {
    numberOfWords += 1; 
    while(letters.includes(loremString[ndx])) {
        ndx += 1;
        }
    }
  ndx += 1;
}
console.log(`\nNumber of words in the lorem ipsum string: ${numberOfWords}`);

ndx = 0;
let words = {};
let word;
while(ndx < loremString.length) {
  word = "";
  if(letters.includes(loremString[ndx])) {
    numberOfWords += 1; 
    while(letters.includes(loremString[ndx])) {
        word += loremString[ndx];
        ndx += 1;
        }
    if (word in words)
        words[word] += 1;
    else
        words[word] = 1;
    }
  ndx += 1;
}
console.log(`\nNumber of 'et' words in the lorem ipsum string: ${words['et']}`);

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

const palindromes = [ "A man, a plan, a canal, Panama!"
                ,"Amor, Roma"
                ,"race car"
                ,"stack cats"
                ,"step on no pets"
                ,"taco cat"
                ,"put it up"
                ,"Was it a car or a cat I saw?"
                ,"No 'x' in Nixon"];

console.log("\n", palindromes);



