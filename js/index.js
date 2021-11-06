// Iteration 1: Names and Input

let hacker1 = "Ale";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Calvin";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!.`
  );
}

// Iteration 3: Loops

// 3.1;
let tempString = hacker1.split("");
let tempArray = [];

for (let i = 0; i < hacker1.length; i++) {
  tempArray.push(hacker1[i].toUpperCase());
}

console.log(tempArray.join(" "));

// 3.2;
let tempString2 = hacker2.split("");
let tempArray2 = [];

for (let j = hacker2.length - 1; j >= 0; j--) {
  tempArray2.push(tempString2[j]);
}
console.log(tempArray2.join(""));

// 3.3;
switch (hacker1.localeCompare(hacker2)) {
  case -1:
    console.log("The driver's name goes first.");
    break;

  case 1:
    console.log("Yo, the navigator goes first definitely.");
    break;

  default:
    console.log("What?! You both have the same name?");
    break;
}
