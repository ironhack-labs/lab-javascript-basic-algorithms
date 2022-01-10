// Iteration 1: Names and Input
const hacker1 = "Marten";
const hacker2 = "Bart";

console.log("The driver's name is " +hacker1);
console.log("The navigator's name is " +hacker2);


// Iteration 2: Conditionals and Iteration 3: Loops
if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
    console.log("the drivers name goes first")
  } else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
    console.log("What?! You both have the same name?");
  }
   
  var resultsDriver = hacker1
  console.log(resultsDriver.split('').join(' ').toUpperCase());
  
  var resultsNavigator = hacker2
   console.log(resultsNavigator.split("").reverse().join(""));


