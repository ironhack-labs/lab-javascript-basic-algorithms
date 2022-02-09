// Iteration 1: Names and Input
// 1.1 Create a variable `hacker1` with the driver's name.

const hacker1 = "Paul";

console.log("The driver's name is "+ hacker1 + ".");

const hacker2 = "Mir";

console.log("The navigator's name is "+ hacker2 + ".");

// Iteration 2: Conditionals


if (hacker1.length === hacker2.length) {
console.log('Wow, you both have equally long names, ' + hacker1.length + ' characters!');
  } else if ( hacker1.length > hacker2.length) {
console.log( hacker1 +" has the longest name, it has " + hacker1.length +" characters.")
  } else {
console.log("It seems that " + hacker2 + "has the longest name, it has "+ hacker2.length + " characters. ")
     };


// Iteration 3: Loops


//3.1
let betweenChars = " ";

let spaces = (hacker1.split('').join(betweenChars));

let result = spaces.toUpperCase();
console.log(result);

//3.2
  
let reversed = result.split("").reverse().join("");
console.log(reversed);




