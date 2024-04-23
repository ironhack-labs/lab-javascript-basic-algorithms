// Iteration 1: Names and Input


// Iteration 2: Conditionals


// Iteration 3: Loops


console.log("--------names and input-----------");
let hacker1;
let hacker2;

hacker1 = "Johnny";
hacker2 = "Anna"
console.log("Iteration #1");
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

console.log("--------conditionals-----------");

hacker1.length > hacker2.length
  ? console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    ) // If hacker1's name is longer
  : hacker1.length === hacker2.length
  ? console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!.`
    ) // If both names are of equal length
  : console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    ); 


console.log("--------loops-----------");

let choosenName = "";
for (let i = 0; i < hacker1.length; i++) {

  choosenName += hacker1[i].toUpperCase() + " "; 
}
console.log(choosenName);

let reverseName = ""; 
for (let i = hacker1.length - 1; i >= 0; i--) {
  
  reverseName += hacker1[i]; 
}


if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first."); 
  } else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first, definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
  