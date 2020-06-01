// Iteration 1: Names and Input

console.log("I'm ready!");

var driver = 'Nina'; 
console.log(`${driver}`);

var hacker2 = 'Simon';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

var hacker2Length = hacker2.length; 
console.log(hacker2Length);

var driverLength = driver.length;
console.log(driverLength);

if(hacker2.length < driver.length) {
  console.log(`Driver's name is longer! It has ${driverLength} characters`)
} else if (hacker2.length === driver.length) {
console.log(`Names have the same length!`)
} else {
console.log(`Navigator's name is longer! It has ${hacker2Length} characters`)
}

// Iteration 3: Loops 

// Name capitalized with spaces 

let name=""
for(i = 0; i <= driver.length; i++) { 
  name=name+driver.charAt(i).toUpperCase() + " " 

}  
console.log(name)


// Reversed Name 

var reverseStr = '';
for(var i = driver.length-1; i>= 0; i--)
{
reverseStr += driver[i];
}
console.log(reverseStr);  

// Names order

var order = driver.localeCompare(hacker2); 

if (order < 0) {
  console.log("The driver's name goes first.")
} else if (order > 0) {
  console.log("Yo, the navigator goes first definitely.")
} else if (order === 0) {
  console.log("What?! You both have the same name?")
} else {}