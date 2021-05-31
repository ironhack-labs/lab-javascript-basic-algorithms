// Iteration 1: Names and Input
const hacker1 = "Nelly";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Irina";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!.`
  );
}

// Iteration 3: Loops

// console.log(hacker1.toUpperCase().split("").join(" ").toString());

//3.1
let result = "";
for (let i = 0; i < hacker1.length; i++) {
  result += `${hacker1.charAt(i)} `;
}

console.log(result);

//3.2
let reverse = "";

for (let i = hacker1.length; i--; ) {
  reverse += `${hacker1[i]} `;
}
console.log(reverse);
