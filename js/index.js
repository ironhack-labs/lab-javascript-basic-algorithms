// Iteration 1: Names and Input
let hacker1 = "Humberto";
let hacker2 = "Maia";

console.log(`The driver's name is ${hacker1}`);

console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters`);}
    else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters!`)
  }
    else {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters`)
  }


// Iteration 3: Loops

let upperCaseDriver = "";

for (let i=0; i < hacker1.length; i++) { 
 upperCaseDriver += hacker1[i].toUpperCase() + " ";
}

console.log(upperCaseDriver);

let reverseNav = "";

for (let i=hacker2.length - 1; i >= 0; i--) {
  reverseNav += hacker2[i];
}

console.log(reverseNav);


for (i=0; i<hacker1.length; i++) {
  if (hacker1[i]<hacker2[i]) {
    
    console.log("The driver's name goes first.")
    break;
  }
  
  else if (hacker1[i]>hacker2[i])  {
    console.log("Yo, the navigator goes first definitely.")
    break;
  }
  else if (hacker1===hacker2) {
    console.log("What?! You both have the same name?")
    break;
  }
  else {
    continue;
  }
}

