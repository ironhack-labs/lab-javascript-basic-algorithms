// Iteration 1: Names and Input
let hacker1 = 'Nykolle'
let hacker2 = 'Maxwell'
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if(hacker1.length > hacker2.length ){
  console.log("The driver's name goes first")
}else if (hacker1.length < hacker2.length ){
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}


// Iteration 3: Loops
//3.1 
let hackerUpperCased = "";

for (let i = 0; i < hacker1.length; i++ ){
  hackerUpperCased += hacker1[i].toUpperCase() + " "
}
console.log(hackerUpperCased)

//3.2
 console.log(hacker1.split("").reverse().join(""));

//3.3
if (hacker2.localeCompare(hacker1) === 1){
   console.log("The driver's name goes first.")
} else if (hacker2.localeCompare(hacker1) === -1) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}

