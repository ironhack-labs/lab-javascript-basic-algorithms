// Iteration 1: Names and Input
let hacker1 = "XXX";
console.log(`The driver's name is §{hacker1}`)
let hacker2 = "YYY";


// Iteration 2: Conditionals
// Iteration 1: Names and Input
let hacker1 = "XXXX";
dName = `The driver's name is ${hacker1}`;
console.log (dName);


let hacker2 = "YYYY";
console.log( "The driver's name is "+ hacker2)

let a = hacker1.length;
console.log(a);

let b = hacker2.length;
console.log(b);




// Iteration 2: Conditionals

let driver = "Peter";
let navigator = "Jens";



let wordLengthDriver = driver.length;
console.log(wordLengthDriver)

let wordLengthNavigator =navigator.length;


if ( driver.length > navigator.length); {
  console.log(`The driver has the longest name, it has ${wordLengthDriver} characters`);
} else if ( driver.length < navigator.length); {
  console.log(`It seems that the navigator has the longest name, it has ${wordLengthNavigator} characters.`);
} else {
  console.log(`Wow, you both have equally long names, XX characters!.`);
}



// Iteration 3: Loops
const driverName = "JOHN";

const firstIndex = driverName.length - 4; // 4 - 1 --> 3

 

for (let i = firstIndex; i <= 0; i++) {

  let char = driverName[i];

  console.log(char);
}