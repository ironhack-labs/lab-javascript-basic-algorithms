// Iteration 1: Names and Input
let hacker1 = "Nathalia Maia"
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Flávia Maia"
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log("What?! You both have the same name?");
  }
  
// Iteration 3: Loops

//3.1

const splittedName = hacker1.split('');
let result = ""

splittedName.forEach((character) => {
  result += character.toUpperCase() + " ";
})

//3.2

let result2 = "";
const splittedName2 = hacker2.split('');

const reversedName = splittedName2.reverse();

reversedName.forEach((character) => {
  result2 += character;
})

//3.3

const lexicographicOrder = hacker1.localeCompare(hacker2);

if(lexicographicOrder === -1){
  console.log("The driver's name goes first.");
} else if(lexicographicOrder === 1){
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

