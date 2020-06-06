// Iteration 1: Names and Input
//Iteration 1
let hacker1 = 'Alejandro';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Gabriel';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
//Iteration 2
if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }
  else if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  }
  else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }

// Iteration 3: Loops
//Iteration 3.1
let driverName = '';
let navName = '';

for(let char of hacker1){
  char += ' ', driverName += char.toUpperCase();
}
console.log(driverName)

//Iteration 3.2
for(let char of hacker2){
  char += ' ', navName += char.toUpperCase();
}
console.log(navName)

//Iteration 3.3
var names = [hacker2, hacker1];
names.sort();
if (names.startsWith("A", 0) === true) console.log("The driver's name goes first.");
else if (names.startsWith("G", 0) === true) console.log("Yo, the navigator goes first definitely.");
else consle.log("What?! You both have the same name?");

//returns an error at line 38: names.startsWith is not a function.