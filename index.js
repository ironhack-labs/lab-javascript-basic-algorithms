// Iteration 1: Names and Input
let hacker1 = "Elisa";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Alejandro";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

const hacker1Length = hacker1.length;

const hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
  console.log(
    `The driver has the longest name, it has ${hacker1Length} characters.`
  );
} else if (hacker2Length > hacker1Length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2Length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1Length} characters!.`
  );
}

// Iteration 3: Loops

let hacker1WithSpace = "";

for (let i = 0; i < hacker1.length; i++) {
  let hacker1Uppercase = hacker1[i].toUpperCase();

  if (i === hacker1Length - 1) {
    hacker1WithSpace += hacker1Uppercase;
  } else {
    hacker1WithSpace += hacker1Uppercase + " ";
  }
}

console.log(`"${hacker1WithSpace}"`);

let hacker2Reverse = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reverse += hacker2[i];
}

console.log(`"${hacker2Reverse}"`);

for (let i = 0; i < hacker1.length || i < hacker2.length; i++) {
  let compareResult = hacker1[i].localeCompare(hacker2[i]);

  if (compareResult === -1) {
    console.log("The driver's name goes first.");
    break;
  } else if (compareResult === 1) {
    console.log("Yo, the navigator goes first, definitely.");
    break;
  } 
  
}
