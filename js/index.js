// Iteration 1: Names and Input
/*### Iteration 1: Names and Input
	1.1 Create a variable `hacker1` with the driver's name.
	1.2 Print `"The driver's name is XXXX"`.
  	1.3 Create a variable `hacker2` with the navigator's name.
  	1.4 Print `"The navigator's name is YYYY"`.
*/
let hacker1 = 'Idoia'; 
//driver´s name.
console.log(`The driver´s name is ${hacker1}.`);

let hacker2 = 'Jesus';
//navigator's name.
console.log(`The navigator's name is ${hacker2}.`)
// Iteration 2: Conditionals
/*
### Iteration 2: Conditionals
  2.1. Depending on which name [is longer], print:
  
	  - `The driver has the longest name, it has XX characters.` or 
	  - `It seems that the navigator has the longest name, it has XX characters.` 
	  - `Wow, you both have equally long names, XX characters!`.
*/
let hacker1 = 'xxxxx';
let hacker2 = 'yyyyyyyyy';


if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops
/*### Iteration 3: Loops
  3.1 Print all the characters of the driver's name, separated by a space and [in capitals]
  i.e. `"J O H N"`*/
let hacker1 = 'Idoia';
let hacker2 = 'yyyyyyyyy';

let newHackersName = hacker1.toUpperCase().split('').join(' ');
console.log(newHackersName);
/* 3.2 Print all the characters of the navigator's name, in reverse order. 
  i.e. `"nhoJ"`*/
let hacker2 = 'Jesus';
let newHackersName = hacker2.split('').reverse().join('');
  
console.log(newHackersName);
// Con Loop:
let hacker2 = 'Jesus';
let newHackersName = '';

for(let i = hacker2.length - 1; i >= 0; i--) {
  newHackersName += hacker2[i];
}
console.log(newHackersName);

/* 3.3 Depending on the [lexicographic order] of the strings, print:
    - `The driver's name goes first.` 
    - `Yo, the navigator goes first definitely.`
    - `What?! You both have the same name?`
*/
function compareNames(name1, name2) {
    if (name1.toLowerCase() < name2.toLowerCase()) {
      console.log('the drives name goes first')
    } else if (name1.toLowerCase() > name2.toLowerCase()) {
      console.log('the navigators goes first')
    } else {
      console.log('what? both same name')
    }
  }
/*Bonus Time!
Bonus 1:
Go to lorem ipsum generator and:*/

//Generate 3 paragraphs. Store the text in a variable type of string.

var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat metus ligula, ac gravida justo egestas ac. Praesent rhoncus, mi vel placerat porttitor, erat libero facilisis nulla, ac vulputate tellus leo non risus. Proin quis pellentesque elit. Proin dignissim justo sem, sed euismod augue dignissim eu. Proin dignissim nibh quis commodo lobortis. Phasellus odio sem, cursus non odio a, hendrerit egestas est. Pellentesque suscipit elit quis urna tristique, a elementum sem rhoncus.Ut vitae ultricies eros, ac aliquet justo. Aliquam nibh leo, luctus eget metus ut, finibus imperdiet dolor. Phasellus ut felis a urna vestibulum dignissim. Nullam scelerisque enim vitae ex aliquam, a convallis erat fermentum. Proin sit amet efficitur tortor. Suspendisse in risus in tellus interdum luctus. Nulla magna ex, convallis in risus ut, maximus pulvinar quam. Quisque varius ligula erat, in dapibus neque semper in. Nunc hendrerit condimentum magna non posuere. Pellentesque rutrum vitae nunc et auctor.Donec non convallis nulla. Aliquam sollicitudin tempor mauris accumsan luctus. Suspendisse lectus nulla, eleifend ac sagittis ut, aliquam gravida sem. Curabitur vulputate vestibulum dolor, iaculis pellentesque erat condimentum ut. Aenean dignissim, nulla id scelerisque blandit, orci felis sollicitudin libero, sit amet blandit magna arcu a enim. Integer eget dui vitae lectus pretium lobortis. Praesent cursus, justo et consectetur rutrum, odio odio bibendum neque, sed pretium ipsum ante quis ex. Pellentesque accumsan tincidunt lorem eget eleifend. Ut pharetra lacus sed dapibus dictum. Morbi egestas nibh orci, vitae pulvinar arcu auctor vitae. Sed ut sapien cursus, efficitur nisi in, sodales arcu. Morbi pulvinar odio sem, ut tristique lorem cursus at. Nam sed magna at est sodales feugiat et nec ante. Quisque vitae justo ut purus pulvinar consectetur. Praesent accumsan augue condimentum, molestie ligula vitae, vestibulum dolor."

//Make your program count the number of words in the string.
console.log("Words: " + text.split(' ').length);

//Make your program count the number of times the Latin word et appears.
console.log("Et matchs: " + (text.match(/et/g) || []).length); // ["et", "et", "et."].length

/*Bonus 2:
Create a new variable phraseToCheck and have it contain some string value.*/

let text = "Amor, Roma"

/*Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:*/

text = text.replace(/[\s,.!¡¿?:;']/g, '').toLowerCase();

const reverseText = text.split('').reverse().join('')

//console.log(reverseText);

let isPalindrome = reverseText === text;

console.log(isPalindrome);

/*"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".*/