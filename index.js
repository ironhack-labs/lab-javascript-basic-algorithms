// Iteration 1: Names and Input
let hacker1 = "Lucy";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Tom";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
    // code to execute if condition1 is true
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters`)
    // code to execute if condition2 is true
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);

    // code to execute if condition1 and condition2 are false
  }
  let newDriversName = "";
for(let i=0; i < hacker1.length; i++) {
    newDriversName += hacker1[i].toUpperCase() + " ";
}
console.log(newDriversName.trim());
console.log(hacker1.toUpperCase().split("").join(" "));

let newNavigatorsName = "";
for(let i = hacker2.length -1; i >=0; i--) {
    newNavigatorsName += hacker2[i];
}
console.log(newNavigatorsName);
console.log(hacker2.split('').reverse().join(''));
  

// Iteration 3: Loops
hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();
if (hacker1 > hacker2) {
    console.log("The driver's name goes first.")
  }
  else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first definitely.")
  }
  else {
    console.log("What?! You both have the same name?")
  } 
  
  // otra solución, con el método localeCompare():
  
  if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.")
  }
  else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.")
  }
  else {
    console.log("What?! You both have the same name?")
  } 