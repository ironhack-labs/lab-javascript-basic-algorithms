// Iteration 1: Names and Input
let hacker1 = "Pablo";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Monica";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

let driverLength = hacker1.length;
let navigatorLength = hacker2.length;

if(driverLength > navigatorLength){
console.log(`The driver has the longest name, it has ${driverLength} characters.`);
}else if(driverLength < navigatorLength){
console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`);
}else{
console.log(`Wow, you both have equally long names, ${driverLength} characters!`);
}

// Iteration 3: Loops
let capitals ="";
for(let i=0; i<driverLength; i++){
  capitals += hacker1[i].toUpperCase() + " ";
}
console.log(capitals);

let reverse ="";
for(let i=navigatorLength-1; i>=0; i--){
  reverse += hacker2[i];
}
console.log(reverse);

let comparation = hacker1.localeCompare(hacker2);

switch(comparation){
  case -1: 
  console.log("The driver's name goes first.");
  break;
  case 1: 
  console.log("Yo, the navigator goes first definitely.");
  break;
  default: 
  console.log("What?! You both have the same name?"); 
}