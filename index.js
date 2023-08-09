// Iteration 1: Names and Input
const hacker1 = "Robben";
console.log (`The driver's name is ${hacker1}`);

const hacker2 = "Johnathan";
console.log (`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log (`The driver has the longest name, it has ${hacker1.length}characters.`) 
  } else if (hacker2.length > hacker1.length){
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else { console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops
const lastIndex = hacker1.length - 1; 
for (let i = 0; i <= lastIndex; i++) {
  const char = hacker1[i];
    console.log(char);
}

let upperCase = "";
for (let i = 0; i <= lastIndex; i++){
  upperCase += hacker1[i].toUpperCase() + " ";
  }
console.log(upperCase);

let reverseCase = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  const char2 = hacker1[i];
  reverseCase += char2;
}
console.log(reverseCase);

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
  } else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.")
  } else {
    console.log("What?! You both have the same name?")
  }







