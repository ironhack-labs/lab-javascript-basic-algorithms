//Iteration 1: Names and Input

let hacker1 = "Milan"
console.log("The driver's name is "+ hacker1)

let hacker2 = "Ron"
console.log("The navigator's name is " + hacker2)

//Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if(hacker2.length > hacker1.length){
  console.log(`It seems that navigator has the longest name, it has ${hacker2.length} characters`)
}
else{
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}

//Iteration 3: Loops
//3.1
let newHacker = "";
let driver = hacker1;

for (let i = 0; i < driver.length; i++) {
  if (i < driver.length - 1) {
    newHacker += driver[i].toUpperCase() + " ";
  }
  else {
    newHacker += driver[i].toUpperCase();
  }
}
console.log( newHacker);

//3.2

let newNavigator = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  newNavigator += hacker2[i];
}

console.log(newNavigator);

//3.3
let lexic = hacker1.localeCompare(hacker2) 
if (lexic =1){
  console.log(`The drive's name goes first.` )
} 
else if (lexic = -1){
  `Yo, the navigator goes first definitely`
}
else{'What?! You both have the same name?'}
