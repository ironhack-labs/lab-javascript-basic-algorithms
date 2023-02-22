// Iteration 1: Names and Input
const hacker1 = 'Ismael';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Sophie';
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

const driverLength = hacker1.length;
const navigatorLength = hacker2.length;

if (driverLength > navigatorLength) {
  console.log(
    `The driver has the longest name, it has ${driverLength} characters.`);
} else if (driverLength < navigatorLength) {
  console.log(
    `The navigator has the longest name, it has ${navigatorLength} characters.`);
} else {
  console.log(
    `You both have equally long names, with ${driverLength} characters.`);
}

// Iteration 3: Loops

let driverSpace=[];
for (let i=0; i < driverLength; i++){
  driverSpace += hacker1[i].toUpperCase() + " "
}
console.log(driverSpace)

let reverseNavigator=[];
for (let i=navigatorLength-1; i>=0; i--){
  reverseNavigator += hacker2[i]
}
console.log(reverseNavigator)


const order = hacker1.localeCompare(hacker2);
switch (order){
  case -1 : 
    console.log("The drivers name goes first.")
    break;
  case 0 :
    console.log("That means thats we have the same name.")
    break;
  case 1 :
    console.log("Yo, the navigator goes first definitely.")
    break;
}

  