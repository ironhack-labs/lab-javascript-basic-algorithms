// Iteration 1: Names and Input
let hacker1 = "Victor";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Pedro";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!.`
  );
}

// Iteration 3: Loops

// 3.1

let it1 = "";

for (i = 0; i < hacker1.length; i++) {
  it1 += hacker1[i].toUpperCase() + " ";
}
console.log(it1);

// 3.2
let it2 = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  it2 += hacker2[i];
}

console.log(it2);
