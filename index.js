// Iteration 1: Names and Input
let hacker1 = "Akunna";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Davido";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
//Question 2
let hacker1length = hacker1.length;
let hacker2length = hacker2.length;

if (hacker1length > hacker2length) {
  console.log(
    ` ${hacker1} has the longest name,it has ${hacker1length} characters.`
  );
} else if (hacker2length > hacker1length) {
  console.log(
    `It seems that ${hacker2} has the longest name, it has ${hacker2length} characters`
  );
} else {
  console.log(
    `Wow, you ${hacker1} and ${hacker2} have equally long names, ${
      hacker1length + hacker2length
    }  characters!`
  );
}

// Iteration 3: Loops
// Question 3
let name = "";
for (let i = 0; i <= hacker1.length - 1; i++) {
  let letter = hacker1[i];
  name += letter + " ";
}
console.log(name.toUpperCase());

let name2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  let letter = hacker2[i];
  name2 += letter;
}
console.log(name2);

//.localCompare()

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("the driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("yo,the navigator name goes first,definitely.");
} else {
  console.log(`what? you both have the same name?`);
}
