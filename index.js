// Iteration 1: Names and Input

/* Create a variable hacker1 with the driver´s name. */
let hacker1 = 'Raven';

/* Print "The driver´s name is XXX". */
console.log(`The driver's name is ${hacker1}`);

/* Create a variable hacker2 with the navigator's name. */
let hacker2 = 'Trey';

/* Print "The navigator's name is YYYY". */
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

// Depending on which name is longer, print: //

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  } 
  else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  } 
  else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
  }
  

// Iteration 3: Loops

/* Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N". */

let space = '';
for (let i = 0; i < hacker1.length; i++) {
  space += hacker1[i] + ' ';
} 
console.log(space.toUpperCase());

/* Print all the characters of the navigator's name, in reverse order, i.e., "nhoJ". */

let reverse = '';
for (let i = hacker2.length -1; i >= 0; i--) {
  reverse += hacker2[i]
} 
console.log(reverse);

/* Depending on the lexicographic order of the strings, print: */

if (hacker1 > hacker2) {
    console.log("The driver's name goes first.")
  } 
  else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first definitely.")
  } 
  else {
    console.log("What?! You both have the same name?")
  } 

// Alternative code //

/* 
if (kacker1.localCompare(hacker2) === -1) {
  console.log("The driver´s name is first.");
} 
else if (hacker1.localCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definietly.");
} 
else {
  console.log("What?! You both got the same name?");
}
*/

// Bonus Material 1 //

let paragraph1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
let paragraph2 = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
let paragraph3 = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.';

/* store all 3 paragraphs in a new string variable named longText. */
let longText = paragraph1 + paragraph2 + paragraph3;

/* count the number of words in the string */
let longTextArray = longText.split(' ');
let longTextArrayLength = longTextArray.length;
console.log(longTextArrayLength);

/* count the number of times the Latin word et appears. 

For this exercise, I did initialize a variable called etCount to 0. I then used the for loop 
to iterate through the array called `longTextArray`. 
For each element in the array, the code checks if the element is equal to the string 'et'. If it is, the etCount variable is incremented by 1. Finally, the code prints the value of etCount to the console using console.log().*/

let etCount = 0;
for (let i = 0; i < longTextArray.length; i++) {
  if (longTextArray[i] === 'et') {
    etCount++;
  }
}
console.log(etCount);


// Bonus Material 2 // 

let phraseToCheck = "A man, a plan, a canal, Panama!";
phraseToCheck = phraseToCheck.replace(/[ ,!.]/g, "").toLowerCase();

let reversedString = phraseToCheck.split('').reverse().join('');

if (phraseToCheck === reversedString) {
  console.log('String is a palindrome');
}
else {
  console.log('String Not a palindrome');
}


/*

Just an alternative method to research about later!

let phraseToCheck1 = "A man, a plan, a canal, Panama!";

// Remove non-letter characters and convert to lowercase
let cleanPhrase = phraseToCheck1.replace(/[^a-zA-Z]/g, '').toLowerCase();

// Reverse the string
let reversedPhrase = cleanPhrase.split('').reverse().join('');

// Check if the reversed string is equal to the original string
if (cleanPhrase === reversedPhrase) {
  console.log(`"${phraseToCheck1}" is a palindrome.`);
} else {
  console.log(`"${phraseToCheck1}" is not a palindrome.`);
}
*/