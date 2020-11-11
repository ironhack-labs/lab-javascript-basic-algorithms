// Iteration 1: Names and Input
let hackers1 = "Etouma";
console.log(`The driver's name is ${hackers1}`);

let hackers2 = "Mina";
console.log(`The navigator's name is ${hackers2}`);

// Iteration 2: Conditionals
if (hackers1.length > hackers2.length) {
  console.log(
    `The driver has the longest name, it has ${hackers1.length} characters`
  );
} else if (hackers1.length < hackers2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hackers2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hackers1.length} characters!`
  );
}

// Iteration 3: Loops
let tmp = "";
for (let i = 0; i < hackers1.length; i++) {
  tmp += hackers1[i].toUpperCase() + " ";
}
console.log(tmp);

let tmps = "";
for (let i = hackers2.length - 1; i >= 0; i--) {
  tmps += hackers2[i];
}
console.log(tmps);

let teamOwl = [hackers1, hackers2];
teamOwl.sort();
console.log(teamOwl);
