
// Iteration 1: Names and Input
let hacker1 = "Nawel";
let hacker2 = "Abraham";
console.log(`the driver's name is ${hacker1}`);
console.log(`the navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
let hacker1length = hacker1.length
let hacker2length = hacker2.length
if (hacker1length> hacker2length){
  console.log(`The driver has the longest name, it has  ${hacker1length}  characters.`); }
  else if (hacker2length> hacker1length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2length} characters `);
}
else {
  console.log(`Wow, you both have equally long names,${hacker2length}  characters!`);
  
}

// Iteration 3: Loops
let HACKER1 = hacker1.toUpperCase();
let spacedName = "";
for (let i = 0; i < HACKER1.length; i++) {
  spacedName += `${HACKER1[i]} `;
}
console.log(spacedName);
