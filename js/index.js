// Iteration 1: Names and Input
//
const hacker1 = "JoãoSe";
console.log("The driver's name is", hacker1);

const hacker2 = "Hector";
console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals

let hacker1Char = hacker1.length;
let hacker2Char = hacker2.length;

if (hacker1Char > hacker2Char) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}

  else if (hacker2Char > hacker1Char) {
    console.log (`The navigator has the longest name, it has ${hacker2.length} characters.`);
  }

  else {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters.`);
  }

// Iteration 3: Loops

let hacker1Spaced = "";
for (let i = 0; i < hacker1.length; i++) {
	hacker1Spaced += hacker1[i] += " "
}
    console.log (hacker1Spaced.toUpperCase().trim())

let hacker2Reversed = "";
for (let i = hacker2.length -3; i >= 0; i--) {
    hacker2Reversed += hacker1[i];
}
   console.log(hacker2Reversed);


if (hacker2 > hacker1) {
  console.log(`The driver's name goes first.`)
} else if (hacker1 > hacker2) {
  console.log(`Yo, the navigator goes first definitely.`)
} else {
  console.log(`What?! You both have the same name?`)
}
