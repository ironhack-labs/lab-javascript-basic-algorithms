// Iteration 1: Names and Input
let ironhacker1 = 'Silvana';
console.log("The driver's name is: "+ironhacker1);

let ironhacker2 = 'carlos';
console.log("The navigator's name is: " + ironhacker2)

// Iteration 2: Conditionals
if(ironhacker1.length == ironhacker2.length) {
  console.log('You both have equally long names: ' + ironhacker1.length + ' characters')
} else if (ironhacker1.length > ironhacker2.length) {
  console.log("The driver has the longest name, it has " + ironhacker1.length + " characters")
} else if (ironhacker1 < ironhacker2) {
  console.log("The navigator has the longest name, it has " + ironhacker2.length + "characters");
}


// Iteration 3: Loops
console.log(ironhacker1.toUpperCase().split("").join(" "));

console.log(ironhacker2.split("").reverse().join(""));

let ironhacker2 = 'Carlos'  
let ironhacker1="Silvana"  

if (ironhacker1 < ironhacker2) { console.log ("the driver`s name goes first" )} 
else if (ironhacker1 > ironhacker2){ console.log("the navigator`s name goes first definetely")} 
else if (ironhacker1==ironhacker2){ console.log("what? you both have the same name?")}