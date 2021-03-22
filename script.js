//VARIABLES
/* 
Variables cannot start with numbers – only letters, dollar signs and underscores 
Reserved keywords also cannot be used as variable names: 
*/

//Declaring a Variable
let client;
let mouse;

//Variable Assignment
client = "chrome" + " emoji";
console.log(client);

let name = "Anna"; //initializing a variable - providing it with a value for the first time
name = "Thomas"; //can easily reassign variables

//const cannot be reassigned – whenever possible use const; don't use var at all (outdated)
const cat = "jerry";

//DATA TYPES
/*
There are two data types – objects and primitive data types. 
primitive (6): number, string, booleean, null, undefined, symbol (all except symbol are objects)
*/

//STRING
let userName = "Jim";
console.log(typeof userName);
userName = 23;
console.log(typeof userName);

const greeting = "Hello World";
const message = greeting + userName;
console.log(message);

//String Methods and Properties
console.log(greeting.length)

const firstChar = greeting[0];
const lastChar = greeting[greeting.length - 1];
console.log(lastChar);
//another way const firstChar = greeting.charAt(0);

//indexOf can bee used to get the index of a certain character
console.log(greeting.indexOf('e')); // this is the first instance

//lastIndexOf gets you the last index
console.log(greeting.lastIndexOf('o'));

//SLICE
//returns a substring from a string with a given range specific 

const sliced = greeting.slice(0, 3);
console.log(sliced); // 0-3 "exlusive" (the 3rd index is not included)
const param = 1;
console.log(greeting.slice(param)); // variable must be numeric value

//toUpperCase() – turns character or word to uppercase
console.log(greeting.toUpperCase());
//strings are immutable, therefore you cannot change them – you have to reassign them

let userName2 = "alice";
const upperCased = userName2[0].toUpperCase() + userName2.slice(1);
console.log(upperCased);

//NUMBERS

const distance = 70000;
const price = 19.99;

//Math Operators
/*
5 + 3   addition
6 - 3   subtraction
6 / 3   division
4 * 5   multiplication
4 ** 2  exponentiation
*/

//modulo
console.log(4 % 2); // 4 / 2 = 2 and the remainder is 0
console.log(5 % 2); // 5 / 2 = 2 with a remainder of 1

let counter = 0;
//all three options below create the same result
counter = counter + 1;
counter += 1;
counter++;
console.log(counter++)

//BOOLEAN – undefined and null; evaluates to either true or false

console.log(5 > 3);
console.log(5 <= 5);

//THE EQUALITY OPERATOR
console.log('4' == 4);
console.log ('4' === 4);
// == compares values across data types, while === checks for strict equivalence including across data type

//LOGICAL OPERATORS
/*
||  logical or
&&  logical and
!   negation
!== not equal
*/
console.log(5 > 3 || 2 > 4);

//Falsy values = empty strings, 0, null, undefined, NaN – undefined respresents the unintentional absensce of value, whereas null is intentional absence
const password = "";
if (password) {
    console.log("This is true.")
}
else {
    console.log("This is not true.");
}

//CONDITIONALS AND LOOPS
const age = Number(prompt("How old are you?"));
if (age >= 18) {
    alert("You can drive in Germany.");
}
else if (age === 17) {
    alert("You can drive with a licensed driver.");
}
else {
    alert("You are too young to drive.")
}

//Switch Statements

const language = prompt("What is your native language?");
switch (language) {
    case "French" :
        console.log("Bonjour");
        break;
    case "English" :
        console.log("Hello");
        break;
    default:
        console.log("Unrecognized language.");
}

//Iterations - Loops

for (let i = 0; i < 1; i++) { // (where to start; under what conditions we continue looping; increment thereafter);
    console.log(i)
}
console.log("Done");

//while loops use the same logic as for loops
counter = 0;
while (counter < 11) {
    console.log(counter);
    counter++;
}


//////////



