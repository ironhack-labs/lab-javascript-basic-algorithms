// Iteration 1: Names and Input
let hacker1 = "Joshi";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Danshi";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const name1 = "Joshi";
console.log(name1.length);

const name2 = "Danshi";
console.log(name2.length);

if (name1.length > name2.length) {
  console.log(
    `The driver has the longest name, it has ${name1.length} characters.`
  );
} else if (name2.length > name1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${name2.length} characters.`
  );
} else {
  console.log(
    `Wow! You both have equally long names, ${name2.length} characters.`
  );
}

// Iteration 3: Loops
let name3 = " ";
for (let i = 0; i < 5; i += 1) {
  name3 += name1[i] + " ";
}
console.log(name3);

const allBig = "name3";
console.log(name3.toUpperCase());
