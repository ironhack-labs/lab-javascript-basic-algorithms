// Iteration 1: Names and Input

var hacker1 = { firstName: 'Jeremy', lastName: 'Couderc' };
var message = 'The drivers name is ' + hacker1.firstName + ' ' + hacker1.lastName + '!!';
console.log(message);

// Iteration 2: Conditionals

const message = `The driver has the longest name, it has XX characters`;

console.log(message.length);

const  XX = '53';
const message2 = `The driver has the longest name, it has ${XX} characters`;
console.log(message2);

// Iteration 3: Loops

const driver = "Jeremy";
const navigator = "Marco";

console.log(driver.toUpperCase());

const str = "Marco";

let newString = "";
for(let i = str.length -1; i >= 0; i--){
  newString += str[i];
}
console.log(newString);
