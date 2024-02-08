// Iteration 1: Names and Input
let hacker1 = "Naiomy";

console.log("The driver's name is " + hacker1);

let hacker2 = "Jaser";

console.log("The navigator's name is " + hacker2);

//result: The driver's name is Naiomy
//        The navigator's name is Jaser



// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has 6 characters.")
}
else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has 5 characters.")
}  
else {console.log("Wow, you both have equally long names, XX characters!")}
  
//result: The driver has the longest name, it has 6 characters.


// Iteration 3: Loops

//3.1
const hacker1Upper = hacker1.toUpperCase();
function addSpace(str) {
  return str.split('').join(' ');
}

const result1 = addSpace(hacker1Upper);
console.log(result1);

//3.2
let hackerInreverse = "";
for (let i = hacker2.length - 1; i >= 0; i--){
  hackerInreverse += hacker2[i];
}
console.log(hackerInreverse);

//3.3

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
  } else if (hacker1.localeCompare(hacker2) > 0) {
    console.log ("Yo, the navigator goes first definitely");
  }
  else {
    console.log ( "What?! You both have the same name?");
  }