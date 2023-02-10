// Iteration 1: Names and Input
const hacker1 = "Elisa";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Krisztian";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The ${hacker1} has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the ${hacker2} has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops

let name = '';
// Iteration 3: Loops
for (let i = 0; i < hacker1.length; i++) {
  name += hacker1[i].toUpperCase() + " ";
}

let name2 = '';
for(let i = hacker2.length - 1; 0 <= i; i--){
  name2 += hacker2[i] + " ";
}

if(hacker1 < hacker2){
    console.log("The driver's name goes first.");
  }else if(hacker2 < hacker1){
    console.log("Yo, the navigator goes first definitely.");
  }else if(hacker1 === hacker2){
    console.log("What?! You both have the same name?");
  }