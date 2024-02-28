// Iteration 1: Names and Input
let hacker1 = "Feryal";
let hacker2 = "Raphaël";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let lengthHacker1 = hacker1.length;
let lengthHacker2 = hacker2.length;

if (lengthHacker1 > lengthHacker2) {
  console.log(
    `The driver has the longest name, it has ${lengthHacker1} characters.`
  );
} else if (lengthHacker1 < lengthHacker2) {
  console.log(
    `It seems that the navigator has the longest name, it has ${lengthHacker2} characters.`
  );
} else {
  console.log(`Wow, you bot h have equally long names, XX characters!`);
}

// Iteration 3: Loops
hacker1=hacker1.toUpperCase()
let space =""
for(let i = 0 ; i < hacker1.length ; i++){
    space += hacker1[i] + " "
}
console.log(space)


