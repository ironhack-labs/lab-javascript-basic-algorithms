// Iteration 1: Names and Input
let hacker1 = "Oscar";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Alex";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let name = "";
for (let i=0; i<hacker1.length; i++){
  let letter = hacker1[i].toUpperCase();
  if(i===hacker1.length-1){
    name += letter;
  } else {
    name += letter + " ";
  }
}
console.log(name);

// Iteration 3: Loops
