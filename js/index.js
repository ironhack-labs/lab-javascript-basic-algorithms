// Iteration 1: Names and Input

let hacker1 = 'John';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Mario';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

hacker1 = hacker1.length;
hacker2 = hacker2.length;

if (hacker1 > hacker2) {
    console.log(`The driver has the longest name, it has ${hacker1} characters`);
} else if (hacker2 > hacker1) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1} characters!.`);
}

// Iteration 3: Loops

//3.1
const driverName = 'John';
const result = driverName.split('').join(' ').toUpperCase();
    console.log(result);
    
//3.2
const navigatorName = 'Mario';
const reverseName = navigatorName.split('').reverse().join('');
console.log(reverseName)

//3.3

const driverOrder = 'John'.localeCompare('Mario');
const navigatorOrder = 'Mario'.localeCompare('John');

if (driverOrder > navigatorOrder ){
  console.log("The driver's name goes first.")
} else if ( navigatorOrder > driverOrder){
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}