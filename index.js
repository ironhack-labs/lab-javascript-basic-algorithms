console.log("I'm ready!");

//define player names & print them (Iteration 1: Names and Input)

let hacker1 = `John`;
console.log(`The driver's name is ${hacker1}`);

let hacker2 = `Paula`
console.log(`The navigator's name is ${hacker2}`);

//Compare name length (Iteration 2: Conditionals)

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}

  else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }

else if (hacker1.length == hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

//(Iteration 3: Loops)

// 3.1 print name uppercase
let hacker1Uppercase = hacker1.toUpperCase();
let i;
let nameUpper = ``;

for (i = 0; i < hacker1Uppercase.length; i++) {
  nameUpper += `${hacker1Uppercase[i]} `
};

console.log(nameUpper);

//3.2 Print name reverse
let nameReverse = ``;

 for (i = hacker1.length -1; i >= 0; i--) {
   nameReverse = nameReverse + `${hacker1[i]}`
 };

console.log(nameReverse);

//3.3 Lexographic order
 if (hacker1 < hacker2) {
   console.log("The driver's name goes first.")
 }

else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first, definitely.")
}

else if (hacker1 == hacker2) {
  console.log("What?! You both have the same name?")
};