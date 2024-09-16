// Iteration 1: Names and Input
const hacker1= `Aline`;
console.log(`The driver's name is ${hacker1}`);

 const hacker2= "Natan";
console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals
const driver = hacker1;
const navigator = hacker2;

if(driver.length > navigator.length) {
  
  console.log(`The driver has the longest name, it has  ${driver.length} characters`);
}
else if(driver.length < navigator.length){
  
  console.log (`It seems that the navigator has the longest name, it has ${navigator.length} characters.`);
}
else { (driver.length = navigator.length)
console.log (`Wow, you both have equally long names, ${driver.length} characters!`);
}

// Iteration 3: Loops

//3.1
let separateName = "";

for (let  letter of driver) {
  separateName += letter.toUpperCase() + " ";
}

console.log(separateName);

//3.2
let reverseName = "";
for(let i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i];
}
console.log(reverseName);

//3.3
function findLongestName(hacker1, hacker2) {
  let longestName = "";
  if (hacker1.length > hacker2.length) {
    longestName = hacker1;
  } else {
    longestName = hacker2;
  }
  return longestName;
}
let longestName = findLongestName(driver, navigator);
for (let i = 0; i < longestName.length; i++) {
  if (driver === navigator) {
    console.log(`What?! You both have the same name?`);
    break;
  } else if (driver[i] > navigator[i]) {
    console.log(`Yo, the navigator goes first, definitely.`);
    break;
  } else {
    console.log(`The driver's name goes first.`);
    break;
  }
}

