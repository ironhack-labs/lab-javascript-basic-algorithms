// Iteration 1: Names and Input

const hacker1 = "Tesa";
console.log("The driver's name is " + hacker1);

const hacker2 = "Haripriya";
console.log("The navigators name is " + hacker2);

// Iteration 2: Conditionals
const driversName = "Tesa";
const navigatorsName = "Haripriya";
if(driversName.length > navigatorsName.length)
  {
    console.log("The driver has the longest name, it has XX characters")
  }
else if(navigatorsName.length > driversName.length)
  {
    console.log("It seems that the navigator has the longest name, it has " + navigatorsName.length + " characters" )
  }
else {
  console.log("ow, you both have equally long names," + driversName.length  + "characters");
}

// Iteration 3: Loops
 // 1.1 
 //3.1
const driverName = "Tesa";
console.log (driverName.toUpperCase());

//3.2
driverName = "Tesa"
let myName = ""
for (let i = driverName.length - 1; i >= 0; i--) {
 myName +=driverName[i];
 }
console.log(myName);

//3.3

const firstName  = "Tesa"
const secondName = "Haripriya";

const alphaOrder = firstName.localeCompare(secondName);

if(alphaOrder >0)
  {
    console.log("The driver's name goes first.")
  }
else if (alphaOrder <0)
  {
    console.log ("Yo, the navigator goes first, definitely.");
  }
else {
  console.log("What?! You both have the same name?");
}