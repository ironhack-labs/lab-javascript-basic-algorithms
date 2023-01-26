// Iteration 1: Names and Input

//const hacker1 = "Bruno Mourao";

//console.log("the drivers name is", hacker1);

//const hacker2 = "Natalia Nossack";

//console.log("the navigator name is", hacker2);

//primeira interacao OKAY

// Iteration 2: Conditionals

//console.log(" o driver tem " hacker1.length);

//console.log(hacker2.length);

// Iteration 3: Loops

const hacker1 = "Bruno Mourao";

const hacker2 = "Natalia Nossack";

let message1 = `The driver's name is ${hacker1}.`;
console.log(message1);

let message2 = `The navigator's name is ${hacker2}.`;
console.log(message2);

//------------------------------------------------------------------------------------

let letras1 = hacker1.length;

let letras2 = hacker2.length;

if (letras1 > letras2) {
  console.log(`The driver has the longest name, it has ${letras1} characters`);
} else if (letras1 < letras2) {
  console.log(
    `It seems that the navigator has the longest name, it has ${letras2} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${letras1}, ${letras2}, characters!`
  );
}

//------------------------------------------------------------------------------------
