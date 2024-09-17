// Iteration 1: Names and Input

const hacker1 = "Juan";
  console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Lucas";
  console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length = hacker2.length} characters!`)
}

// Iteration 3: Loops

let hacker1UpperCase = "J u a n";
  console.log(hacker1UpperCase.toUpperCase());

let hacker2Reverse = "Lucas"
let reversed = "";

for ( let i = hacker2Reverse.length - 1; i >= 0; i--) {
  reversed = reversed + hacker2Reverse[i];
}
  console.log(reversed);

let abc = "ABCDEJGHIFKLMNOPQRSTUVWXYZ";

for (let i = 0; i < abc.length; i++) {
  abc = abc[i]; 

  if (i = "J") {
    console.log(`The driver's name goes first.`)
  } else if ( i = "L") {
    console.log(`Yo, the navigator goes first, definitely.`)
  } else {
    console.log(`What?! You both have the same name?`)
  }
}