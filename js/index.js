// Iteration 1: Names and Input
let hacker1 = "David";
console.log(`"The driver's name is ${hacker1}"`);
let hacker2 = "Gina";
console.log(`"The first navigator's name is ${hacker2}"`);
let hacker3 = "Esteban";
console.log(`"The second's navigator's name is ${hacker3}"`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length && hacker1.length > hacker3.length) {
  console.log(`"The driver ${hacker1} has the longest name, it has       
      ${hacker1.length} characters."`);
} else if (hacker2.length > hacker1.length && hacker2.length > hacker3.length) {
  console.log(
    `"It seems that the navigator ${hacker2} has the longest name, it has ${hacker2.length} characters."`
  );
} else if (hacker3.length > hacker1.length && hacker3.length > hacker2.length) {
  console.log(
    `"It seems that the navigator ${hacker3} has the longest name, it has ${hacker3.length} characters."`
  );
} else {
  console.log(
    `"Wow, you three have equally long names, ${hacker3.length} characters!"`
  );
}

// Iteration 3: Loops
for (i = 0; i < hacker1.length; i++) console.log(hacker1[i]);

for (i = hacker2.length; i > 0; i--) console.log(hacker2[i]);
