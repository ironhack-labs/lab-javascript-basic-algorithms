const hacker1 = "Juan";
    console.log("The driver's name is " + hacker1 + ".");    

const hacker2 = "Zhanna";
    console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
var driverLength = hacker1.length;

var navigatorLength = hacker2.length;

  if (driverLength > navigatorLength) {
    console.log(`The driver has the longest name, it has ${driverLength} characters.`)
  }
  else if (driverLength < navigatorLength) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`)
  }
  else {
    console.log(`Wow, you both have equally long names, ${navigatorLength} characters!`)
  }

// Iteration 3: Loops
let driverNameUppercase = hacker1.toUpperCase().split("").join(" ");
console.log(driverNameUppercase)

var navigatorNameReverse = hacker2;
var reverseNavigator = "";
  for (let i = navigatorNameReverse.length - 1; i >= 0; i--) {
    reverseNavigator += navigatorNameReverse[i];
} 
console.log(reverseNavigator)

var driverInitial = hacker1[0]
var navigatorInitial = hacker2[0]
  if (driverInitial < navigatorInitial) {
    console.log("The driver's name goes first.")
  }
  else if (driverInitial > navigatorInitial) {
    console.log("Yo, the navigator goes first definitely.")
  }
  else {
    console.log("What?! You both have the same name?")
  }
